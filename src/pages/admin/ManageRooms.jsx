// src/pages/admin/ManageRooms.jsx
import React, { useState, useEffect } from "react";
import { db } from "../../firebase/config";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function ManageRooms() {
  const [form, setForm] = useState({
    name: "",
    location: "",
    imageUrl: "",
  });
  const [rooms, setRooms] = useState([]);

  // ✅ Your company WhatsApp number (hardcoded)
  const companyWhatsApp = "+94763603917"; // 

  // ✅ Fetch rooms live from Firestore
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "rooms"), (snapshot) => {
      setRooms(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ppc_preset");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dssrvq7pe/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const fileData = await res.json();
    setForm({ ...form, imageUrl: fileData.secure_url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "rooms"), {
      ...form,
      createdAt: serverTimestamp(),
    });
    alert("Room added successfully!");
    setForm({ name: "", location: "", imageUrl: "" });
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this room?")) {
      await deleteDoc(doc(db, "rooms", id));
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add Room</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Room Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input type="file" onChange={handleImageUpload} className="w-full" />
        {form.imageUrl && (
          <img
            src={form.imageUrl}
            alt="preview"
            className="w-32 h-32 object-cover"
          />
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Room
        </button>
      </form>

      {/* ✅ List of existing rooms */}
      <h2 className="text-xl font-bold mt-8 mb-4">Current Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            {room.imageUrl && (
              <img
                src={room.imageUrl}
                alt={room.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
            )}
            <h3 className="text-lg font-semibold">{room.name}</h3>
            <p className="text-gray-600">{room.location}</p>

            <div className="flex gap-2 mt-3">
              <a
                href={`https://wa.me/${companyWhatsApp.replace(
                  "+",
                  ""
                )}?text=${encodeURIComponent(
                  `Hello, I'm interested in the ${room.name} at ${room.location}. Can you give me more details?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                💬 Message
              </a>
              <button
                onClick={() => handleDelete(room.id)}
                className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700"
              >
                🗑 Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
