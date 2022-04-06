import BaseHttpClient from '@/utils/http';
class MeetingService extends BaseHttpClient {
  public constructor(namespace: string, urlHost: string) {
    super(namespace, urlHost);
  }

  /**
   * 获取用户基本信息
   */
  public getRoom() {
    return this.get<any>('/room');
  }
}

export default new MeetingService('meeting', import.meta.env.VITE_SERVICE_HOST);
