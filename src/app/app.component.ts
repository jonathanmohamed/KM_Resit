import {Component, OnInit} from '@angular/core';
import {ProfileService} from './services/profile.service';
import {Router} from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'test-app';

	constructor(private router: Router, private profileService: ProfileService) {
	}

	public ngOnInit(): void {
		if (this.profileService.getAcc() === undefined) {
			this.router.navigate(['login']);
		}
	}
}
