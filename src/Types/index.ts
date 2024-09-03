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
  user?: TCuser | null;
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

export type TReview = {
  customerName: string;
  role: string;
  review: string;
  img: string;
};
export type MainContextType = {
  heRef: React.RefObject<HTMLHeadingElement>;
  footerRef: React.RefObject<HTMLDivElement>;
  serviceRef: React.RefObject<HTMLDivElement>;
};

export type Slot = {
  startTime: string;
  date: string;
  endTime: string;
  isBooked: boolean;
  room: Room;
  _id: string;
};
export type Room = {
  amenities: string[];
  capacity: number;
  floorNo: number;
  images: string[];
  isDeleted: boolean;
  name: string;
  pricePerSlot: number;
  roomNo: number;
  _id: string;
};

export type TCuser = {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  role?: string;
};
