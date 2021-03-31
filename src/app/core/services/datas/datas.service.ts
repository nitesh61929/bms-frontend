import { Injectable } from "@angular/core";
import { ICardContent } from "@core/interfaces/card-content";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DatasService {
  cardContents = [
    {
      icon: "domain",
      sub_title: "dashboard.engaged_organizations",
      title: "10",
      color: "accent",
      has_access_module: "*",
    },
    {
      icon: "apartment",
      sub_title: "dashboard.rent_received",
      title: "1.75k",
      color: "primary",
      has_access_module: "*",
    },
    {
      icon: "perm_identity",
      sub_title: "dashboard.rent_due",
      title: "1.25k",
      color: "warn",
      has_access_module: "*",
    },
    {
      icon: "perm_identity",
      sub_title: "dashboard.contracts_expiring_soon",
      title: "4",
      color: "warn",
      has_access_module: "*",
    },

    {
      icon: "perm_identity",
      sub_title: "dashboard.pending_contracts",
      title: "4",
      color: "warn",
      has_access_module: "*",
    },
  ];

  buildingData = [
    {
      name: "Houghton Lodge",
      registration_no: "132465ABC",
      address: "Teenkune, Kathmandu",
      latitude: "28.39 N",
      longitude: "84.124 E",
      description:
        "A lodge can also be a cabin in the woods; like an inn, it’s usually a temporary accommodation. But if you join your local lodge, you’ll be expected to be a regular visitor, at least at the monthly the meetings. Lodge is also a verb, meaning to stay temporarily, or to give someone a place to stay. If you lodge a toothpick between your teeth, though, you’ll probably hope it won’t stay there too long.",
    },
  ];

  countries = [
    {
      value: "Nepal",
      title: "Nepal",
    },
  ];

  provinces = [
    {
      value: "Province No. 1",
      name: "Province No. 1",
    },
    {
      value: "Province No. 2",
      name: "Province No. 2",
    },
    {
      value: "Bagmati Pradesh",
      name: "Bagmati Pradesh",
    },
    {
      value: "Gandaki Pradesh",
      name: "Gandaki Pradesh",
    },
    {
      value: "Province No. 5",
      name: "Province No. 5",
    },
    {
      value: "Karnali Pradesh",
      name: "Karnali Pradesh",
    },
    {
      value: "Sudurpashchim Pradesh",
      name: "Sudurpashchim Pradesh",
    },
  ];

  constructor() {}

  getCardContents(): Observable<ICardContent[]> {
    return of(this.cardContents);
  }
}
