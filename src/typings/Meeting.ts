export enum MeetingState {
  BEFORE = 0,
  AFTER = 1,
}

export interface Meeting {
  id: number;
  state: MeetingState;
}
