import React from 'react';
import { Star, Phone } from 'lucide-react';
import type { Driver } from '../types';

interface DriverCardProps {
  driver: Driver;
}

export function DriverCard({ driver }: DriverCardProps) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-xl transition">
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{driver.name}</h3>
          <div className="flex items-center text-sm text-gray-600">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span>{driver.rating.toFixed(1)}</span>
          </div>
          <p className="text-sm text-gray-600">
            {driver.vehicle.color} {driver.vehicle.model}
          </p>
          <p className="text-sm text-gray-500">{driver.vehicle.plate}</p>
          <p className="text-sm text-gray-500">ETA: {driver.eta}</p>
        </div>
        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
          <Phone size={20} />
        </button>
      </div>
    </div>
  );
}
