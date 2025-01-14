import React, { useState } from 'react';

interface LocationSelectorProps {
  onLocationChange: (from: string, to: string) => void;
}

export function LocationSelector({ onLocationChange }: LocationSelectorProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (from && to) {
      onLocationChange(from, to); // Call the parent callback with 'from' and 'to'
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mr-2"
        />
        <input
          type="text"
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded-md">
          Find Drivers
        </button>
      </form>
    </div>
  );
}
