import { Injectable } from '@angular/core';
import { Query, ID } from '@datorama/akita';
import { RouterQuery, RouterStore, RouterState } from '@datorama/akita-ng-router-store';
import { Observable, of } from 'rxjs';
import { RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ApplicationRouterQuery extends RouterQuery {
	private readonly noParamGiven: Error = new Error('No parameter given');
	private readonly badParamGiven: Error = new Error('Bad parameter given');

	constructor(protected store: RouterStore) {
		super(store);
	}
	categoryIdParam$: Observable<ID> = this.select(s => this.getParameter(s, 'categoryId2'));

	private getParameter(snapshot: RouterState<RouterStateSnapshot>, parameterName: string) {
		if (!parameterName) {
			throw this.noParamGiven;
		}

		const value = snapshot.state.root.params['categoryId2'];
		if (!value) {
			throw this.badParamGiven;
		}

		return value;
	}
}
