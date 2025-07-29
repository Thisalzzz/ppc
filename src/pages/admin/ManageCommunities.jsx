import React, { useState, useEffect } from 'react';
import { db } from '../../firebase/config';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { uploadToCloudinary } from '../../utils/cloudinaryUpload'; // helper function

const ManageCommunities = () => {
  const [logos, setLogos] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchLogos = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'communities'));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setLogos(data);
    } catch (err) {
      setError(`Failed to fetch logos. ${err.message}`);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setError('');
    try {
      const imageUrl = await uploadToCloudinary(selectedFile);

      await addDoc(collection(db, 'communities'), {
        imageUrl: imageUrl,
        uploadedAt: new Date(),
      });

      setSelectedFile(null);
      fetchLogos();
    } catch (err) {
      setError(`Upload failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'communities', id));
      fetchLogos();
    } catch (err) {
      setError('Failed to delete logo: ' + err.message);
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Manage Trusted Communities</h2>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
        <label className="bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-300">
          Choose File
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {selectedFile && (
          <span className="text-sm text-gray-600">{selectedFile.name}</span>
        )}

        <button
          onClick={handleUpload}
          disabled={loading || !selectedFile}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? 'Uploading...' : 'Upload Logo'}
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {logos.map((logo, index) => (
          <div
            key={logo.id}
            className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center"
          >
            <img
              src={logo.imageUrl}
              alt={`Logo ${index + 1}`}
              className="h-16 w-auto object-contain grayscale mb-2"
            />
            <button
              onClick={() => handleDelete(logo.id)}
              className="text-red-600 hover:underline text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageCommunities;
