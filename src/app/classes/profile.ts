export class Profile {
	readonly _email: string;
	readonly _isAdmin: boolean;

	constructor(email: string, isAdmin: boolean) {
		this._email = email;
		this._isAdmin = isAdmin;
	}
}
