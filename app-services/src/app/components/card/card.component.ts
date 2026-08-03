import { Component, Input, SimpleChanges } from '@angular/core';
import { NgFor } from '@angular/common'
import { PokemonServices } from '../../services/pokemon-services.service';
import { environment } from '../../environment/environment';
import { Other, PokemonModel } from '../../models/pokemon-data';
import { PokemonData } from '../interfaces/IPokemon';
import { isEmpty } from 'rxjs';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  ipokemon: Partial<PokemonData> = {}
  @Input() title: string = '';



  constructor(private service: PokemonServices) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['title'] && changes['title'].currentValue) {
      const pokemonName = changes['title'].currentValue.trim().toLowerCase();

      if (pokemonName === '') {
        this.limparDadosPokemon();
        return;
      }

      this.service.getPokemon(pokemonName).subscribe({
        next: (result) => {
          // Garantia extra: a API respondeu mas o objeto veio nulo/vazio?
          if (!result || !result.types || !result.sprites) {
            this.limparDadosPokemon();
            return;
          }

          this.ipokemon.id = result.id;
          this.ipokemon.type_pokemon = [];

          result.types.forEach((value: any) => {
            this.ipokemon.type_pokemon?.push(value.type.name);
          });

          // O operador (?.) evita erros caso a estrutura interna falte
          const outrasImagens = result.sprites?.other;
          const artworkOficial = outrasImagens ? outrasImagens['official-artwork'] : null;

          if (artworkOficial && artworkOficial.front_default) {
            this.ipokemon.image_pokemon = artworkOficial.front_default;
          } else {
            this.ipokemon.image_pokemon = 'assets/fallback-image.png'; // Imagem padrão caso não tenha foto
          }
        },
        error: (err) => {
          // CAPTURA DO ERRO: Se digitar errado (Erro 404), o Angular cai aqui.
          console.warn('Pokémon não encontrado na base de dados:', err.message);

          // Reseta o objeto para não exibir dados do Pokémon pesquisado anteriormente
          this.limparDadosPokemon();
        }
      });
    }
  }

  // Método essencial para limpar o estado e não quebrar o HTML
  limparDadosPokemon() {
    this.ipokemon = {
      id: 0,
      type_pokemon: [],
      image_pokemon: environment.pokemonNotFound // Pode colocar um caminho de imagem cinza/padrão aqui
    };
    this.title = "";
  }

}
