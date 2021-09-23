import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {
	public form: FormGroup;

	constructor(private formBuilder: FormBuilder, private authService: AuthService) {

		this.form = this.formBuilder.group({
			email: [null, Validators.required],
			password: [null, Validators.required]
		});
	}

	public login(): void {
		console.log(this.form.get('email')?.value);
		console.log(this.form.get('password')?.value);
		this.authService.auth(this.form);
	}
}
