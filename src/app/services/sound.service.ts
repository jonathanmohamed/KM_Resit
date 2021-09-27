import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SoundService {
	public static playAudio(): void {
		const audio = new Audio();
		audio.src = '../../assets/audio/beep_sound.wav';
		audio.load();
		audio.play();
	}
}
