import {Temperature} from './temperature';
import {FeelsLike} from './feels-like';
import {WeatherIdentification} from './weather-identification';

export interface Weather {
	dt: number;
	sunrise: number;
	sunset: number;
	moonrise: number;
	moonset: number;
	moonPhase: number;
	temp: Temperature;
	feelsLike: FeelsLike;
	pressure: number;
	humidity: number;
	dewPoint: number;
	wind_speed: number;
	wind_deg: number;
	windGust: number;
	weather: WeatherIdentification[];
	clouds: number;
	pop: number;
	rain: number;
	uvi: number;
}
