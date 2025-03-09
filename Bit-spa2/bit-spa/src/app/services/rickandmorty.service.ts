import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private apiUrl = 'https://rickandmortyapi.com/api/character'; // URL CORRECTA

  constructor(private http: HttpClient) {}

  getCharacterList(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
