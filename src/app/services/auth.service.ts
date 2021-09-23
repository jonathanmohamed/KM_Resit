import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {ProfileService} from './profile.service';
import {Profile} from '../classes/profile';
import {Router} from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	constructor(private http: HttpClient, private profileService: ProfileService, private router: Router) {
	}

	public auth(form: FormGroup): void {
		// this.http.post('API URL HERE', {
		// 	email: form.get('email')?.value,
		// 	password: form.get('password')?.value
		// }).subscribe(data => {
		// 	this.profileService.setAcc(data['data']);
		// 	this.router.navigate(['home']);
		// });
		const isAdmin = form.get('password')?.value === 'admin';
		this.profileService.setAcc(new Profile(form.get('email')?.value, isAdmin));
		this.router.navigate(['home']);
	}
}
