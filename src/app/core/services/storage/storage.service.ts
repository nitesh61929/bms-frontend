import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { ConstantsService } from "../constants";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private currentStorage = ConstantsService.CURRENT_STORAGE;

  private storageSubject = new Subject<string>();

  constructor() {}

  /**
   * Watch the stroage for change.
   */
  watchStorage(): Observable<any> {
    return this.storageSubject.asObservable();
  }

  /**
   * Get the value with provided key.
   * @param key
   */
  get(key: string): any {
    if (key && this.currentStorage.getItem(key)) {
      return JSON.parse(this.currentStorage.getItem(key));
    }
  }

  /**
   * Store the provided key and value.
   * @param key
   * @param value
   */
  set(key: string, value: any): void {
    if (key) {
      this.currentStorage.setItem(key, JSON.stringify(value));
      this.storageSubject.next(key);
    }
  }

  /**
   * Clear all the stored values from storage.
   */
  clear() {
    this.currentStorage.clear();
  }

  /**
   * Remove item from storage
   * @param key
   */
  clearItem(key) {
    this.currentStorage.removeItem(key);
  }
}
