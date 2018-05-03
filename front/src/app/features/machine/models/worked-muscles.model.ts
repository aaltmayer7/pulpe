import {Muscle} from '../enums/muscle.enum';
import {Difficulty} from '../enums/difficulty.enum';

export interface WorkedMuscle {
  intensity: Difficulty;
  name: Muscle.Name;
}

