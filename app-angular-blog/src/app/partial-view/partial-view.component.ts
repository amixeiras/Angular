import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-partial-view',
  standalone: true,
  imports: [],
  templateUrl: './partial-view.component.html',
  styleUrl: './partial-view.component.css'
})
export class PartialViewComponent {
  src_link: string = '#';
  src_title: string = '';
  private params: Record<string, string> = {};

  constructor() {


    let urlParams: URLSearchParams = new URLSearchParams(window.location.search);
    this.params = Object.fromEntries(urlParams.entries()) as Record<string, string>;

    if (this.hasParemeter('url')) {

      let value: string = '';

      value = this.getParameter('url') as string;
      this.src_title = value;

      if (value == 'linkedin')
        this.src_link = 'https://www.linkedin.com/in/eduardo-marques-dev-fullstack/';
      else if (value == 'github')
        this.src_link = 'https://github.com/amixeiras';

    }
  }

  ngAfterViewInit() {
debugger;
    let src_iframe = document.getElementById('frcPartialView') as HTMLIFrameElement;
    let divIframe = document.getElementById('dvIframe') as HTMLElement;
    let src_notFound = document.getElementById('inotfound') as HTMLElement;

    src_iframe.src = this.src_link;

    if (this.src_link == "") {
      src_iframe.style.display = 'none';
      src_notFound.style.display = 'block';
    } else {
      src_iframe.style.display = 'block';
      src_notFound.style.display = 'none';
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


