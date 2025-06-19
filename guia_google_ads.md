# Guia para Configuração do Google Ads

## Índice
1. [Criação de Conta no Google Ads](#criação-de-conta-no-google-ads)
2. [Configuração da Tag do Google Ads](#configuração-da-tag-do-google-ads)
3. [Configuração de Conversões](#configuração-de-conversões)
4. [Criação de Campanhas](#criação-de-campanhas)
5. [Otimização de Campanhas](#otimização-de-campanhas)
6. [Monitoramento e Relatórios](#monitoramento-e-relatórios)

## Criação de Conta no Google Ads

### Passo 1: Criar uma conta no Google Ads
1. Acesse [ads.google.com](https://ads.google.com/)
2. Clique em "Começar agora"
3. Faça login com sua conta Google
4. Siga as instruções para criar sua conta

### Passo 2: Configurar informações da empresa
1. Preencha as informações da empresa:
   - Nome da empresa: Pontes & Silva Direito Previdenciário
   - Site: pontessilvaprevidenciario.com.br
   - Fuso horário e moeda
2. Configure as preferências de faturamento:
   - Adicione um método de pagamento
   - Configure o endereço de faturamento

## Configuração da Tag do Google Ads

### Passo 1: Obter o código da tag
1. No Google Ads, clique em "Ferramentas e configurações" (ícone de chave inglesa)
2. Em "Medição", clique em "Tag do Google Ads"
3. Copie o código da tag global do site

### Passo 2: Instalar a tag no site
A tag do Google Ads já está instalada no seu site. Você pode verificar nos arquivos HTML:

```html
<!-- Google Ads Tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GTM-T686324P"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GTM-T686324P');
</script>
```

### Passo 3: Verificar a instalação
1. Instale a extensão Tag Assistant no Chrome
2. Visite seu site
3. Clique no ícone do Tag Assistant para verificar se a tag está funcionando corretamente
4. Verifique se a tag do Google Ads está sendo detectada sem erros

## Configuração de Conversões

### Passo 1: Criar conversões
1. No Google Ads, clique em "Ferramentas e configurações"
2. Em "Medição", clique em "Conversões"
3. Clique em "Nova ação de conversão"
4. Selecione "Site"

### Passo 2: Configurar ações de conversão
Configure as seguintes conversões:

#### Conversão 1: Contato via WhatsApp
1. Nome da conversão: "Contato WhatsApp"
2. Categoria: "Contato"
3. Valor: Escolha "Usar o mesmo valor para cada conversão" (pode definir um valor estimado por lead)
4. Contagem: "Uma"
5. Janela de conversão: 30 dias
6. Clique em "Criar e continuar"
7. Copie o código de evento fornecido

#### Conversão 2: Formulário de Contato
1. Nome da conversão: "Formulário de Contato"
2. Categoria: "Envio de formulário"
3. Valor: Escolha "Usar o mesmo valor para cada conversão"
4. Contagem: "Uma"
5. Janela de conversão: 30 dias
6. Clique em "Criar e continuar"
7. Copie o código de evento fornecido

#### Conversão 3: Visualização de Página de Serviços
1. Nome da conversão: "Visualização Serviços"
2. Categoria: "Visualização de página"
3. Valor: Escolha "Não usar um valor"
4. Contagem: "Uma"
5. Janela de conversão: 30 dias
6. Clique em "Criar e continuar"
7. Copie o código de evento fornecido

### Passo 3: Implementar os códigos de evento
Substitua o código `COLOQUE_SEU_LABEL` nos arquivos HTML pelos códigos de evento correspondentes:

1. Para o botão de WhatsApp:
```javascript
gtag('event', 'conversion', {'send_to': 'GTM-T686324P/LABEL_WHATSAPP'});
```

2. Para o formulário de contato:
```javascript
gtag('event', 'conversion', {'send_to': 'GTM-T686324P/LABEL_FORMULARIO'});
```

3. Para a visualização da página de serviços:
```javascript
gtag('event', 'conversion', {'send_to': 'GTM-T686324P/LABEL_SERVICOS'});
```

### Passo 4: Verificar as conversões
1. Use o Tag Assistant para verificar se os eventos estão sendo disparados corretamente
2. No Google Ads, vá para "Conversões" para ver se os eventos estão sendo registrados
3. Faça alguns testes clicando nos botões e preenchendo formulários para gerar conversões de teste

## Criação de Campanhas

### Passo 1: Criar uma nova campanha
1. No Google Ads, clique em "Campanhas" no menu lateral
2. Clique em "Nova campanha"

### Passo 2: Escolher o objetivo da campanha
1. Selecione o objetivo da campanha:
   - Vendas: Para obter leads qualificados
   - Leads: Para obter informações de contato de potenciais clientes
   - Tráfego para o site: Para aumentar as visitas ao site

### Passo 3: Escolher o tipo de campanha
Recomendamos começar com estes tipos de campanha:

#### Campanha de Pesquisa
1. Selecione "Pesquisa" como tipo de campanha
2. Configure as configurações da campanha:
   - Nome da campanha: "Pesquisa - Direito Previdenciário"
   - Redes: Apenas Pesquisa Google
   - Localizações: Rio de Janeiro e região
   - Idiomas: Português
   - Orçamento diário: Defina de acordo com seu orçamento
   - Estratégia de lances: Maximizar conversões ou CPC manual

#### Campanha de Display
1. Selecione "Display" como tipo de campanha
2. Configure as configurações da campanha:
   - Nome da campanha: "Display - Direito Previdenciário"
   - Localizações: Rio de Janeiro e região
   - Idiomas: Português
   - Orçamento diário: Defina de acordo com seu orçamento
   - Estratégia de lances: Maximizar conversões ou CPC manual

### Passo 4: Configurar grupos de anúncios e palavras-chave

#### Para Campanha de Pesquisa:

**Grupo de Anúncios 1: Aposentadoria**
Palavras-chave:
- advogado aposentadoria
- como se aposentar
- aposentadoria inss
- direito aposentadoria
- advogado previdenciário
- aposentadoria por idade
- aposentadoria por tempo de contribuição
- aposentadoria especial

**Grupo de Anúncios 2: Auxílios**
Palavras-chave:
- auxílio doença
- auxílio acidente
- benefício por incapacidade
- perícia inss
- advogado auxílio doença
- como conseguir auxílio doença
- auxílio doença negado

**Grupo de Anúncios 3: Revisões**
Palavras-chave:
- revisão aposentadoria
- revisão da vida toda
- revisão benefício inss
- aumentar aposentadoria
- advogado revisão benefício
- revisão de benefício previdenciário

#### Para Campanha de Display:
- Segmentação por tópicos: Direito, Previdência, Aposentadoria
- Segmentação por interesses: Serviços jurídicos, Planejamento de aposentadoria
- Segmentação por palavras-chave: Semelhantes às da campanha de pesquisa

### Passo 5: Criar anúncios

#### Para Campanha de Pesquisa:
Crie anúncios de texto responsivos:

**Exemplo para Grupo de Anúncios "Aposentadoria":**
- Títulos:
  - Especialistas em Aposentadoria
  - Garanta sua Aposentadoria
  - Advogados Previdenciários RJ
  - Aposentadoria INSS - Consulta Grátis
  - Pontes & Silva Direito Previdenciário
- Descrições:
  - Advogados especialistas em direito previdenciário. Consulta gratuita!
  - Garantimos seus direitos junto ao INSS. Atendimento personalizado.
  - Aumente suas chances de aprovação com nossa assessoria especializada.
  - Análise gratuita do seu caso. Entre em contato agora!

#### Para Campanha de Display:
Crie anúncios responsivos de display:
- Faça upload das imagens do escritório e da logo
- Adicione títulos e descrições semelhantes aos da campanha de pesquisa
- Inclua um call-to-action claro: "Agende uma Consulta Grátis"

## Otimização de Campanhas

### Passo 1: Monitorar o desempenho
1. Monitore regularmente o desempenho das suas campanhas
2. Preste atenção a métricas como:
   - Taxa de cliques (CTR)
   - Custo por clique (CPC)
   - Taxa de conversão
   - Custo por conversão

### Passo 2: Otimizar palavras-chave
1. Identifique palavras-chave com bom desempenho e aumente os lances
2. Adicione palavras-chave negativas para evitar cliques irrelevantes
3. Experimente diferentes tipos de correspondência (ampla, frase, exata)

### Passo 3: Otimizar anúncios
1. Teste diferentes títulos e descrições
2. Pause anúncios com baixo desempenho
3. Crie novos anúncios com base nos que têm melhor desempenho

### Passo 4: Ajustar segmentação
1. Refine as localizações com base no desempenho
2. Ajuste a segmentação por dispositivo (desktop, mobile)
3. Experimente diferentes estratégias de lances

## Monitoramento e Relatórios

### Passo 1: Configurar relatórios regulares
1. No Google Ads, vá para "Relatórios"
2. Crie relatórios personalizados para monitorar:
   - Desempenho de palavras-chave
   - Desempenho de anúncios
   - Conversões
   - Segmentação geográfica

### Passo 2: Vincular Google Ads ao Google Analytics
1. No Google Ads, vá para "Ferramentas e configurações" > "Configurações vinculadas"
2. Clique em "Google Analytics"
3. Selecione a propriedade do Google Analytics que corresponde ao seu site
4. Clique em "Vincular"

### Passo 3: Analisar dados no Google Analytics
1. No Google Analytics, vá para "Aquisição" > "Google Ads"
2. Analise métricas como:
   - Páginas por sessão
   - Duração média da sessão
   - Taxa de rejeição
   - Fluxo de comportamento

### Passo 4: Fazer ajustes com base nos dados
1. Use os insights dos relatórios para otimizar suas campanhas
2. Faça ajustes regulares para melhorar o desempenho
3. Teste novas abordagens e estratégias

## Dicas Adicionais

### Extensões de Anúncio
Adicione extensões aos seus anúncios para aumentar o CTR:
1. Extensões de chamada: Adicione o número de telefone
2. Extensões de local: Adicione o endereço do escritório
3. Extensões de sitelink: Adicione links para páginas importantes (Serviços, Sobre, Contato)
4. Extensões de texto destacado: Destaque diferenciais como "Consulta Gratuita", "Especialistas em Previdenciário", "Atendimento Personalizado"

### Remarketing
Configure campanhas de remarketing para alcançar pessoas que já visitaram seu site:
1. Crie listas de remarketing no Google Ads
2. Crie campanhas específicas para essas listas
3. Personalize as mensagens com base nas páginas visitadas

### Orçamento e Lances
1. Comece com um orçamento conservador e aumente gradualmente
2. Concentre-se em palavras-chave de alta conversão
3. Use ajustes de lance para dispositivos móveis se o desempenho for diferente
4. Considere usar lances mais altos em horários de pico

### Monitoramento da Concorrência
1. Use a ferramenta "Leilões de insights" para ver como seus anúncios se comparam aos concorrentes
2. Monitore a participação de impressão para garantir visibilidade adequada
3. Ajuste sua estratégia com base na atividade dos concorrentes

---

Este guia fornece as etapas básicas para configurar e gerenciar campanhas no Google Ads para o escritório Pontes & Silva Direito Previdenciário. Lembre-se de que a plataforma do Google Ads é atualizada frequentemente, então é importante estar atento às mudanças na interface e nas funcionalidades.

