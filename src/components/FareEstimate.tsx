import React from 'react';
import { IndianRupee } from 'lucide-react';
import type { FareEstimate } from '../types';

interface FareEstimateProps {
  estimate: FareEstimate;
}

export function FareEstimate({ estimate }: FareEstimateProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
      <div className="flex items-center space-x-2">
        <IndianRupee className="text-green-600" size={20} />
        <h3 className="font-medium">Fare Estimate</h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Base fare</span>
          <span>₹{estimate.baseFare.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Distance ({estimate.distance} km)</span>
          <span>₹{(estimate.distance * estimate.distanceRate).toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Time ({estimate.time} min)</span>
          <span>₹{(estimate.time * estimate.timeRate).toFixed(2)}</span>
        </div>
        {estimate.surge > 1 && (
          <div className="flex justify-between text-sm text-orange-600">
            <span>Surge pricing ({estimate.surge}x)</span>
            <span>₹{((estimate.total * estimate.surge) - estimate.total).toFixed(2)}</span>
          </div>
        )}
        <div className="border-t pt-2 flex justify-between font-medium">
          <span>Total</span>
          <span>₹{(estimate.total * (estimate.surge || 1)).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}