import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common'
import { PokemonServices } from '../../services/pokemon-services.service';
import { environment } from '../../environment/environment';
import { Other, PokemonModel } from '../../models/pokemon-data';
import { PokemonData } from '../interfaces/IPokemon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ NgFor ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  ipokemon: Partial<PokemonData> = {}
  @Input() title: string = '';

  

  constructor(private service:PokemonServices){
      
  }

  ngOnChanges(){
    let dados = this.service.getPokemon(this.title.toLowerCase()).subscribe({
        next: (result) => {

          this.ipokemon.id = result.id;

          this.ipokemon.type_pokemon = [];

          result.types.forEach((value, index) => {
            debugger;
            this.ipokemon.type_pokemon?.push(value.type.name);
          });

          const outrasImagens: Other = result.sprites.other;

          // 2. Acessando a propriedade com colchetes
          const artworkOficial = outrasImagens['official-artwork'];

          this.ipokemon.image_pokemon = artworkOficial.front_default;
        }
      });
  }
  
}
