import { User } from "../User";

export type AppointmentResponse  = {
  id?:number;
  dateTime?: Date | string | null;
  specialty?: string;
  observation?: string;
  appointmentNumber?: string;
  user?:User;
};
