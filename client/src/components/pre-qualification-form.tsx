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
import { SiWhatsapp } from "react-icons/si";
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
      tipoCuidado: ""
    }
  });

  const onSubmit = async (data: InsertPreQualification) => {
    setIsSubmitting(true);
    
    try {
      // Prepare data for WhatsApp with only the essential fields
      const whatsappData = {
        responsavelNome: data.responsavelNome,
        telefone: data.telefone,
        idadePaciente: data.idadePaciente,
        tipoCuidado: data.tipoCuidado
      };
      
      // Redirect to WhatsApp with formatted message
      redirectToWhatsApp(whatsappData);
      
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
          <h3 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 tracking-tight" data-testid="title-formulario">
            SOLICITE SEU ORÇAMENTO PERSONALIZADO
          </h3>
          <p className="text-xl text-neutral-500" data-testid="subtitle-formulario">Preencha o breve formulário abaixo e conversaremos sobre uma proposta personalizada.</p>
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

              <div className="text-center">
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-bold px-12 py-4 tracking-wide"
                  data-testid="button-enviar-whatsapp"
                >
                  <SiWhatsapp className="mr-3 text-xl" />
                  {isSubmitting ? 'ENVIANDO...' : 'ENVIAR VIA WHATSAPP'}
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
