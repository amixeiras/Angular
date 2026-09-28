export interface InsuredPerson {
  id: number;
  name: string;
  cpf: string;
  birthDate: string;
  email: string;
  phone: string;
  address: string;
  neighborhood: string;
  city: string;
  state: string;
  insurance: string;
  status: 'Ativo' | 'Pendente' | 'Em análise';
}

export interface InsuranceRequest {
  id: number;
  type: string;
  description: string;
  createdAt: string;
  status: 'Em análise' | 'Respondida' | 'Concluída';
}

export interface InsuredFile {
  id: number;
  insuredId: number;
  fileName: string;
  fileType: string;
  uploadedAt: string;
}
