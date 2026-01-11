
export interface VideoData {
  id: string;
  youtubeId: string;
  title: string;
  description: string;
}

export interface QuizAnswer {
  questionId: number;
  answer: string | boolean;
  isCorrect?: boolean;
}

export interface UserData {
  fullName: string;
  membershipCode: string;
  country: string;
  address: string;
  experience?: string;
}

export enum AppState {
  SPLASH = 'SPLASH',
  LANDING = 'LANDING',
  QUIZ = 'QUIZ',
  FINAL_FORM = 'FINAL_FORM',
  SUCCESS = 'SUCCESS'
}
