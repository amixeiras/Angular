import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AdminAuthService } from '../../../core/application/admin-auth.service';
import { BrokerCatalogService } from '../../../core/application/broker-catalog.service';

@Component({
  selector: 'app-cliente-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cliente-login.component.html',
  styleUrl: './cliente-login.component.scss'
})
export class ClienteLoginComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly auth = inject(AdminAuthService);
  private readonly router = inject(Router);
  private readonly catalog = inject(BrokerCatalogService);
  private readonly route = inject(ActivatedRoute);
  broker = this.catalog.getBySlug(this.route.snapshot.paramMap.get('route'));

  invalidCredentials = false;
  readonly form = this.formBuilder.nonNullable.group({ email: ['admin@corretora.com', [Validators.required, Validators.email]], password: ['admin123', Validators.required] });

  submit(): void {
    this.invalidCredentials = !this.auth.login(this.form.controls.email.value, this.form.controls.password.value);
    if (!this.invalidCredentials) this.router.navigateByUrl( '/' + this.broker.slug + '/cliente');
  }
}
