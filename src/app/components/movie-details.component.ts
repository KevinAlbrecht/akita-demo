import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from '../store/models/movie.model';

@Component({
	selector: 'app-movie-detail',
	template: `
	<div class="movie-details">
		<div class="icon"><img [src]="'./assets/images/'+movie.picto"/></div>
		<div class="details">
			<p>Title {{movie.title}}</p>
			<p>Recorded year :{{movie.RecordedYear}}</p>
			<p><span class="desc">Special mention:</span> {{movie.specialMention.firstName +' - ' + movie.specialMention.lastName}}</p>
			<p>Language: {{movie.language}}</p>
		</div>
	</div>`,
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class MovieDetailsComponent {
	@Input() movie: Movie;

	@Output() selectMovie: EventEmitter<number> = new EventEmitter();

}
