// src/pages/PropertyPage.jsx
import { useParams } from 'react-router-dom';

export default function PropertyPage() {
  const { id } = useParams();
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100">
      <h1 className="text-3xl font-semibold text-gray-800">Viewing Property: {id}</h1>
    </div>
  );
}
