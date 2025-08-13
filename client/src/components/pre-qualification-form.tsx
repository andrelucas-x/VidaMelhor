import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertPreQualificationSchema } from "@shared/schema";
import { redirectToWhatsApp } from "@/lib/whatsapp";
import { useToast } from "@/hooks/use-toast";
import type { InsertPreQualification } from "@shared/schema";

const diasSemana = [
  { id: "segunda", label: "Segunda" },
  { id: "terca", label: "Terça" },
  { id: "quarta", label: "Quarta" },
  { id: "quinta", label: "Quinta" },
  { id: "sexta", label: "Sexta" },
  { id: "sabado", label: "Sábado" },
  { id: "domingo", label: "Domingo" }
];

export default function PreQualificationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<InsertPreQualification>({
    resolver: zodResolver(insertPreQualificationSchema),
    defaultValues: {
      responsavelNome: "",
      telefone: "",
      idadePaciente: "",
      tipoCuidado: "",
      comorbidades: "",
      horarioPreferencial: "",
      urgencia: "",
      diasSemana: [],
      observacoes: ""
    }
  });

  const onSubmit = async (data: InsertPreQualification) => {
    setIsSubmitting(true);
    
    try {
      // Redirect to WhatsApp with formatted message
      redirectToWhatsApp(data);
      
      toast({
        title: "Sucesso!",
        description: "Redirecionando para o WhatsApp com suas informações...",
      });
      
      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao processar sua solicitação. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4" data-testid="title-formulario">
            Solicite seu Orçamento Personalizado
          </h3>
          <p className="text-xl text-neutral-500" data-testid="subtitle-formulario">
            Preencha o formulário abaixo e entraremos em contato via WhatsApp com uma proposta personalizada.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="form-prequalificacao">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="responsavelNome"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-nome">Nome do Responsável *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Seu nome completo" 
                          {...field} 
                          data-testid="input-nome"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="telefone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-telefone">Telefone/WhatsApp *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="(11) 99999-9999" 
                          {...field}
                          data-testid="input-telefone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="idadePaciente"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-idade">Idade do Paciente *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-idade">
                            <SelectValue placeholder="Selecione a faixa etária" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="0-17">0 a 17 anos</SelectItem>
                          <SelectItem value="18-59">18 a 59 anos</SelectItem>
                          <SelectItem value="60-79">60 a 79 anos</SelectItem>
                          <SelectItem value="80+">80 anos ou mais</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tipoCuidado"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-tipo-cuidado">Tipo de Cuidado Necessário *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-tipo-cuidado">
                            <SelectValue placeholder="Selecione o tipo de cuidado" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="idoso-autonomo">Idoso com autonomia</SelectItem>
                          <SelectItem value="idoso-dependente">Idoso dependente</SelectItem>
                          <SelectItem value="alzheimer">Alzheimer/Demência</SelectItem>
                          <SelectItem value="diabetes">Diabetes</SelectItem>
                          <SelectItem value="pos-cirurgico">Pós-cirúrgico</SelectItem>
                          <SelectItem value="outras-comorbidades">Outras comorbidades</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="comorbidades"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel data-testid="label-comorbidades">Comorbidades Específicas do Paciente</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Descreva as condições de saúde específicas que requerem atenção..."
                        {...field}
                        data-testid="textarea-comorbidades"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="horarioPreferencial"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-horario">Horário Preferencial *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-horario">
                            <SelectValue placeholder="Selecione o horário" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="manha">Manhã (6h às 12h)</SelectItem>
                          <SelectItem value="tarde">Tarde (12h às 18h)</SelectItem>
                          <SelectItem value="noite">Noite (18h às 24h)</SelectItem>
                          <SelectItem value="madrugada">Madrugada (0h às 6h)</SelectItem>
                          <SelectItem value="12h-dia">12 horas - Dia</SelectItem>
                          <SelectItem value="12h-noite">12 horas - Noite</SelectItem>
                          <SelectItem value="24h">24 horas</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="urgencia"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel data-testid="label-urgencia">Quando precisa iniciar? *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-urgencia">
                            <SelectValue placeholder="Selecione a urgência" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="hoje">Hoje</SelectItem>
                          <SelectItem value="amanha">Amanhã</SelectItem>
                          <SelectItem value="esta-semana">Esta semana</SelectItem>
                          <SelectItem value="proxima-semana">Próxima semana</SelectItem>
                          <SelectItem value="este-mes">Este mês</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="diasSemana"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel className="text-base" data-testid="label-dias-semana">
                        Dias da Semana Necessários *
                      </FormLabel>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                      {diasSemana.map((dia) => (
                        <FormField
                          key={dia.id}
                          control={form.control}
                          name="diasSemana"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={dia.id}
                                className="flex flex-row items-center space-x-3 space-y-0 bg-neutral-50 p-3 rounded-lg hover:bg-neutral-100 transition-colors"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(dia.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, dia.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== dia.id
                                            )
                                          )
                                    }}
                                    data-testid={`checkbox-${dia.id}`}
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal cursor-pointer">
                                  {dia.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="observacoes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel data-testid="label-observacoes">Observações Adicionais</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Conte-nos mais sobre as necessidades específicas, rotina do paciente, medicamentos, ou qualquer informação relevante..."
                        rows={4}
                        {...field}
                        data-testid="textarea-observacoes"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-secondary text-white hover:bg-secondary/90 text-lg font-semibold px-12 py-4"
                  data-testid="button-enviar-whatsapp"
                >
                  <span className="mr-3">📱</span>
                  {isSubmitting ? 'Enviando...' : 'Enviar via WhatsApp'}
                </Button>
                <p className="text-sm text-neutral-500 mt-4" data-testid="text-aviso-whatsapp">
                  Ao enviar, você será redirecionado para o WhatsApp com suas informações preenchidas.
                </p>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
