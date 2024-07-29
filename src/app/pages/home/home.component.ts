import { Component, Inject } from '@angular/core';
import { ServicesService } from '../../Http/services.service';
import { Imovies } from '../../Interfaces/Imovies';
import { MovieComponent } from '../movie/movie.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieComponent, MatToolbarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
