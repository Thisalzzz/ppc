import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100">
      {/* Decorative gradient header */}
      <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
      
      <div className="p-6 flex-1">
        <div className="flex items-start mb-4">
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full">
              {job.department}
            </span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{job.location}</span>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-3">{job.description}</p>
      </div>
      
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <span className="inline-flex items-center text-xs font-semibold px-3 py-1 bg-gray-100 text-gray-800 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {job.type}
          </span>
          
          <a
            href="/careers/apply"
            className="relative w-full sm:w-auto px-5 py-2.5 font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg group overflow-hidden cursor-pointer"
          >
            <span className="absolute top-0 left-0 w-full h-0.5 bg-blue-300 transition-all duration-300 group-hover:h-full"></span>
            <span className="relative flex items-center justify-center gap-1">
              Apply Now
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobCard;