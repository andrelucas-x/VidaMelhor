export interface WhatsAppFormData {
  responsavelNome: string;
  telefone: string;
  idadePaciente: string;
  tipoCuidado: string;
  comorbidades?: string;
  horarioPreferencial?: string;
  urgencia?: string;
  diasSemana?: string[];
  observacoes?: string;
}

export function formatWhatsAppMessage(data: WhatsAppFormData): string {
  const message = `🏥 *Solicitação de Orçamento - Vida Melhor Home Care*

👤 *Responsável:* ${data.responsavelNome}
📱 *Telefone:* ${data.telefone}
👥 *Idade do Paciente:* ${data.idadePaciente}
🩺 *Tipo de Cuidado:* ${data.tipoCuidado}

Gostaria de receber mais informações sobre os serviços de home care. Aguardo contato!`;

  return message;
}

export function redirectToWhatsApp(formData: WhatsAppFormData, phoneNumber: string = "554199625464"): void {
  const message = formatWhatsAppMessage(formData);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}
