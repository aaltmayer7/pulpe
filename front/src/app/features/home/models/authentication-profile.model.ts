export interface AuthenticationProfile {
  id: string;
  login: string;
  password: string;
  token?: string;
  lastName: string;
  firstName: string;
  profileCompleted: boolean;
  birhtdate: Date;
  gym: undefined;
  sessionFrequency: number;
  gender: string;
  objective: undefined;
  isCoach: boolean;
}
