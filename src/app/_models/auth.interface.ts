export interface LoginResponse {
  token: string;
  refreshToken: string;
  isPasswordChange: boolean;
  userId: number;
}
export interface LoginRequest {
  userName: string;
  password: string;
  rememberMe: boolean;
  captchaText: string | null;
  templateId: number;
}
