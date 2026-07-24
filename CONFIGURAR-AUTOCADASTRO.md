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
