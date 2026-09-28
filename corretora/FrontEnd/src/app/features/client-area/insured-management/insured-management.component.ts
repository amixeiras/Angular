import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientDataService } from '../../../core/application/client-data.service';
import { InsuredFilesComponent } from '../insured-files/insured-files.component';
import { InsuredFilesReadonlyComponent } from '../insured-files-readonly/insured-files-readonly.component';

interface InsuredRecord {
  id: number;
  name: string;
  sex: string;
  document: string;
  birthDate: string;
  capital: string;
  role: string;
  registration: string;
  movement: string;
  email: string;
  products: string;
  lastRequest: string;
  status: 'Ativo' | 'Pendente';
}

@Component({ selector: 'app-insured-management', standalone: true, imports: [CommonModule, ReactiveFormsModule, InsuredFilesComponent, InsuredFilesReadonlyComponent], templateUrl: './insured-management.component.html', styleUrl: './insured-management.component.scss' })
export class InsuredManagementComponent {
  readonly data = inject(ClientDataService);
  private readonly formBuilder = inject(FormBuilder);
  currentStep = 1;
  saved = false;
  formVisible = false;
  readOnly = false;
  editingIndex: number | null = null;
  records: InsuredRecord[] = this.createMockRecords();
  readonly pageSizeOptions = [25, 50, 100, 150];
  pageSize = 25;
  currentPage = 1;
  filesPopupVisible = false;
  selectedInsured: InsuredRecord | null = null;
  readonly insuredForm = this.formBuilder.nonNullable.group({
    id: [0, Validators.required], name: ['', Validators.required], sex: ['', Validators.required], document: ['', Validators.required],
    birthDate: ['', Validators.required], capital: ['', Validators.required], role: ['', Validators.required],
    registration: ['', Validators.required], movement: ['IN', Validators.required]
  });

  private createMockRecords(): InsuredRecord[] {
    const names = [
      'João Silva', 'Maria Souza', 'Carlos Pereira', 'Ana Oliveira', 'Pedro Santos',
      'Fernanda Costa', 'Lucas Almeida', 'Juliana Martins', 'Rafael Rodrigues', 'Camila Ferreira'
    ];
    const products = ['Auto, Residencial', 'Vida', 'Saúde, Viagem', 'Auto', 'Residencial, Vida'];
    const roles = ['Analista', 'Gerente', 'Professor', 'Empresário', 'Assistente'];

    return Array.from({ length: 50 }, (_, index) => {
      const name = index === 0 ? this.data.client.name : names[index % names.length];
      const firstName = name.toLowerCase().split(' ')[0];
      const status = index % 4 === 1 ? 'Pendente' : 'Ativo';
      return {
        id: index + 1, name,
        sex: index % 2 === 0 ? 'Masculino' : 'Feminino',
        document: `${98765432100 + index}`.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'),
        birthDate: `${String((index % 27) + 1).padStart(2, '0')}/${String((index % 12) + 1).padStart(2, '0')}/19${80 + (index % 20)}`,
        capital: `R$ ${(50000 + index * 2500).toLocaleString('pt-BR')}`,
        role: roles[index % roles.length], registration: `MAT-${String(2300 + index)}`,
        movement: 'IN - Inclusão', email: `${firstName}.${index + 1}@email.com`,
        products: products[index % products.length], lastRequest: `${String((index % 27) + 1).padStart(2, '0')}/05/2026`, status
      };
    });
  }

  get paginatedRecords(): InsuredRecord[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.records.slice(start, start + this.pageSize);
  }

  get pageCount(): number { return Math.max(1, Math.ceil(this.records.length / this.pageSize)); }

  setPage(page: number): void {
    this.currentPage = Math.min(Math.max(page, 1), this.pageCount);
  }

  setPageSize(size: number): void {
    this.pageSize = size;
    this.currentPage = 1;
  }

  saveAndContinue(): void {
    this.saved = true;
    if (this.insuredForm.invalid) { this.insuredForm.markAllAsTouched(); return; }
    const formValue = this.insuredForm.getRawValue();
    const record: InsuredRecord = {
      ...formValue, id: formValue.id || Math.max(0, ...this.records.map(item => item.id)) + 1,
      email: formValue.name ? `${formValue.name.toLowerCase().replace(/\s+/g, '.')}@email.com` : 'Não informado',
      products: formValue.movement === 'EX' ? 'Nenhum' : 'Não informado', lastRequest: 'Não informado', status: 'Ativo'
    };
    if (this.editingIndex === null) {
      this.records = [...this.records, record];
    } else {
      this.records = this.records.map((item, index) => index === this.editingIndex ? record : item);
      this.editingIndex = null;
    }
    this.currentStep = Math.min(this.currentStep + 1, 3);
  }

  editRecord(index: number): void {
    this.insuredForm.patchValue(this.records[index]);
    this.editingIndex = index;
    this.selectedInsured = this.records[index];
    this.formVisible = true;
    this.readOnly = false;
    this.currentStep = 1;
    this.saved = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  viewRecord(index: number): void {
    this.insuredForm.patchValue(this.records[index]);
    this.editingIndex = index;
    this.selectedInsured = this.records[index];
    this.formVisible = true;
    this.readOnly = true;
    this.currentStep = 1;
    this.saved = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  addRecord(): void {
    this.insuredForm.reset({ id: Math.max(0, ...this.records.map(item => item.id)) + 1, name: '', sex: '', document: '', birthDate: '', capital: '', role: '', registration: '', movement: 'IN' });
    this.editingIndex = null;
    this.formVisible = true;
    this.readOnly = false;
    this.currentStep = 1;
    this.saved = false;
  }

  deleteRecord(index: number): void {
    const record = this.records[index];
    const confirmed = window.confirm(`Deseja realmente excluir o segurado ${record.name} (ID ${record.id})?`);
    if (!confirmed) return;

    this.records = this.records.filter((_, itemIndex) => itemIndex !== index);
    if (this.editingIndex === index) this.editingIndex = null;
    if (this.selectedInsured?.id === record.id) {
      this.selectedInsured = null;
      this.filesPopupVisible = false;
    }
  }

  openFiles(record: InsuredRecord): void {
    this.selectedInsured = record;
    this.filesPopupVisible = true;
  }

  closeFiles(): void { this.filesPopupVisible = false; }
}


