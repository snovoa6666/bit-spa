import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rickandmorty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rickandmorty.component.html',
  styleUrls: ['./rickandmorty.component.css']
})
export class RickAndMortyComponent implements OnInit {
  characters: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://rickandmortyapi.com/api/character')
      .subscribe({
        next: (data: any) => {
          this.characters = data.results.map((character: any) => ({
            name: character.name,
            image: character.image,
            description: `${character.name} es un ${character.species} que actualmente está ${character.status.toLowerCase()}. 
                          Proviene de ${character.origin.name} y se encuentra en ${character.location.name}.`
          }));
        },
      });
  }
}
