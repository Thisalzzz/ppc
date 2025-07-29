import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin-login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700">Welcome, Admin 👋</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div
            onClick={() => navigate('/manage-communities')}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl cursor-pointer transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">🏘️ Trusted Communities</h2>
            <p className="text-sm text-gray-500">Add or remove community logos</p>
          </div>

          <div
            onClick={() => navigate('/manage-testimonials')}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl cursor-pointer transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">🎥 Testimonials / Videos</h2>
            <p className="text-sm text-gray-500">Manage video testimonials</p>
          </div>

          <div
            onClick={() => navigate('/admin/post-job')}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl cursor-pointer transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">💼 Careers</h2>
            <p className="text-sm text-gray-500">Post jobs</p>
          </div>

          <div
            onClick={() => navigate('/admin/view-applications')}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl cursor-pointer transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">💼 View Applications</h2>
            <p className="text-sm text-gray-500">view CVs of applicants</p>
          </div>

                    <div
            onClick={() => navigate('/admin/view-openings')}
            className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl cursor-pointer transition"
          >
            <h2 className="text-lg font-semibold text-gray-800">💼 View Current Jobs</h2>
            <p className="text-sm text-gray-500">view current opening positions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
