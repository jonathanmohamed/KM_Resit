import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SoundService {
	public static playAudio(): void {
		const audio = new Audio();
		audio.src = '../../assets/audio/alarm.wav';
		audio.load();
		audio.play();
	}
}
