import React, { useEffect, useState } from 'react';
import ApplicationForm from '../../components/careers/ApplicationForm';
import { db, getDocs, collection } from '../../firebase/config';

const Apply = () => {
  const [jobTitles, setJobTitles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobTitles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'jobListings'));
        const titles = [];
        querySnapshot.forEach((doc) => {
          titles.push(doc.data().title);
        });
        setJobTitles(titles);
      } catch (error) {
        console.error("Error fetching jobs: ", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchJobTitles();
  }, []);

  if (loading) return <div className="text-center p-8">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center p-6">Job Application</h1>
      <ApplicationForm jobTitles={jobTitles} />
    </div>
  );
};

export default Apply;