# Configuração obrigatória do autocadastro

A versão v3.2.12 inclui o arquivo `firestore.rules`.

## Publicação pelo Console do Firebase

1. Abra o projeto **controleextintores-ffd13** no Firebase.
2. Entre em **Firestore Database**.
3. Abra a aba **Regras**.
4. Substitua o conteúdo atual pelo conteúdo do arquivo `firestore.rules`.
5. Clique em **Publicar**.

## Publicação pela Firebase CLI

Com a Firebase CLI configurada para o projeto:

```bash
firebase deploy --only firestore:rules
```

## Autenticação

Em **Authentication → Sign-in method**, mantenha habilitado o provedor
**E-mail/senha**. O sistema já utiliza esse provedor para o login atual.

## Segurança aplicada

O novo usuário pode criar somente o próprio perfil com:

- status `PENDENTE`;
- conta inativa;
- função vazia;
- usina vazia.

Somente um Administrador ativo pode definir função, usina, aprovar, rejeitar,
bloquear ou excluir usuários.


## v3.2.12.2 — Sincronização de notificações

Publique novamente o arquivo `firestore.rules`. A nova coleção
`notificationStates` armazena apenas os identificadores das notificações
marcadas como lidas por cada usuário.

Não são armazenados textos, dados de extintores ou histórico de notificações.

### Política de retenção

- Alertas ativos permanecem visíveis até a condição ser resolvida.
- Notificações não são gravadas como histórico permanente.
- Quando um alerta deixa de existir, seu identificador de leitura é removido.
- A limpeza é executada automaticamente a cada 24 horas.
- Cada usuário pode manter no máximo 500 identificadores de leitura.
