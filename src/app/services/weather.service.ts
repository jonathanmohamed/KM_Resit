import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {

	constructor(private http: HttpClient) {
	}

	public getForecasts(): Observable<Response> {
		return this.http.get(environment.API_URL + 'weather/forecasts') as Observable<Response>;
	}

	public getWarnings(): Observable<Response> {
		return this.http.get(environment.API_URL + 'weather/warnings') as Observable<Response>;
	}

	public getLocations(): Observable<Response> {
		return this.http.get(environment.API_URL + 'weather/locations') as Observable<Response>;
	}

	public updateLocation(): Observable<Response> {
		return this.http.put(environment.API_URL + 'weather/update-location', {}) as Observable<Response>;
	}
}
