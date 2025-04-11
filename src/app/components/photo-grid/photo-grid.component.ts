import { Component, Input } from '@angular/core';
import { IPhoto } from '../../models/photo';

@Component({
  selector: 'app-photo-grid',
  standalone: true,
  imports: [],
  templateUrl: './photo-grid.component.html',
  styleUrl: './photo-grid.component.css'
})
export class PhotoGridComponent {

  @Input() photos: IPhoto[] = [];
}
