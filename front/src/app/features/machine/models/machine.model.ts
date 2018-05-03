import {Gym} from './gym.model';
import {WorkedMuscle} from './worked-muscles.model';

export interface Machine {
  _id: string;
  name: string;
  comment: string;
  workedMuscles: WorkedMuscle[];
  gym: Gym;
}
