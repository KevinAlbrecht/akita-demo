import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { akitaConfig } from '@datorama/akita';


import { AppComponent } from './app.component';
import { CategoriesListComponent } from './components/categories-list.component';
import { ErrorMessageComponent } from './components/error-message.component';
import { MoviesListComponent } from './components/movies-list.component';
import { CategoryDetailComponent } from './components/category-detail.component';

import { CategoryService, MovieService, ApiService } from './services';
import { CategoriesQuery, MoviesQuery, ApplicationRouterQuery } from './store/queries';
import { CategoriesStore, MoviesStore } from './store/states';


const routes: Routes = [
	{ path: '', component: CategoriesListComponent, pathMatch: 'full' },
	{ path: 'category/:categoryId', component: CategoryDetailComponent, pathMatch: 'full' },
	{ path: '**', redirectTo: '', pathMatch: 'full' },
];

const servicesToProvide = [ApiService, CategoryService, MovieService];
const queriesToProvide = [CategoriesQuery, MoviesQuery, ApplicationRouterQuery];
const storesToProvide = [CategoriesStore, MoviesStore];

@NgModule({
	declarations: [
		AppComponent,
		ErrorMessageComponent,
		CategoryDetailComponent,
		CategoriesListComponent,
		MoviesListComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		AkitaNgDevtools.forRoot(),
		AkitaNgRouterStoreModule.forRoot()
	],
	providers: [...servicesToProvide, ...queriesToProvide, ...storesToProvide],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor() {
		akitaConfig({
			resettable: true
		});
	}
}
