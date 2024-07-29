import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Imovies } from '../../Interfaces/Imovies';
import { ServicesService } from '../../Http/services.service';
import { NgFor } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule} from 'ngx-filter-pipe';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [MatButtonModule,MatCardModule, NgFor,NgxPaginationModule,FilterPipeModule,FormsModule,MatInputModule,MatFormFieldModule,MatIconModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {

  movieFilter:any = { original_title: '', release_date: '' };
  p: number = 1;
  ListMovies!:Imovies[];
  currentPage:number  = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;
tableSize: number[] = [5, 10, 15, 20];
  customers = new Array<Imovies>();

constructor(private http:ServicesService){
   this.ConsultMovies();
  }

  ConsultMovies(){
    this.http.ConsultMovies().subscribe(resp=>{
      this.ListMovies = resp.results;
    });
  }
  resetPage() {
    this.p = 1;
  }
}
