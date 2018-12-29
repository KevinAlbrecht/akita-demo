import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RouterQuery, RouterStore, RouterState } from '@datorama/akita-ng-router-store';
import { ID } from '@datorama/akita';

@Injectable()
export class ApplicationRouterQuery extends RouterQuery {
	private readonly noParamGiven: Error = new Error('No parameter given');
	private readonly badParamGiven: Error = new Error('Bad parameter given');

	private readonly categoryIdParamName = 'categoryId';
	private readonly movieIdParamName = 'movieId';

	constructor(protected store: RouterStore) {
		super(store);
	}
	categoryIdParam$: Observable<ID> = this.select(s => this.getParameter(s, this.categoryIdParamName));
	movieIdParam$: Observable<ID> = this.select(s => this.getParameter(s, this.movieIdParamName));

	private getParameter(snapshotState: RouterState<RouterStateSnapshot>, parameterName: string): ID {
		if (!parameterName) {
			throw (this.noParamGiven);
		}

		const value = snapshotState.state.root.params[parameterName];
		if (!value) {
			throw (this.badParamGiven);
		}

		return value;
	}
}
