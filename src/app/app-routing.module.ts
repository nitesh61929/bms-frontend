import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard, NegateOnboardGuard, OnboardGuard, PasswordGuard } from "@core/guards";
import Utils from "@core/utilities/utils";
import { InternalServerErrorComponent } from "@shared/error-pages";
import { AccessForbiddenComponent } from "@shared/error-pages/components/access-forbidden";
import { NotFoundComponent } from "@shared/error-pages/components/not-found";
import { AdminAuthGuard } from "./core/guards/admin-auth/admin-auth.guard";
import { NegateAdminAuthGuard } from "./core/guards/negate-admin-auth/negate-admin-auth.guard";
import { NegateAuthGuard } from "./core/guards/negate-auth/negate-auth.guard";
import { InvalidLinkComponent } from "./shared/error-pages/components/invalid-link/invalid-link.component";

const routes: Routes = [
  { path: "", redirectTo: getDefaultRedirectTo(), pathMatch: "full" },
  {
    path: "app",
    loadChildren: () => import("./features/feature-app/feature-app.module").then((m) => m.FeatureAppModule),
    canActivate: [AuthGuard, OnboardGuard, PasswordGuard],
  },
  {
    path: "admin",
    loadChildren: () => import("./features/feature-admin/feature-admin.module").then((m) => m.FeatureAdminModule),
    canActivate: [AdminAuthGuard],
  },
  {
    path: "auth",
    loadChildren: () => import("./features/auth/auth.module").then((m) => m.AuthModule),
    canActivate: [NegateAuthGuard],
  },
  {
    path: "admin-auth",
    loadChildren: () => import("./features/admin-auth/admin-auth.module").then((m) => m.AdminAuthModule),
    canActivate: [NegateAdminAuthGuard],
  },
  {
    path: "on-board",
    loadChildren: () => import("./features/on-board/on-board.module").then((m) => m.OnBoardModule),
    canActivate: [NegateOnboardGuard],
  },
  {
    path: "public",
    loadChildren: () => import("./features/public-pages/public-pages.module").then((m) => m.PublicPagesModule),
  },
  {
    path: "designs",
    loadChildren: () => import("./designs/designs.module").then((m) => m.DesignsModule),
  },
  { path: "access-denied", component: AccessForbiddenComponent },
  { path: "invalid-link", component: InvalidLinkComponent },
  { path: "server-error", component: InternalServerErrorComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export function getDefaultRedirectTo() {
  if (Utils.urlIsApp()) {
    return "auth";
  } else if (Utils.urlIsAdmin()) {
    return "admin-auth";
  }
}
