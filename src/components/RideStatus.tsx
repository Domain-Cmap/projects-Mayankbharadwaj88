import React from 'react';
import { Clock, MapPin, Navigation, IndianRupee } from 'lucide-react';
import type { Ride } from '../types';

interface RideStatusProps {
  ride: Ride;
  onCancel: () => void;
}

export function RideStatus({ ride, onCancel }: RideStatusProps) {
  const statusMessages = {
    pending: 'Connecting you with a driver...',
    accepted: 'Driver is on the way',
    'in-progress': 'On route to destination',
    completed: 'Ride completed'
  };

  const statusColors = {
    pending: 'bg-yellow-500',
    accepted: 'bg-blue-500',
    'in-progress': 'bg-green-500',
    completed: 'bg-gray-500'
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${statusColors[ride.status]}`} />
          <span className="font-medium">{statusMessages[ride.status]}</span>
        </div>
        {ride.status === 'pending' && (
          <button
            onClick={onCancel}
            className="text-red-600 text-sm hover:text-red-700"
          >
            Cancel
          </button>
        )}
      </div>

      <div className="space-y-3 pt-4">
        <div className="flex items-center space-x-3 text-gray-600">
          <MapPin size={18} />
          <span>{ride.pickup}</span>
        </div>
        <div className="flex items-center space-x-3 text-gray-600">
          <Navigation size={18} />
          <span>{ride.destination}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4">
        <div className="text-center">
          <div className="flex items-center justify-center text-gray-500 mb-1">
            <Clock size={18} />
          </div>
          <div className="text-sm font-medium">{ride.estimatedTime} min</div>
          <div className="text-xs text-gray-500">Est. Time</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center text-gray-500 mb-1">
            <MapPin size={18} />
          </div>
          <div className="text-sm font-medium">{ride.distance} km</div>
          <div className="text-xs text-gray-500">Distance</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center text-gray-500 mb-1">
            <IndianRupee size={18} />
          </div>
          <div className="text-sm font-medium">₹{ride.price}</div>
          <div className="text-xs text-gray-500">Est. Fare</div>
        </div>
      </div>
    </div>
  );
}