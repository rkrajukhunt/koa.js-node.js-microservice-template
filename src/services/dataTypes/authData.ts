export default interface AuthorizationData {
    token: string;
    route: string;
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
    isNipigeAdmin: boolean;
    isNipigeTenant: boolean;
}

interface AuthorizationDataResponse {
  _id: string,
  category: string,
  tenant: string,
  roles: [string],
  authentication: {
    otpVerified: boolean,
    email: string,
    userName: string,
    passwordHash: string
  },
  iat: number
}

export interface AuthorizationResponse {
  status: number,
  data: AuthorizationDataResponse
}
