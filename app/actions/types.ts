export interface ActionResponse {
  success: boolean;
  message: string;
  role?: "admin" | "user";
}
