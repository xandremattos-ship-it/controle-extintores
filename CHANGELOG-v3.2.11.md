# Gestão de Extintores v3.2.11 — Central de Notificações

## Nova Central

Foi adicionado um sino na barra superior do sistema. O contador mostra a
quantidade de notificações ainda não lidas.

A Central identifica automaticamente:

- recargas vencidas;
- recargas próximas do vencimento;
- testes hidrostáticos vencidos;
- testes hidrostáticos próximos do vencimento;
- não conformidades aguardando atendimento;
- não conformidades em andamento;
- tratativas abertas há muitos dias;
- alterações aguardando sincronização;
- funcionamento do aplicativo em modo offline.

## Recursos

- classificação em Críticas, Atenção, Tratativas e Sistema;
- filtro por categoria;
- opção para visualizar somente notificações não lidas;
- marcação individual como lida;
- opção para marcar todas como lidas;
- atualização manual dos alertas;
- acesso direto ao prontuário do extintor;
- acesso direto à tratativa da inspeção;
- sincronização iniciada diretamente pela notificação;
- painel lateral no computador;
- painel inferior responsivo no celular.

## Armazenamento

As notificações são geradas a partir dos dados já existentes. Nenhuma nova
coleção foi criada no Firestore. O estado de leitura fica armazenado somente
no aparelho e separado por usuário.
