import Service from './service';
import { AuthorizationData, AuthorizationResponse } from "./dataTypes";

export default class AuthorizationService extends Service {
  public async fetch(authorizationData: AuthorizationData): Promise<AuthorizationResponse> {
    const url = `/authorization/rbac/authorize`;
    return await this.post(url, authorizationData);
  }
}
