import { Injectable } from "@angular/core";
@Injectable()
export class ConstantsService {
  static readonly CURRENT_STORAGE = localStorage;
  static readonly CURRENT_LANGUAGE = "en";
}
