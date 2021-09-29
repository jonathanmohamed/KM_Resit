import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class WeatherService {

	constructor(private http: HttpClient) {
		this.updateLocation().subscribe((data) => console.log(data), (err) => console.log(err));
	}

	public getForecasts(): Observable<Response> {
		return this.http.get(environment.API_URL + 'weather/forecasts') as Observable<Response>;
	}

	public getWarnings(type: string): Observable<Response> {
		return this.http.get(`${environment.API_URL}weather/warnings?type=${type}`) as Observable<Response>;
	}

	public getLocations(): Observable<Response> {
		return this.http.get(environment.API_URL + 'weather/locations') as Observable<Response>;
	}

	public getLongTermData(type: string): Observable<Response> {
		return this.http.get(environment.API_URL + `weather/long-term?type=${type}`) as Observable<Response>;
	}

	public updateLocation(): Observable<any> {
		const headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${localStorage.getItem('token')}`
		});

		const data = { "id": { "$numberLong": "2352778" }, "city": { "id": { "$numberLong": "2352778" }, "name": "Abuja", "findname": "ABUJA", "country": "NG", "coord": {"lon": 7.48976, "lat": 9.05735}, "zoom": {"$numberLong": "7"}}}

		return this.http.put(environment.API_URL + 'weather/update-location', {headers, data});
	}
}
