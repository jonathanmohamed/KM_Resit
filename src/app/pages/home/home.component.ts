import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {SoundService} from '../../services/sound.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent {

	constructor(public profileService: ProfileService) {
	}

	public sound():void{SoundService.playAudio();}
}
