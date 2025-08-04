import React, { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import { doc, getDoc, deleteDoc } from "firebase/firestore";

const ManagePromotion = () => {
  const [promotion, setPromotion] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPromotion = async () => {
    setLoading(true);
    try {
      const promoDoc = await getDoc(doc(db, "promotions", "current"));
      if (promoDoc.exists()) {
        setPromotion(promoDoc.data());
      } else {
        setPromotion(null);
      }
    } catch (error) {
      console.error("Error fetching promotion:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this promotion?")) {
      try {
        await deleteDoc(doc(db, "promotions", "current"));
        alert("Promotion deleted successfully!");
        setPromotion(null);
      } catch (error) {
        console.error("Error deleting promotion:", error);
        alert("Failed to delete promotion");
      }
    }
  };

  useEffect(() => {
    fetchPromotion();
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!promotion) {
    return <p className="text-center mt-10 text-gray-500">No active promotion found.</p>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-xl rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4">Current Promotion</h2>
      <img
        src={promotion.imageUrl}
        alt="Promotion"
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h3 className="text-xl font-semibold">{promotion.title}</h3>
      <p className="text-gray-700 mb-4">{promotion.description}</p>

      <button
        onClick={handleDelete}
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
      >
        Delete Promotion
      </button>
    </div>
  );
};

export default ManagePromotion;
