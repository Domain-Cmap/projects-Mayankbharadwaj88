import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface RideFormProps {
  onSubmit: (pickup: string, destination: string) => void;
}

export function RideForm({ onSubmit }: RideFormProps) {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(pickup, destination);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <div className="absolute left-3 top-3 text-gray-400">
          <MapPin size={20} />
        </div>
        <input
          type="text"
          placeholder="Pickup location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      
      <div className="relative">
        <div className="absolute left-3 top-3 text-gray-400">
          <Navigation size={20} />
        </div>
        <input
          type="text"
          placeholder="Where to?"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
      >
        Request Ride
      </button>
    </form>
  );
}