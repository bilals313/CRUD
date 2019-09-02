import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor(private router:Router){}
  canActivate(){
    if(!!sessionStorage.getItem('user')){
      return true;
    }else
    {
      alert("Please Login and then try...");
      this.router.navigate(['/']);
      return false;
    }

  }
}
