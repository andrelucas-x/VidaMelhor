# Vida Melhor - Home Care

Uma plataforma web moderna para serviços de Home Care especializada em cuidados domiciliares para idosos e pacientes com comorbidades em Curitiba e região metropolitana.

## 🚀 Tecnologias

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js + Express + TypeScript
- **UI/UX**: Tailwind CSS + shadcn/ui + Radix UI
- **Formulários**: React Hook Form + Zod validation
- **Estado**: TanStack Query
- **Banco de Dados**: PostgreSQL + Drizzle ORM
- **Hospedagem**: Vercel (Frontend + Serverless Functions)

## 🎯 Features

- ✅ Site institucional responsivo
- ✅ Formulário de pré-qualificação de leads
- ✅ Integração com WhatsApp para comunicação
- ✅ Carrossel de imagens no hero
- ✅ Navegação suave entre seções
- ✅ SEO otimizado
- ✅ Design profissional focado em healthcare

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Configuração do Projeto

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd vida-melhor-home-care
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

O site estará disponível em `http://localhost:5000`

## 📦 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Inicia o servidor em produção
- `npm run check` - Verifica tipos TypeScript
- `npm run db:push` - Aplica mudanças no banco de dados

## 🌐 Deploy na Vercel

### Deploy Automático (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente no dashboard da Vercel
3. Deploy automático em cada push para `main`

### Deploy Manual

```bash
npm install -g vercel
npm run build
vercel --prod
```

## 🔧 Configuração de Ambiente

Crie um arquivo `.env.local` com as seguintes variáveis:

```env
# Database
DATABASE_URL="sua-connection-string-postgresql"

# Session (opcional)
SESSION_SECRET="sua-chave-secreta-aqui"

# Environment
NODE_ENV=production
```

## 📱 Estrutura do Projeto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/        # Páginas da aplicação
│   │   ├── hooks/        # Custom hooks
│   │   └── lib/          # Utilitários
│   └── index.html
├── server/                # Backend Express
│   ├── index.ts          # Entrada do servidor
│   ├── routes.ts         # Rotas da API
│   └── storage.ts        # Interface de storage
├── shared/               # Tipos e schemas compartilhados
└── vercel.json          # Configuração do Vercel
```

## 🎨 Personalização

### Cores e Tema
As cores principais são definidas em `client/src/index.css`:
- Primary: `hsl(158 64% 52%)` (emerald-600)
- Secondary: `hsl(185 84% 44%)` (teal-600)

### Componentes UI
Baseados no shadcn/ui. Para adicionar novos componentes:
```bash
npx shadcn-ui@latest add <component-name>
```

## 🔍 SEO

O site inclui:
- Meta tags otimizadas
- Open Graph para redes sociais
- Favicon personalizado
- Títulos e descrições únicos
- Schema markup para healthcare

## 📞 Contato e Suporte

Para dúvidas técnicas sobre o código, abra uma issue no repositório.

Para serviços de Home Care:
- **Telefone**: (41) 99625-4624
- **Atendimento**: Segunda a domingo, 8h às 20h
- **Região**: Curitiba e região metropolitana

## 📄 Licença

MIT License - veja o arquivo LICENSE para detalhes.