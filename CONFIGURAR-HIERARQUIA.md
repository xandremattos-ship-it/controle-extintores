# ATIVAÇÃO DA HIERARQUIA v3.2.13

## Ordem obrigatória

1. Publique o arquivo `firestore.rules` no Firebase.
2. Envie todos os arquivos da versão v3.2.13 ao GitHub.
3. Entre primeiro com a conta que deve ser a proprietária do sistema.
4. Atualize a página uma vez após o primeiro acesso.

## Migração automática

Quando ainda não existe um Proprietário registrado, o primeiro usuário que:

- já possua perfil `ADMINISTRADOR`;
- esteja ativo;
- entre após a publicação da v3.2.13;

é promovido automaticamente para `PROPRIETARIO`.

Depois dessa promoção, nenhum outro administrador poderá reivindicar a propriedade.

## Restrições do administrador comum

O Administrador comum:

- não visualiza cadastros pendentes;
- não recebe notificações de novos cadastros;
- não aprova nem rejeita usuários;
- não cria ou promove administradores;
- não edita, bloqueia ou exclui contas administrativas;
- pode gerenciar apenas Inspetores e Visualizadores;
- mantém acesso operacional a todas as usinas.

## Conta do Proprietário

A conta proprietária não pode ser bloqueada, excluída ou rebaixada pela interface
ou pelas regras do Firestore.
