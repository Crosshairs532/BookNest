export type TRegistration = {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  role?: string;
};
export type bookingData = {
  date: string;
  slots: string[];
  room: string;
  user: Record<string, unknown>;
};

export type TRoom = {
  _id: string;
  images: string[]; // Array of image URLs
  name: string; // Room name
  capacity: number; // Capacity of the room
  pricePerSlot: number; // Price per slot in the room
  roomNo: number; // Room number
  floorNo: number; // Floor number where the room is located
  amenities: string[]; // Array of amenities available in the room
  isDeleted: boolean; // Flag indicating if the room is deleted or not
};
