import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, ActivatedRoute } from '@angular/router';
import { BrokerCatalogService } from '../../core/application/broker-catalog.service';
import { ClientDataService } from '../../core/application/client-data.service';

@Component({
  selector: 'app-client-shell', standalone: true, imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './client-shell.component.html', styleUrl: './client-shell.component.scss'
})
export class ClientShellComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly brokerCatalog = inject(BrokerCatalogService);
  readonly clientData = inject(ClientDataService);
  broker = this.brokerCatalog.getBySlug(this.route.snapshot.paramMap.get('brokerSlug'));
  readonly brokerSlug = this.route.snapshot.paramMap.get('brokerSlug') ?? 'seguranca-total';
  menuOpen = false;

  constructor() {
    this.brokerCatalog.brokerUpdated$.subscribe(broker => {
      if (broker.slug === this.brokerSlug) this.broker = broker;
    });
  }
}