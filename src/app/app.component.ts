import { Component, inject, OnInit } from '@angular/core';
import { UnsplashRestService } from './services/rest/unsplash-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { PhotoGridComponent } from './components/photo-grid/photo-grid.component';
import { PaginatorService } from './services/paginator.service';
import { HeaderComponent } from "./components/header/header.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    PhotoGridComponent,
    HeaderComponent,
    PaginatorComponent
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

}