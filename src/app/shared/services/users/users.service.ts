import { Injectable, Injector } from "@angular/core";
import { ApiUrls, StorageKeys } from "@core/enums";
import { BaseService } from "@core/services";
import { ICreateUpdatePassword } from "@shared/interfaces";
import { Observable } from "rxjs";
import { IUser } from "../../interfaces/user/user";

@Injectable({
  providedIn: "root",
})
export class UsersService extends BaseService {
  constructor(injector: Injector) {
    super(injector);
  }

  /**
   *
   * @param parameters
   */
  getUsersList(parameters: any): Observable<any> {
    return this.http.get(ApiUrls.USERS, { params: parameters });
  }

  /**
   *
   * @param userId
   */
  getUserById(userId: number) {
    return this.http.get(`${ApiUrls.USERS}/${userId}`);
  }

  /**
   *
   * @param user
   */
  createNewUser(user: IUser) {
    return this.http.post(`${ApiUrls.USERS}`, user);
  }

  /**
   *
   * @param user
   */
  updateUser(user: IUser) {
    return this.http.put(`${ApiUrls.USERS}/${user.id}`, user);
  }

  /**
   *
   * @param userId
   */
  deleteUser(userId: number) {
    return this.http.delete(`${ApiUrls.USERS}/${userId}`);
  }

  /**
   * Get list of roles.
   * @param params
   * @returns {Observable<Object>}
   */
  getAllRoles(params: any) {
    return this.http.get(`${ApiUrls.GET_ROLES}`, { params });
  }

  createUpdatePassword(payload: ICreateUpdatePassword) {
    return this.http.put(`${ApiUrls.CREATE_UPDATE_PASSWORD}`, payload);
  }

  getUsersByNameOrMobile(params: any) {
    return this.http.get(`${ApiUrls.GET_USER_DETAILS}`, { params });
  }
}
