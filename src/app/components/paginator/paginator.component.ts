import { Component, inject } from '@angular/core';
import { PaginatorService } from '../../services/paginator.service';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css'
})
export class PaginatorComponent {


    paginatorService: PaginatorService = inject(PaginatorService);

  nextPage(advance : number) {
    this.paginatorService.nextPage(advance);
}

previousPage(backOff : number) {
    this.paginatorService.previousPage(backOff);
}
}
