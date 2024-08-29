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
  user: string;
};
