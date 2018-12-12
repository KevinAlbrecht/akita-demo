import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriesListComponent } from './components/categories-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './components/error.component';
import { CategoryDetailComponent } from './components/category-detail.component';
import { ApiService } from './services/api.service';
import { CategoryService } from './services/category.service';
import { CategoriesQuery } from './store/queries';
import { MoviesListComponent } from './components/movies-list.component';
import { CategoriesStore } from './store/states/categories.store';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';

const routes: Routes = [
	{ path: '', component: CategoriesListComponent, pathMatch: 'full' },
	{ path: 'category/:categoryId', component: CategoryDetailComponent, pathMatch: 'full' },
	{ path: 'error', component: ErrorComponent, pathMatch: 'full' }
];

@NgModule({
	declarations: [
		AppComponent,
		ErrorComponent,
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
	providers: [ApiService, CategoryService, CategoriesQuery, CategoriesStore],
	bootstrap: [AppComponent]
})
export class AppModule { }
