import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CrystalLightboxModule } from "@crystalui/angular-lightbox";
import { environment } from "@environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { TranslateModule } from "@ngx-translate/core";
import { UtcToLocalPipe } from "@shared/pipes/datetime/utc-to-local.pipe";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { QuillModule } from "ngx-quill";
import { CardActionComponent } from "./actions/card-action.component";
import { AddPropertyComponent } from "./add-property/add-property.component";
import { AdminLoginSectionComponent } from "./admin-login-section/admin-login-section.component";
import { AdminNavigationBarComponent } from "./admin-navigation-bar/components/admin-navigation-bar.component";
import { AuthSectionComponent } from "./auth-section/auth-section/auth-section.component";
import { BaseMaintenanceChargeComponent } from "./base-maintenance-charge/base-maintenance-charge.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import { ChangePasswordComponent } from "./change-password/components/change-password.component";
import { ChangePasswordContainerComponent } from "./change-password/containers/change-password-container.component";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { HasAccessDirective } from "./directives/has-access/has-access.directive";
import { NullValueDirective } from "./directives/null-value/null-value.directive";
import { OnlyNumberDirective } from "./directives/only-number/only-number.directive";
import { PasswordDirective } from "./directives/password/password.directive";
import { ErrorMessageComponent } from "./error-messages/components/error-message.component";
import { ErrorPagesComponent, NotFoundComponent } from "./error-pages";
import { AccessForbiddenComponent } from "./error-pages/components/access-forbidden/access-forbidden.component";
import { InternalServerErrorComponent } from "./error-pages/components/internal-server-error";
import { InvalidLinkComponent } from "./error-pages/components/invalid-link/invalid-link.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { FormComponent } from "./form/form.component";
import { LanguageSelectComponent } from "./language-select";
import { ListComponent } from "./list/list.component";
import { LoginSectionComponent } from "./login-section/login-section.component";
import { MaterialTableComponent } from "./material-table/material-table.component";
import { MaterialModule } from "./modules";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { NagivationStaffsComponent } from "./nagivation-staffs/nagivation-staffs.component";
import { NavigationBarComponent } from "./navigation-bar/components/navigation-bar.component";
import { NavigationPropertyComponent } from "./navigation-property/navigation-property.component";
import { NotificationListComponent } from "./notification-list/notification-list.component";
import { PageTitleComponent } from "./page-title/page-title.component";
import { ImagePathPipe } from "./pipes/image-path/image-path.pipe";
import { TimeAgoPipe } from "./pipes/time-ago/time-ago.pipe";
import { ProfileBasicInfoComponent } from "./profile-basic-info/profile-basic-info.component";
import { OwnerDetailsComponent } from "./property-owner-details/components/owner-details/owner-details.component";
import { OwnerPropertyListComponent } from "./property-owner-details/components/owner-property-list/owner-property-list.component";
import { PropertyOwnerInfoComponent } from "./property-owner-details/components/property-owner-info/property-owner-info.component";
import { PropertyOwnerDetailsContainerComponent } from "./property-owner-details/containers/property-owner-details-container/property-owner-details-container.component";
import { PropertyOwnerInvitationComponent } from "./property-owner-invitation/property-owner-invitation.component";
import { SearchInputComponent } from "./search-input/search-input.component";
import { SidebarListComponent } from "./sidebar-list/sidebar-list.component";
import { AccountEffects } from "./store/effects/account.effects";
import { AdminSettingsEffects } from "./store/effects/admin-settings.effects";
import { HelpDeskEffects } from "./store/effects/helpdesk.effects";
import { InvitationsEffects } from "./store/effects/invitations.effects";
import { NoticesEffects } from "./store/effects/notices.effects";
import { NotificationsEffects } from "./store/effects/notifications.effects";
import { ProfileEffects } from "./store/effects/profile.effects";
import { PropertyOwnerEffects } from "./store/effects/property-owner.effects";
import { PropertyStructureEffects } from "./store/effects/property-structure.effects";
import { PropertyEffects } from "./store/effects/property.effects";
import { StaffsEffects } from "./store/effects/staffs.effects";
import { UnitEffects } from "./store/effects/unit.effects";
import { UsersEffects } from "./store/effects/users.effects";
import { sharedReducers } from "./store/reducers";
import { UpdateCredentialComponent } from "./update-credential/update-credential.component";
import { UserPropertyDetailComponent } from "./user-property-detail/user-property-detail.component";
import { WizardNavComponent } from "./wizard-nav/wizard-nav.component";
import { WizardSectionComponent } from "./wizard-section/wizard-section.component";
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const modules = [
  CommonModule,
  HttpClientModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MaterialModule,
  FlexLayoutModule,
  CrystalLightboxModule,
  InfiniteScrollModule,
];

const components = [
  ErrorPagesComponent,
  NotFoundComponent,
  InternalServerErrorComponent,
  LanguageSelectComponent,
  ConfirmDialogComponent,
  PageTitleComponent,
  HasAccessDirective,
  AccessForbiddenComponent,
  FormComponent,
  CardActionComponent,
  ErrorMessageComponent,
  SearchInputComponent,
  ListComponent,
  FileUploadComponent,
  ImagePathPipe,
  HasAccessDirective,
  NullValueDirective,
  OnlyNumberDirective,
  UtcToLocalPipe,
  AuthSectionComponent,
  WizardNavComponent,
  PropertyOwnerInvitationComponent,
  WizardSectionComponent,
  InvalidLinkComponent,
  LoginSectionComponent,
  NavigationBarComponent,
  AdminLoginSectionComponent,
  AdminNavigationBarComponent,
  PropertyOwnerDetailsContainerComponent,
  OwnerPropertyListComponent,
  OwnerDetailsComponent,
  UserPropertyDetailComponent,
  NavigationPropertyComponent,
  NagivationStaffsComponent,
  PropertyOwnerInfoComponent,
  BreadcrumbComponent,
  TimeAgoPipe,
  MaterialTableComponent,
  AddPropertyComponent,
  SidebarListComponent,
  PasswordDirective,
  MyProfileComponent,
  ChangePasswordContainerComponent,
  ChangePasswordComponent,
  ProfileBasicInfoComponent,
  AdminLoginSectionComponent,
  MaterialTableComponent,
  SidebarListComponent,
  NotificationListComponent,
  BaseMaintenanceChargeComponent,
  UpdateCredentialComponent,
];

const entryComponents = [ConfirmDialogComponent];

@NgModule({
  declarations: [...components, ForgotPasswordComponent, ResetPasswordComponent],
  entryComponents: [...entryComponents],
  imports: [
    ...modules,
    TranslateModule.forChild({}),
    StoreModule.forFeature("sharedModule", sharedReducers),
    EffectsModule.forFeature([
      UsersEffects,
      NotificationsEffects,
      InvitationsEffects,
      PropertyOwnerEffects,
      PropertyEffects,
      UnitEffects,
      StaffsEffects,
      ProfileEffects,
      PropertyStructureEffects,
      NoticesEffects,
      HelpDeskEffects,
      AccountEffects,
      AdminSettingsEffects,
    ]),
    QuillModule.forRoot({
      modules: {
        syntax: false,
        toolbar: environment.quillToolbars,
      },
    }),
  ],
  exports: [...components, ...modules, TranslateModule, QuillModule],
})
export class SharedModule {}
