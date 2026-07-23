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


## Sprint 4 — Relatórios PDF de Não Conformidades

O relatório geral agora possui um anexo de tratativas com indicadores, detalhes do encaminhamento e linha do tempo. O PDF individual do extintor também apresenta o histórico e as tratativas completas de cada inspeção.


## v3.2.4.1 — Ordem numérica e QR por usina

A relação de extintores e as etiquetas em lote passam a seguir ordem numérica. O Administrador escolhe a usina antes da impressão, enquanto Inspetor e Visualizador utilizam automaticamente a usina do próprio perfil. O nome da usina é exibido abaixo de todos os QR Codes.


## v3.2.5 — Otimização de desempenho

O salvamento passou a ser local-first: a alteração é registrada no aparelho e o envio para o Firestore ocorre em segundo plano. Apenas o registro alterado é sincronizado, reduzindo significativamente a espera no aplicativo móvel.


## Hotfix v3.2.5.1 — IndexedDB

Corrige o erro `The requested version (1) is less than the existing version (2)`.
A atualização preserva os registros e pendências armazenados no aparelho.


## v3.2.6 — Aba própria de Tratativas de NC

A nova aba **Tratativas** centraliza todas as não conformidades, com indicadores,
busca, filtros, acompanhamento das etapas, tempo em aberto e atalhos para a
inspeção e o prontuário do extintor.


## v3.2.7 — Prontuário digital do extintor

Ao selecionar um extintor, o sistema abre uma página detalhada com visão geral, histórico de inspeções, tratativas de não conformidades, QR Code e documentos.


## v3.2.8 — Ações rápidas e botão flutuante

O Painel Geral possui atalhos de operação no computador. No aplicativo móvel,
um botão flutuante abre um painel inferior com cadastro, inspeção, leitura de QR,
tratativas pendentes e relatórios, conforme as permissões do usuário.


## v3.2.9 — Alternância entre cards e lista

A aba Extintores permite alternar entre cards visuais e uma lista compacta.
A preferência fica salva por usuário e a lista se adapta ao computador e ao
aplicativo móvel.


## v3.2.10 — Filtros avançados

A aba Extintores recebeu filtros por agente, teste hidrostático, inspeção,
tratativa de NC, prazo da recarga e ordenação. A lista móvel ficou mais compacta,
e os campos de pesquisa das telas Tratativas e Inspecionar passaram a seguir o
tema escuro do sistema.


## v3.2.10.1 — Lista móvel lateral

No celular, Situação, Recarga, TH e Inspeção ficam em quatro quadrados ao lado
do número, localização e usina. A alteração reduz a altura de cada registro sem
remover informações.


## v3.2.11 — Central de Notificações

O sino da barra superior reúne alertas de vencimento, teste hidrostático,
tratativas de não conformidade, sincronização e modo offline. As notificações
podem ser filtradas, marcadas como lidas e abertas diretamente no registro
correspondente.


## v3.2.11.1 — Tratativa de NC no cadastro

Ao marcar um item como não conforme durante o cadastro de um extintor, o
formulário de tratativa é aberto automaticamente. A inspeção inicial, a NC e
a linha do tempo são salvas junto com o novo equipamento.


## v3.2.11.2 — Correção da tratativa no cadastro

Corrige a perda temporária da inspeção inicial e da tratativa quando o Painel
era atualizado antes da sincronização. O prontuário do novo extintor passa a
abrir diretamente na aba Tratativas quando existir uma NC.


## v3.2.11.3 — Notificações mais recentes primeiro

A Central de Notificações passa a ordenar todos os alertas pela data, do mais
recente para o mais antigo. No filtro Todas, as categorias não agrupam mais os
registros.
