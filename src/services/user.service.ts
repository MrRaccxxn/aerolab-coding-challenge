import { HttpClient } from "../core/services/HttpClient";
import { User } from "../models/User.model";

export class UserService extends HttpClient {
  private static classInstance?: UserService;

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new UserService();
    }

    return this.classInstance;
  }

  public getUser = async () => await this.instance.get<User>(`user/me`);

  public addPoints = async (amount: number) =>
    await this.instance.post(`user/points`, {
      amount: amount,
    });
}
