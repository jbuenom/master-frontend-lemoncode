import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { CrudComponent } from './pages/crud/crud.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'home' , component: HomeComponent},
  {path:'login' , component: LoginComponent},
  {path:'about' , component: AboutComponent},
  {path:'dashboard' , component: DashboardComponent, canActivate: [authGuard]},
  {path:'galeria' , component: GaleriaComponent, canActivate: [authGuard]},
  {path:'crud' , component: CrudComponent, canActivate: [authGuard]},
  {path:'profile' , component: ProfileComponent, canActivate: [authGuard]},
  {path:'**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
