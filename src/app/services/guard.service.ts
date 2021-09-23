import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {ProfileService} from './profile.service';

@Injectable({
	providedIn: 'root'
})
export class GuardService implements CanActivate {

	constructor(private profileService: ProfileService) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.profileService.getAcc() != undefined;
	}
}
