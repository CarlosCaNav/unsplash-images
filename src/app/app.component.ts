import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UnsplashRestService } from './services/rest/unsplash-rest.service';
import { IPhoto } from './models/photo';
import { HttpClientModule } from '@angular/common/http';
import { PhotoGridComponent } from './components/photo-grid/photo-grid.component';
import { PaginatorService } from './services/paginator.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, HttpClientModule,
    PhotoGridComponent
],
  providers: [
      UnsplashRestService,
      PaginatorService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  title = 'Unsplash Images';

    paginatorService: PaginatorService = inject(PaginatorService);

    ngOnInit() {
        this.paginatorService.getPhotos();
    }

    nextPage() {
        this.paginatorService.nextPage();
    }

    previousPage() {
        this.paginatorService.previousPage();
    }
}