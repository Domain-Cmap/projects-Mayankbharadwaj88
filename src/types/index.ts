export interface FareEstimate {
  baseFare: number;
  distance: number;
  time: number;
  total: number;
  distanceRate: number;
  timeRate: number;
  surge: number;
}

export interface Ride {
  id: string;
  pickup: string;
  destination: string;
  price: number;
  status: 'pending' | 'accepted' | 'in-progress' | 'completed';
  driver?: Driver;
  rider: User;
  createdAt: Date;
  estimatedTime: number;
  distance: number;
  paymentMethod: 'cash' | 'upi' | 'card';
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  phone?: string;
}

export interface Driver extends User {
  vehicle: {
    model: string;
    plate: string;
    color: string;
  };
  rating: number;
  currentLocation?: string;
  eta?: number;
  languages: string[];
}