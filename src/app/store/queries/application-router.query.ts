import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterQuery, RouterStore, RouterState } from '@datorama/akita-ng-router-store';
import { ID } from '@datorama/akita';

@Injectable()
export class ApplicationRouterQuery extends RouterQuery {
	private readonly noParamGiven: Error = new Error('No parameter given');
	private readonly badParamGiven: Error = new Error('Bad parameter given');

	constructor(protected store: RouterStore) {
		super(store);
	}
	categoryIdParam$: Observable<ID> = this.select(s => this.getParameter(s, 'categoryId'));

	private getParameter(snapshot: RouterState<RouterStateSnapshot>, parameterName: string): ID {
		if (!parameterName) {
			Observable.throw(this.noParamGiven);
		}

		const value = snapshot.state.root.params[parameterName];
		if (!value) {
			Observable.throw(this.badParamGiven);
		}

		return value;
	}
}
