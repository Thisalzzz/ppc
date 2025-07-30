import { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import axios from "axios";

const AdminUploadTestimonial = () => {
  const [video, setVideo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const db = getFirestore();

  const fetchVideos = async () => {
    const snapshot = await getDocs(collection(db, "testimonialVideos"));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setVideos(data);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleUpload = async () => {
    if (!video) return alert("Please select a video first.");
    if (!name.trim()) return alert("Please enter the person's name.");
    if (!company.trim()) return alert("Please enter the company name.");
    if (!description.trim()) return alert("Please enter a description.");

    setUploading(true);

    const formData = new FormData();
    formData.append("file", video);
    formData.append("upload_preset", "ppc_preset");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dssrvq7pe/video/upload",
        formData
      );
      const videoUrl = res.data.secure_url;

      await addDoc(collection(db, "testimonialVideos"), {
        url: videoUrl,
        name: name.trim(),
        company: company.trim(),
        description: description.trim(),
        createdAt: serverTimestamp(),
      });

      alert("Uploaded successfully!");
      setVideo(null);
      setName("");
      setCompany("");
      setDescription("");
      fetchVideos();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }

    setUploading(false);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this video?");
    if (!confirm) return;

    try {
      await deleteDoc(doc(db, "testimonialVideos", id));
      fetchVideos();
    } catch (err) {
      console.error(err);
      alert("Failed to delete video.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Testimonial Video Management</h2>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Upload New Testimonial</h3>
        
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Person's Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Acme Inc."
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write a short testimonial quote or summary..."
              rows={3}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Video File</label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </div>
          <button
            onClick={handleUpload}
            disabled={uploading || !video || !name.trim() || !company.trim() || !description.trim()}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed mt-auto"
          >
            {uploading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Uploading...
              </span>
            ) : "Upload Testimonial"}
          </button>
        </div>
      </div>

      <hr className="my-6 border-gray-200" />

      <h3 className="text-xl font-semibold mb-4 text-gray-700">Existing Testimonials</h3>
      {videos.length === 0 ? (
        <p className="text-gray-500 py-4">No testimonial videos uploaded yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {videos.map((vid) => (
            <div key={vid.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <video src={vid.url} controls className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="font-medium text-gray-900">{vid.name}</h4>
                <p className="text-sm text-gray-600 mb-1">{vid.company}</p>
                <p className="text-gray-700 text-sm italic mb-3">{vid.description}</p>
                <button
                  onClick={() => handleDelete(vid.id)}
                  className="text-sm text-red-600 hover:text-red-800 hover:underline"
                >
                  Delete Testimonial
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminUploadTestimonial;
