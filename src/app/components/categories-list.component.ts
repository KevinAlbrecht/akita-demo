import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from '../models';
import { CategoriesQuery } from '../store/queries';
import { CategoryService } from '../services/category.service';

@Component({
	selector: 'app-categories-list',
	template: `
		<h3>Choose a category</h3>
		<p class="link" *ngFor="let category of (categories$ | async)" (click)="goToCategory(category.id)">
			{{category.title}} <span class="emoji" [ngClass]="category.emojiStyle">{{category.emoji}}</span>
		</p>
		<ng-container *ngIf="isLoading$ | async">
			<div class="loader"></div>
		</ng-container>
		`
})
export class CategoriesListComponent implements OnInit {
	constructor(private router: Router, private categoriesQuery: CategoriesQuery, private categoryService: CategoryService) { }

	categories$: Observable<Category[]>;
	isLoading$: Observable<boolean>;
	goToCategory(id: number) {
		this.router.navigate([`category/${id}`]);
	}

	ngOnInit() {
		this.categories$ = this.categoriesQuery.categories$;
		this.isLoading$ = this.categoriesQuery.selectLoading();

		this.categoryService.getCategories().subscribe(e => console.log("r", e), err => console.log("err", err));
	}
}
