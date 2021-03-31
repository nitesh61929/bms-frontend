export interface ICreateUpdatePassword {
  userId?: number;
  password?: string;
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}
