import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CategoriesQuery } from '../store/queries';
import { CategoryService } from '../services/category.service';
import { Category } from '../store/models/category.model';
import { take, takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-categories-list',
	template: `
		<h3>Choose a category</h3>
		<ng-container *ngIf="isLoading$ | async; else content">
		<div class="loader" ></div>
		</ng-container>
		<ng-template #content>
			<app-error-message *ngIf="error$ |async as error" [error]="error"></app-error-message>
			<p class="link" *ngFor="let category of (categories$ | async)" (click)="goToCategory(category.id)">
				{{category.title}} <span class="emoji" [ngClass]="category.emojiStyle">{{category.emoji}}</span>
			</p>
		</ng-template>
		`
})
export class CategoriesListComponent implements OnInit {
	constructor(private router: Router,
		private categoriesQuery: CategoriesQuery,
		private categoryService: CategoryService) { }

	categories$: Observable<Category[]>;
	isLoading$: Observable<boolean>;
	error$: Observable<Error>;

	goToCategory(id: number) {
		this.router.navigate([`category/${id}`]);
	}

	ngOnInit() {
		this.categories$ = this.categoriesQuery.categories$;
		this.isLoading$ = this.categoriesQuery.selectLoading();
		this.error$ = this.categoriesQuery.selectError();

		this.categoryService.setCategories().subscribe();
	}
}
