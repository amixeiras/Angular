import { Component } from '@angular/core';
import { PartialViewComponent } from '../partial-view/partial-view.component';

@Component({
  selector: 'app-content-link',
  standalone: true,
  imports: [PartialViewComponent],
  templateUrl: './content-link.component.html',
  styleUrl: './content-link.component.css'
})
export class ContentLinkComponent {
  // Define o objeto com chaves e valores do tipo string
  private params: Record<string, string>;
  parametro_url: string = '';

  // O parâmetro 'urlParams' precisa ser explicitamente tipado aqui
  constructor() {
    debugger;
    let urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    this.params = Object.fromEntries(urlParams.entries());

    if (this.hasParemeter('url')) {
      
      let value: string = '';

      value = this.getParameter('url') as string;

      if (value == 'linkedin')
        this.parametro_url = 'https://www.linkedin.com/in/eduardo-marques-dev-fullstack/';
      else if (value == 'github')
        this.parametro_url = 'https://github.com/amixeiras';

    }

  }

  // Método para verificar se a chave existe no objeto
  private hasParemeter(key: string): boolean {
    return key in this.params;
  }

  // Método para pegar o valor de uma chave
  private getParameter(key: string): string | undefined {
    return this.params[key];
  }
}
