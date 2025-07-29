import React, { useState } from 'react';
import { uploadCV } from '../../utils/cloudinaryUpload';
import { db, collection, addDoc, Timestamp } from '../../firebase/config';

const ApplicationForm = ({ jobTitles }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobTitle: jobTitles.length > 0 ? jobTitles[0] : '',
    location: '',
    cv: null
  });
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.cv) return;
  
  setLoading(true);
  
  try {
    // Upload CV to Cloudinary using the dedicated function
    const cvUrl = await uploadCV(formData.cv);
    
    // Save application to Firestore
    await addDoc(collection(db, 'jobApplications'), {
      name: formData.name,
      email: formData.email,
      jobTitle: formData.jobTitle,
      location: formData.location,
      cvUrl,
      createdAt: Timestamp.fromDate(new Date())
    });
    
    setSuccess(true);
    // ... rest of success handling
  } catch (error) {
    console.error("Application error: ", error);
    // Add user-facing error message
    alert("Failed to upload CV. Please try again.");
  } finally {
    setLoading(false);
  }
};

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleFileChange = (e) => {
    setFormData({...formData, cv: e.target.files[0]});
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      {success && (
        <div className="bg-green-100 p-3 mb-4 rounded">
          Application submitted successfully!
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1">Job Title</label>
          <select
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            {jobTitles.map((title, index) => (
              <option key={index} value={title}>{title}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block mb-1">Upload CV (PDF)</label>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white px-4 py-2 rounded ${
            loading ? 'opacity-50' : 'hover:bg-blue-700'
          }`}
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;