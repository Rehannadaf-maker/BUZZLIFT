import { Star } from "lucide-react";

export default function TestimonialCard({ review }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition">
      <Star className="text-yellow-500 mb-3" size={28} />
      <p className="text-gray-700 italic">“{review}”</p>
    </div>
  );
}
