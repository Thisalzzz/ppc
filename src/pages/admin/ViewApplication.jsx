import React, { useEffect, useState } from 'react';
import ApplicationTable from '../../components/careers/ApplicationTable';
import { db, getDocs, collection } from '../../firebase/config';

const ViewApplications = () => {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'jobApplications'));
        const apps = [];
        querySnapshot.forEach((doc) => {
          apps.push({ id: doc.id, ...doc.data() });
        });
        setApplications(apps);
      } catch (error) {
        console.error("Error fetching applications: ", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchApplications();
  }, []);

  if (loading) return <div className="text-center p-8">Loading applications...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Job Applications</h1>
      <ApplicationTable 
        applications={applications} 
        filter={filter}
        setFilter={setFilter}
      />
    </div>
  );
};

export default ViewApplications;