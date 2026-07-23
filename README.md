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
