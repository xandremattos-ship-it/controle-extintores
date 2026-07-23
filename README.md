# Gestão de Extintores — Enterprise v3.0

Estrutura modular:

- `index.html`: estrutura da aplicação e carregamento dos módulos.
- `css/app.css`: interface principal, desktop, login e mobile.
- `css/offline.css`: indicador de conexão e avisos offline.
- `js/app.js`: regras do sistema, Firebase, usuários, extintores e inspeções.
- `js/offline.js`: IndexedDB, cache local, fila e sincronização.
- `service-worker.js`: instalação PWA e cache dos arquivos da aplicação.

Primeiro teste:
1. Publique todos os arquivos e pastas no GitHub.
2. Abra com internet e faça login.
3. Feche o aplicativo.
4. Desative a internet.
5. Abra novamente.


## Etapa 2 — Operação offline

Com o primeiro login online já realizado, o Inspetor pode sem internet:

- abrir Dashboard e lista de extintores;
- consultar extintores pelo QR Code;
- cadastrar e editar extintores;
- movimentar o status operacional;
- excluir extintores;
- criar e editar inspeções;
- excluir inspeções conforme a permissão do perfil;
- acompanhar registros com o selo "Aguardando sincronização".

As operações ficam no IndexedDB e são processadas quando a conexão retorna.


## Etapa 3 — Sincronização automática reforçada

- sincronização automática quando a internet retorna;
- tentativa ao abrir ou retornar ao aplicativo;
- verificação periódica de pendências;
- progresso visual da sincronização;
- processamento independente de cada operação;
- falhas parciais não interrompem as demais;
- novas tentativas automáticas com intervalos progressivos;
- central com lista de operações pendentes e falhas;
- atualização dos dados locais e da interface após a sincronização;
- suporte ao Background Sync quando disponível no navegador.


## v3.2.1 — Sprint 1: Tratativa da Não Conformidade

Quando qualquer item da inspeção é marcado como `NC`, o formulário de tratativa é exibido automaticamente.

Campos incluídos:

- setor responsável;
- responsável que recebeu a NC;
- cargo;
- data do encaminhamento;
- forma de comunicação;
- número da ordem de serviço;
- descrição do encaminhamento;
- status da tratativa.

Status disponíveis:

- Encaminhada;
- Em andamento;
- Aguardando verificação;
- Resolvida;
- Encerrada;
- Cancelada.

Administrador e Inspetor podem alterar o status conforme as permissões de inspeção e usina já existentes. O Visualizador permanece somente para consulta.

As informações são salvas dentro do documento da inspeção no objeto `naoConformidade`, sem criar nova coleção no Firestore. Inspeções antigas continuam compatíveis.


## Sprint 2 — Linha do tempo da Tratativa de NC

- exibição cronológica das ações da não conformidade;
- registro automático da detecção e do encaminhamento;
- registro das alterações de status;
- registro de alterações em setor, responsável, comunicação, OS e descrição;
- campo opcional para anotações de acompanhamento e evidências;
- identificação do usuário, perfil, data e hora em cada evento;
- compatibilidade visual com tratativas criadas na Sprint 1.


## Sprint 3 — Dashboard de Não Conformidades

O Painel Geral agora apresenta os indicadores:

- NC pendentes;
- NC em andamento;
- NC resolvidas.

Os cards podem ser selecionados para abrir uma relação detalhada das tratativas daquele status. Os dados continuam armazenados dentro de cada inspeção, no objeto `naoConformidade`.


## Hotfix v3.2.3.1 — Dashboard NC no mobile

Corrige a exibição dos cards de tratativas no aplicativo instalado e força o carregamento dos arquivos atualizados, evitando que o PWA continue utilizando JavaScript e CSS antigos.
