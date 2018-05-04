import {Gym} from '../../machine/models/gym.model';

// TODO :
// Objective, measurements
export interface Adherent {
  _id: string;
  firstName: string,
  lastName: string,
  birthDate: Date,
  sessionFrequency: number,
  gym: Gym,
  profileCompleted: boolean,
  email: string,
  gender:string
}
