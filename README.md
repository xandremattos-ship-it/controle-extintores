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


## v3.2.11.4 — Ordem cronológica real

A Central de Notificações usa a data real em que cada alerta foi gerado:

- vencimentos: data em que o item venceu;
- alertas próximos: data em que o item entrou na janela de alerta;
- tratativas: última criação ou atualização da NC;
- sincronização: horário da operação local mais recente.

A categoria e a criticidade não interferem mais na ordenação do filtro Todas.


## v3.2.12 — Autocadastro e aprovação de usuários

A tela de login possui a opção **Criar nova conta**. O usuário informa nome,
e-mail e senha e fica com o status `PENDENTE`.

Administradores recebem a solicitação na Central de Notificações e na tela
Usuários. A conta é ativada somente depois da escolha da função e da usina.

Estados suportados:

- `PENDENTE`;
- `ATIVO`;
- `REJEITADO`;
- `BLOQUEADO`.

A senha permanece exclusivamente no Firebase Authentication. Para habilitar o
fluxo, publique o arquivo `firestore.rules` incluído no pacote.


## v3.2.12.1 — Correção do botão Verificar liberação

O botão consulta o perfil diretamente no servidor, possui limite de espera de
10 segundos e nunca permanece carregando indefinidamente.

Quando a conta já estiver aprovada, o aplicativo confirma a liberação e
recarrega automaticamente para entrar no sistema. Quando continuar pendente,
o botão é liberado novamente e uma mensagem informa a situação.


## v3.2.12.2 — Notificações sincronizadas

O estado lido/não lido passa a ser sincronizado entre celular e computador
pela coleção `notificationStates`.

As notificações continuam sendo geradas a partir dos dados atuais do sistema,
portanto não formam um histórico infinito. Alertas resolvidos desaparecem e os
identificadores antigos são limpos a cada 24 horas, com limite de 500 por
usuário.

É necessário publicar novamente o arquivo `firestore.rules`.


## v3.2.12.3 — Cartão de compartilhamento

O endereço continua no GitHub Pages, sem mudança de hospedagem ou Firebase.

Foram adicionados metadados Open Graph e uma imagem de apresentação para que
o compartilhamento mostre o nome **Gestão de Extintores**, a descrição e a
identidade visual do sistema.

Endereço oficial:

`https://xandremattos-ship-it.github.io/controle-extintores/`

O arquivo utilizado na prévia é `share-preview-v3.2.12.3.png`.


## v3.2.12.4 — Prévia do WhatsApp

A imagem de compartilhamento passou a usar um novo endereço e formato JPEG:

`share-preview-v3.2.12.4.jpg`

O novo nome evita que o WhatsApp reutilize a falha armazenada para a imagem
anterior. A imagem possui 1200 × 630 pixels e tamanho reduzido.


## v3.2.13 — Proprietário do Sistema e Hierarquia Administrativa

A versão introduz o perfil `PROPRIETARIO`, protegido por um documento único em
`system/ownership`.

Somente o Proprietário:

- recebe e analisa novos cadastros;
- aprova ou rejeita solicitações;
- cria, promove, edita, bloqueia ou exclui administradores;
- consulta o histórico administrativo.

Administradores comuns continuam com acesso operacional a todas as usinas, mas
podem gerenciar somente Inspetores e Visualizadores.

A versão também cria a coleção `adminAudit`, acessível somente ao Proprietário.


## v3.2.13.5 — Restauração emergencial

Esta versão foi reconstruída diretamente sobre a v3.2.13 estável.

O Service Worker de emergência não intercepta as requisições do sistema.
Ele remove os caches antigos durante a ativação, evitando os erros
`Invalid URL`, `ERR_FAILED` e falhas de resposta no FetchEvent.

O banco de dados e as regras do Firestore permanecem inalterados.


## v3.2.13.6.1 — Etiqueta QR simplificada

As etiquetas individuais e em lote exibem somente o QR Code, o número do
extintor em destaque e a UTE centralizada. A localização e o nome da empresa
foram removidos da impressão.

Esta compilação também restaura integralmente as pastas `css` e `js`.


## v3.2.13.6.2 — Busca e NC corrigidas

- Busca dos extintores normalizada para número, localização, usina, agente,
  capacidade, situação, responsável, resultado e dados da tratativa.
- A pesquisa aceita `#21`, `21`, palavras com ou sem acento e múltiplos termos.
- Ao marcar NC por engano e desmarcar antes de salvar, a tratativa temporária
  é fechada, os campos são limpos e nenhuma NC é criada.
- Tratativas já salvas continuam preservadas durante a edição.


## v3.2.13.6.2.1 — Busca de extintores corrigida

A pesquisa da aba Extintores agora filtra os cards e as linhas diretamente,
sem reconstruir toda a tela durante a digitação.

A busca localiza por número, localização, usina, agente, capacidade, situação
operacional, inspeções e tratativas. Também reconhece números com `#` e zeros
à esquerda.

A correção da NC da versão v3.2.13.6.2 foi preservada.


## v3.2.13.6.2.2 — Busca de extintores definitiva

Correções aplicadas:

- a linha ou o card completo é ocultado quando não corresponde à busca;
- o número usa correspondência exata, com ou sem `#` e zeros à esquerda;
- a pesquisa consulta número, localização, usina, agente, capacidade e situação;
- inspeções e tratativas não geram resultados indevidos;
- o cache local é compactado quando as fotos ultrapassam o limite do navegador;
- Firestore, IndexedDB e a correção da NC permanecem preservados.



## v3.2.13.6.2.3 — Cores no relatório geral

No relatório geral em PDF:

- extintores **não conformes**, **com recarga vencida** ou **desativados**
  recebem preenchimento vermelho na linha;
- extintores **em estoque** recebem preenchimento azul;
- quando houver mais de uma condição, o vermelho tem prioridade;
- as demais linhas mantêm a aparência anterior.

A busca de extintores, a correção da NC e o novo ícone foram preservados.


## v3.2.13.6.2.4 — Contadores EM CAMPO e DESATIVADOS

O resumo executivo do relatório geral em PDF agora possui oito indicadores:

- Total;
- Conformes;
- Não conformes;
- Vencidos;
- Em recarga;
- Estoque;
- **Em campo**, na cor verde;
- **Desativados**, na cor vermelha.

As cores das linhas, a busca corrigida, a correção da NC e o novo ícone foram preservados.


## v3.2.13.6.2.5 — Ações da lista enquadradas

Na visualização em lista da aba Extintores:

- “Abrir prontuário”, “Editar” e “Excluir” permanecem dentro do card;
- a última coluna recebeu largura suficiente para as ações;
- os botões foram limitados ao espaço disponível;
- o card agora impede estouro horizontal;
- o comportamento no tablet e no celular foi preservado.

Os contadores do relatório, as cores, a busca, a correção da NC e o novo ícone foram mantidos.


## v4.0.0 — Módulo Hidrantes (Etapa 1 funcional)

Incluído módulo independente de hidrantes com cadastro, fotografia, situação, último teste de mangueira, inspeção, checklist C/NC/N.A., quantidades de esguichos, chaves Storz e mangueiras, observações, tratativa de NC, prontuário e relatórios PDF.

Novas coleções Firestore: `hydrants` e `hydrantInspections`. É obrigatório publicar as regras `firestore.rules` desta versão.
