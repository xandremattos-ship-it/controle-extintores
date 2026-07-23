# Gestão de Extintores v3.2.11.2 — Correção da NC no cadastro

## Problema corrigido

Ao cadastrar um extintor com não conformidade, o extintor era criado, mas a
inspeção inicial e a tratativa podiam desaparecer da interface quando o Painel
atualizava os dados da nuvem antes do término da sincronização.

## Correções

- Registros locais pendentes são reaplicados após toda atualização do Painel.
- A inspeção inicial e a tratativa permanecem visíveis imediatamente.
- Após o cadastro com NC, o sistema abre diretamente a aba Tratativas do
  prontuário do novo extintor.
- Extintor e inspeção são enviados respeitando a ordem correta.
- Dados são sanitizados antes do envio ao Firestore, removendo valores
  incompatíveis ou indefinidos.
- Pendências continuam preservadas no aparelho caso a internet falhe.
- Nenhuma coleção ou regra nova do Firestore é necessária.
