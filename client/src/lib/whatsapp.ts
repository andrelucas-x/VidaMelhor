export interface WhatsAppFormData {
  responsavelNome: string;
  telefone: string;
  idadePaciente: string;
  tipoCuidado: string;
  comorbidades?: string;
  horarioPreferencial: string;
  urgencia: string;
  diasSemana: string[];
  observacoes?: string;
}

export function formatWhatsAppMessage(data: WhatsAppFormData): string {
  const message = `🏥 *Solicitação de Orçamento - Home Care Vida Melhor*

👤 *Responsável:* ${data.responsavelNome}
📱 *Telefone:* ${data.telefone}
👥 *Idade do Paciente:* ${data.idadePaciente}
🩺 *Tipo de Cuidado:* ${data.tipoCuidado}
${data.comorbidades ? `🏥 *Comorbidades:* ${data.comorbidades}` : ''}
⏰ *Horário Preferencial:* ${data.horarioPreferencial}
⚡ *Urgência:* ${data.urgencia}
📅 *Dias da Semana:* ${data.diasSemana.join(', ')}
${data.observacoes ? `📝 *Observações:* ${data.observacoes}` : ''}

Aguardo retorno para mais informações sobre o serviço de home care. Obrigado!`;

  return message;
}

export function redirectToWhatsApp(formData: WhatsAppFormData, phoneNumber: string = "5511999999999"): void {
  const message = formatWhatsAppMessage(formData);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}
