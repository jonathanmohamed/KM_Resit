import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {SoundService} from '../../services/sound.service';
import {WeatherService} from '../../services/weather.service';
import {Weather} from '../../classes/weather';
import {City} from "../../classes/city";
import {Location} from "../../classes/location";

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public weather: Weather[] | null;
	public cities: Location[] | null;
	public temperatures: number[] | null;
	public precipitations: number[] | null;
	public precipitationWarning: string | undefined;
	public tempWarning: string | undefined;
	public frostWarning: string | undefined;


	constructor(public profileService: ProfileService, private weatherService: WeatherService) {
		this.weather = null;
		this.cities = null;
		this.temperatures = null;
		this.precipitations = null;
		// console.log(localStorage.getItem('token'));
	}

	public ngOnInit() {
		this.getForecast();
		this.getCities();
		this.getWarnings();
		this.getLongTermHistory();
	}

	public sound(): void {
		SoundService.playAudio();
	}

	private getForecast(): void {
		this.weatherService.getForecasts().subscribe((resp: Response) => {
			// @ts-ignore
			this.weather = resp['data'] as Weather;
		});
	}

	private getCities(): void {
		this.weatherService.getLocations().subscribe((resp: Response) => {
			// @ts-ignore
			this.cities = resp['data'] as Location;
		});
	}

	private getLongTermHistory(): void {
		this.weatherService.getLongTermData("temperature").subscribe((resp: Response) => {
			// @ts-ignore
			this.temperatures = resp['data'];
		});
		this.weatherService.getLongTermData("precipitation").subscribe((resp: Response) => {
			// @ts-ignore
			this.precipitations = resp['data'];
		});
	}

	private getWarnings(): void {
		this.weatherService.getWarnings("rain").subscribe((resp: Response) => {
			// @ts-ignore
			this.precipitationWarning = resp['data'];
		});
		this.weatherService.getWarnings("temp").subscribe((resp: Response) => {
			// @ts-ignore
			this.tempWarning = resp['data'];
		});
		this.weatherService.getWarnings("frost").subscribe((resp: Response) => {
			// @ts-ignore
			this.frostWarning = resp['data'];
		});
	}

	public getTemperatures(): number[] | null {
		return this.temperatures;
	}

	public getPrecipitations(): number[] | null {
		return this.precipitations;
	}

	public getMinTemps(): number[] {
		let arr: number[] = [];
		this.weather?.forEach((data) => {
			arr.push(data.temp.min);
		});

		return arr;
	}

	public getMaxTemps(): number[] {
		let arr: number[] = [];
		this.weather?.forEach((data) => {
			arr.push(data.temp.max);
		});

		return arr;
	}

	public getWindSpeed(): number[] {
		let arr: number[] = [];
		this.weather?.forEach((data) => {
			arr.push(data.wind_speed);
		});

		return arr;
	}

	public getWindDirection(): number[] {
		let arr: number[] = [];
		this.weather?.forEach((data) => {
			arr.push(data.wind_deg);
		});

		return arr;
	}

	public getCityList(): City[] {
		let arr: City[] = [];
		this.cities?.forEach((data) => {
			arr.push(data.city);
		});
		return arr;
	}
}
