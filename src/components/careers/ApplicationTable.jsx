import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config'; // Adjust import path as needed

const ApplicationTable = ({ applications, filter, setFilter, onDelete }) => {
  const uniqueJobTitles = [...new Set(applications.map(app => app.jobTitle))];

  const handleDelete = async (applicationId) => {
    if (!window.confirm('Are you sure you want to delete this application?')) return;
    
    try {
      await deleteDoc(doc(db, 'jobApplications', applicationId));
      alert('Application deleted successfully');
      if (onDelete) onDelete(); // Optional: callback to refresh data
    } catch (error) {
      console.error("Error deleting application:", error);
      alert('Failed to delete application');
    }
  };

  return (
    <div className="overflow-x-auto">
      <div className="mb-4">
        <label className="mr-2">Filter by Job Title:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Jobs</option>
          {uniqueJobTitles.map((title, index) => (
            <option key={index} value={title}>{title}</option>
          ))}
        </select>
      </div>
      
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Job Title</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">CV</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications
            .filter(app => filter ? app.jobTitle === filter : true)
            .map((application) => (
              <tr key={application.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{application.name}</td>
                <td className="py-2 px-4 border-b">{application.email}</td>
                <td className="py-2 px-4 border-b">{application.jobTitle}</td>
                <td className="py-2 px-4 border-b">{application.location}</td>
                <td className="py-2 px-4 border-b">
                  <a 
                    href={application.cvUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View CV
                  </a>
                </td>
                <td className="py-2 px-4 border-b">
                  {new Date(application.createdAt?.seconds * 1000).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleDelete(application.id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete application"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationTable;