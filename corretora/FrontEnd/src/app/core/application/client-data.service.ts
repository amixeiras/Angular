import { Injectable } from '@angular/core';
import { InsuredFile, InsuredPerson, InsuranceRequest } from '../domain/insured-person';

@Injectable({ providedIn: 'root' })
export class ClientDataService {
  readonly client = { name: 'João Silva', role: 'Cliente' };

  readonly insuredPeople: InsuredPerson[] = [
    {
      id: 1, name: 'João Silva', cpf: '***.***.***-42', birthDate: '14/08/1986',
      email: 'joao.silva@email.com', phone: '(71) 99999-0000', address: 'Av. Oceânica, 120',
      neighborhood: 'Barra', city: 'Salvador', state: 'BA', insurance: 'Seguro Auto', status: 'Ativo'
    },
    {
      id: 2, name: 'Maria Silva', cpf: '***.***.***-08', birthDate: '22/03/1989',
      email: 'maria.silva@email.com', phone: '(71) 98888-0000', address: 'Av. Oceânica, 120',
      neighborhood: 'Barra', city: 'Salvador', state: 'BA', insurance: 'Seguro Vida', status: 'Ativo'
    },
    {
      id: 3, name: 'Lucas Silva', cpf: '***.***.***-77', birthDate: '11/12/2015',
      email: 'joao.silva@email.com', phone: '(71) 99999-0000', address: 'Av. Oceânica, 120',
      neighborhood: 'Barra', city: 'Salvador', state: 'BA', insurance: 'Seguro Vida', status: 'Pendente'
    }
  ];

  readonly requests: InsuranceRequest[] = [
    { id: 1, type: 'Seguro Auto', description: 'Solicitação de segunda via da apólice', createdAt: '18/09/2026', status: 'Em análise' },
    { id: 2, type: 'Seguro Vida', description: 'Atualização de beneficiários', createdAt: '11/09/2026', status: 'Respondida' },
    { id: 3, type: 'Seguro Residencial', description: 'Envio de documentos do imóvel', createdAt: '28/08/2026', status: 'Concluída' }
  ];

  getFilesByInsuredId(insuredId: number): InsuredFile[] {
    return [
      { id: 1, insuredId, fileName: 'documento-identidade.pdf', fileType: 'PDF', uploadedAt: '10/05/2026' },
      { id: 2, insuredId, fileName: 'comprovante-residencia.pdf', fileType: 'PDF', uploadedAt: '10/05/2026' },
      { id: 3, insuredId, fileName: 'proposta-seguro.pdf', fileType: 'PDF', uploadedAt: '11/05/2026' },
      { id: 4, insuredId, fileName: 'foto-documento.jpg', fileType: 'JPG', uploadedAt: '11/05/2026' },
      { id: 5, insuredId, fileName: 'declaracao-saude.pdf', fileType: 'PDF', uploadedAt: '12/05/2026' },
      { id: 6, insuredId, fileName: 'contrato-assinado.pdf', fileType: 'PDF', uploadedAt: '13/05/2026' }
    ];
  }
}
