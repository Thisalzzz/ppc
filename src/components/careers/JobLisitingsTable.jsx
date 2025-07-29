import React from 'react';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';

const JobListingsTable = ({ jobs, onDelete }) => {
  const handleDelete = async (jobId) => {
    if (window.confirm('Are you sure you want to delete this job listing?')) {
      try {
        await deleteDoc(doc(db, 'jobListings', jobId));
        alert('Job listing deleted successfully');
        if (onDelete) onDelete(); // Refresh the list
      } catch (error) {
        console.error("Error deleting job:", error);
        alert('Failed to delete job listing');
      }
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Location</th>
            <th className="py-2 px-4 border-b">Type</th>
            <th className="py-2 px-4 border-b">Deadline</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{job.title}</td>
              <td className="py-2 px-4 border-b">{job.location}</td>
              <td className="py-2 px-4 border-b">{job.type}</td>
              <td className="py-2 px-4 border-b">
                {job.deadline ? new Date(job.deadline).toLocaleDateString() : 'None'}
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleDelete(job.id)}
                  className="text-red-600 hover:text-red-800 px-2 py-1 rounded hover:bg-red-50"
                  title="Delete job listing"
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

export default JobListingsTable;