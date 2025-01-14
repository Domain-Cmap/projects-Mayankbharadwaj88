import React, { useState, useEffect } from 'react';
import { LocationSelector } from './components/LocationSelector';
import { DriverCard } from './components/DriverCard';
import { FareEstimate } from './components/FareEstimate';
import { RideStatus } from './components/RideStatus';
import { RideForm } from './components/RideForm';
import { Driver } from './types';

function App() {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<string | null>(null);

  const fetchDrivers = async (from: string, to: string) => {
    setLoading(true);

    // Simulate fetching drivers (replace this with actual API call)
    setTimeout(() => {
      setDrivers([
        {
          name: 'Amit Sharma',
          avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
          rating: 4.5,
          vehicle: { model: 'Tata Nexon', color: 'White', plate: 'ABC123' },
          eta: '5 min',
        },
        {
          name: 'Raj Kumar',
          avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
          rating: 4.7,
          vehicle: { model: 'Honda City', color: 'Black', plate: 'XYZ456' },
          eta: '7 min',
        },
      ]);
      setLoading(false);
    }, 2000); // Simulating API delay
  };

  const handleLocationChange = (from: string, to: string) => {
    setLocation(to);
    fetchDrivers(from, to);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-white">Yatri</h1>
            <p className="text-indigo-100 text-sm">Your Journey, Our Promise</p>
          </div>
        </div>
      </header>

      {/* Location Selector */}
      <LocationSelector onLocationChange={handleLocationChange} />

      {/* Loading state */}
      {loading ? (
        <div className="text-center py-8">
          <p className="text-xl">Loading Drivers...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {drivers.map((driver) => (
            <DriverCard key={driver.name} driver={driver} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
