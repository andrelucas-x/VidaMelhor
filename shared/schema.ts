import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const preQualifications = pgTable("pre_qualifications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  responsavelNome: text("responsavel_nome").notNull(),
  telefone: text("telefone").notNull(),
  idadePaciente: text("idade_paciente").notNull(),
  tipoCuidado: text("tipo_cuidado").notNull(),
  comorbidades: text("comorbidades"),
  horarioPreferencial: text("horario_preferencial"),
  urgencia: text("urgencia"),
  diasSemana: text("dias_semana").array(),
  observacoes: text("observacoes"),
  createdAt: timestamp("created_at").default(sql`now()`).notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPreQualificationSchema = createInsertSchema(preQualifications).omit({
  id: true,
  createdAt: true,
}).extend({
  responsavelNome: z.string().min(2, "Nome é obrigatório"),
  telefone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  idadePaciente: z.string().min(1, "Idade do paciente é obrigatória"),
  tipoCuidado: z.string().min(1, "Tipo de cuidado é obrigatório"),
  observacoes: z.string().optional(),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertPreQualification = z.infer<typeof insertPreQualificationSchema>;
export type PreQualification = typeof preQualifications.$inferSelect;
