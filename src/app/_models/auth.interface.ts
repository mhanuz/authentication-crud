export interface LoginResponse {
    token: string | null;
    refreshToken: string| null;
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