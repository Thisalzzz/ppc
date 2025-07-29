// components/InquiryForm.jsx
import { useState } from "react";
import { db } from "../../firebase/config"; // Your firebase config
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

export default function InquiryForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "inquiries"), {
        ...form,
        createdAt: serverTimestamp(),
      });

      toast.success("Inquiry sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Error sending inquiry.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold">Send an Inquiry</h2>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="w-full p-3 border rounded"
      />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="w-full p-3 border rounded"
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        rows={4}
        required
        className="w-full p-3 border rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-6 py-2 rounded hover:bg-yellow-500 transition"
      >
        {loading ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
