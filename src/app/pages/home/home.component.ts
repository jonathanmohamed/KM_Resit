import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	constructor(public profileService: ProfileService) {
	}
}
