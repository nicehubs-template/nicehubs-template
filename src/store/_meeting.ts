import { Meeting } from './../type/Meeting';
import { defineStore } from 'pinia';

interface IMeetingStore {
  meetingList: Meeting[];
}

const initNoticeContent: IMeetingStore = {
  meetingList: [],
};

const useMeetingStore = defineStore({
  id: 'notice',
  state: (): IMeetingStore => initNoticeContent,
  getters: {
    meetingCount: ({ meetingList }) => {
      return meetingList.length;
    },
  },
  actions: {
    addMeeting(meeting: Meeting) {
      this.meetingList = [...this.meetingList, meeting];
    },
  },
});

export default useMeetingStore;
