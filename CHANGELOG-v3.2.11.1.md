# Gestão de Extintores v3.2.11.1 — Tratativa de NC no cadastro

## Alteração

Ao cadastrar um novo extintor, a inspeção inicial já possui o mesmo fluxo de
tratativa utilizado nas inspeções normais.

Quando qualquer item for marcado como `NC`, o formulário
**Tratativa da Não Conformidade** será exibido automaticamente.

## Campos da tratativa

- setor responsável;
- responsável que recebeu a NC;
- cargo;
- data do encaminhamento;
- status da tratativa;
- forma de comunicação;
- número da OS;
- descrição do encaminhamento.

## Registro criado

O cadastro passa a salvar, em uma única operação lógica:

1. o extintor;
2. a inspeção inicial;
3. a tratativa da não conformidade;
4. os itens originalmente marcados como NC;
5. a linha do tempo completa da tratativa.

A ocorrência aparece imediatamente na aba Tratativas, no prontuário digital,
nos relatórios e na Central de Notificações.

Nenhuma coleção ou regra nova do Firestore é necessária.
