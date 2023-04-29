import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterModule, RouterStateSnapshot, Routes, UrlTree } from '@angular/router';
import { ListesVoituresComponent } from './components/listes-voitures/listes-voitures.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { AjouterVoitureComponent } from './components/ajouter-voiture/ajouter-voiture.component';
import { UpdateVoitureComponent } from './components/update-voiture/update-voiture.component';
import { Observable } from 'rxjs';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { AjouterMarqueComponent } from './components/ajouter-marque/ajouter-marque.component';
// export class AuthGuard implements CanActivate{
//   constructor (private router:Router,private authService:AuthService){

//   }
//   canActivate(): boolean {
//     console.log(this.authService.getAcess());
    
//     if (this.authService.getAcess()) {return true}  else{
//       this.router.navigate(['login'])
//       return false
//     } 
//   }
// }
const routes: Routes = [
  {path:"",component:AuthComponent},
  {path:"login",component:AuthComponent},
  {path:"voiture",component:ListesVoituresComponent},
  {path:"voiture/:brand",component:ListesVoituresComponent,canActivate:[AuthGuard]},
  {path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"detail/:id",component:DetailComponent,canActivate:[AuthGuard]},
  {path:"ajouter-voiture",component:AjouterVoitureComponent,canActivate:[AuthGuard]},
  {path:"update-voiture/:id",component:UpdateVoitureComponent,canActivate:[AuthGuard]},
  {path:"ajouter-marque",component:AjouterMarqueComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
