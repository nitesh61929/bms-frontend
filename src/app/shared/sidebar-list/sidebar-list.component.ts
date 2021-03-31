import { Component, Input, OnInit } from "@angular/core";
import { BaseComponent } from "@core/components";

@Component({
  selector: "app-sidebar-list",
  templateUrl: "./sidebar-list.component.html",
})
export class SidebarListComponent extends BaseComponent implements OnInit {
  @Input() menus: any;
  @Input() className: string;
  @Input() currentUrl: string;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.defaultSelected();
  }

  onClickItem(adminMenu: any) {
    if (adminMenu.routeLink) {
      this.redirectTo(adminMenu.routeLink);
    }
    this.menus.forEach((menu) => {
      if (menu.item === adminMenu.item) {
        menu.expand = !menu.expand;
      } else {
        menu.expand = false;
      }
    });
  }

  defaultSelected() {
    this.menus.forEach((menu) => {
      if (menu.hasOwnProperty("expand") && menu.sub_items) {
        menu.expand = false;
        if (menu.sub_items.find((o) => o.routeLink === this.currentUrl)) {
          menu.expand = true;
        }
      }
    });
  }

  isActive(menu: any) {
    if (menu.hasOwnProperty("expand") && menu.sub_items) {
      return menu.expand;
    } else {
      return menu.routeLink === this.currentUrl;
    }
  }

  onClickItemOfSubItem(subItem: any, menu: any) {
    this.redirectTo(subItem.routeLink);
  }
}
