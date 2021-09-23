import {Injectable, OnInit} from '@angular/core';
import {Profile} from '../classes/profile';

@Injectable({
	providedIn: 'root',
})
export class ProfileService {
	private profile: Profile | undefined;

	public setAcc(user: Profile) {
		this.profile = user;
	}

	public getAcc(): Profile {
		return <Profile>this.profile;
	}

	public isAdmin(): boolean {
		return <boolean>this.profile?._isAdmin;
	}
}
