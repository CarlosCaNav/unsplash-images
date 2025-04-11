import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { UnsplashRestService } from '../services/rest/unsplash-rest.service';
import { IPhoto } from '../models/photo';


@Injectable({
  providedIn: 'root'
})

@Injectable()

export class PaginatorService {

  constructor() { }


  public unsplashRestService: UnsplashRestService = inject(UnsplashRestService);
  public photosPageCollection: WritableSignal<IPhoto[]> = signal([]);
  public actualPage: WritableSignal<number> = signal(1);

  getPhotos(actualPage: number = this.actualPage()): void {
      this.unsplashRestService.getPhotos(actualPage).subscribe((res: IPhoto[]) => {
          this.photosPageCollection.set(res);
      })
  }

  nextPage() {
      this.actualPage.set(this.actualPage() + 1);
      this.getPhotos(this.actualPage());
  }

  previousPage() {
      if (this.actualPage() > 1) {
          this.actualPage.set(this.actualPage() - 1);
          this.getPhotos(this.actualPage());
      }
  }
}
