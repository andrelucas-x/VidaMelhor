# 🚀 Guia de Deploy - Vida Melhor Home Care

Este guia explica como fazer deploy da aplicação em diferentes plataformas.

## 📋 Pré-requisitos

- Conta no GitHub
- Repositório Git configurado
- Variáveis de ambiente configuradas

## 🔧 Variáveis de Ambiente Necessárias

```env
DATABASE_URL="postgresql://username:password@host:port/database"
SESSION_SECRET="sua-chave-secreta-aqui"
NODE_ENV="production"
```

## 🌐 Deploy na Vercel (Recomendado)

### Opção 1: Deploy Automático via GitHub

1. **Push para GitHub**:
```bash
git add .
git commit -m "Deploy setup for Vercel"
git push origin main
```

2. **Conectar à Vercel**:
   - Acesse [vercel.com](https://vercel.com)
   - Conecte sua conta GitHub
   - Selecione o repositório
   - Configure as variáveis de ambiente
   - Deploy automático!

### Opção 2: Deploy Manual via CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Login na Vercel
vercel login

# Deploy
vercel --prod
```

### Configuração Automática

O arquivo `vercel.json` já está configurado com:
- Build commands otimizados
- Routing para SPA
- Serverless functions
- Configurações de ambiente

## 🟣 Deploy na Netlify

### Opção 1: Via GitHub (Automático)

1. Push para GitHub (mesmo processo acima)
2. Acesse [netlify.com](https://netlify.com)
3. Conecte o repositório
4. Configure variáveis de ambiente
5. Deploy automático!

### Opção 2: Deploy Manual

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Build local
npm run build

# Deploy
netlify deploy --prod --dir=dist/public
```

## 🐳 Deploy com Docker (Opcional)

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --production

COPY . .
RUN npm run build

EXPOSE 5000
CMD ["npm", "start"]
```

## 🔍 Verificação do Deploy

Após o deploy, verifique:

1. **Frontend**: Site carregando corretamente
2. **API**: Endpoints respondendo
3. **Formulário**: Envio funcionando
4. **WhatsApp**: Redirecionamento funcionando
5. **Responsivo**: Design em mobile
6. **SEO**: Meta tags carregando

## 🚨 Troubleshooting Comum

### Erro de Build
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Erro de Database
- Verificar se DATABASE_URL está correto
- Conferir se o banco aceita conexões externas
- Executar `npm run db:push` se necessário

### Erro de Environment Variables
- Verificar se todas as variáveis estão configuradas
- Não esquecer do SESSION_SECRET
- NODE_ENV deve ser "production"

### Erro 404 em Rotas
- Verificar se o SPA routing está configurado
- Conferir se o `vercel.json` está correto
- Verificar se não há conflitos de rota

## 📊 Monitoramento

### Vercel Analytics
- Ativar Web Analytics no dashboard
- Configurar Core Web Vitals
- Monitorar performance

### Logs de Erro
- Acessar via Vercel Dashboard
- Verificar Functions logs
- Monitorar API responses

## 🔄 CI/CD Pipeline

### GitHub Actions (Opcional)

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
```

## 📞 Suporte

Para dúvidas sobre deploy:
1. Verificar logs da plataforma
2. Consultar documentação oficial
3. Verificar se todas as dependências estão listadas
4. Testar build local primeiro

---

**Nota**: O projeto está otimizado para Vercel, mas funciona em qualquer plataforma que suporte Node.js e builds estáticos.