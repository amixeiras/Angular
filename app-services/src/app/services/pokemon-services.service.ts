import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { PokemonModel } from '../models/pokemon-data'

@Injectable({
  providedIn: 'root'
})

export class PokemonServices {
  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl = environment.pokeApi;

  private pokemonModel : PokemonModel | any

  getPokemon(pokemon: string) : Observable<PokemonModel> {
    let url: string = `${this.apiUrl}${pokemon}`;
    console.log(url);
    return this.httpClient.get<PokemonModel>(url);
  }

}
