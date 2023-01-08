import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SocketService } from '../services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate{

  constructor(public socketService: SocketService, private router: Router) { }
  canActivate() {
    if (this.socketService.getUser()) {
      return true;
    }
    this.router.navigateByUrl('/');
    return false;
  }
}
