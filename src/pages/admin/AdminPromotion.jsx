import React, { useState } from "react";
import { db } from "../../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import axios from "axios";

const AdminPromotionUploader = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!image) return alert("Please select an image");
    setUploading(true);

    try {
      // 1. Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "ppc_preset"); // Replace with your preset

      const cloudinaryRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dssrvq7pe/image/upload", // Replace with your Cloudinary details
        formData
      );

      const imageUrl = cloudinaryRes.data.secure_url;

      // 2. Save to Firestore
      await setDoc(doc(db, "promotions", "current"), {
        imageUrl,
        title,
        description,
        active: true,
      });

      alert("Promotion uploaded successfully!");
      setImage(null);
      setTitle("");
      setDescription("");
    } catch (err) {
      console.error("Upload error", err);
      alert("Failed to upload promo");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-xl rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4">Upload Promotion</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="mb-4 block w-full border rounded px-4 py-2"
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 block w-full border rounded px-4 py-2"
      />
      <input
        type="text"
        placeholder="Short Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="mb-4 block w-full border rounded px-4 py-2"
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {uploading ? "Uploading..." : "Upload Promotion"}
      </button>
    </div>
  );
};

export default AdminPromotionUploader;
