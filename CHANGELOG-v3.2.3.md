# Gestão de Extintores v3.2.3 — Sprint 3

## Dashboard de Não Conformidades

- Novos indicadores:
  - NC pendentes;
  - NC em andamento;
  - NC resolvidas.
- Contagem baseada no objeto `naoConformidade` das inspeções.
- Compatibilidade com inspeções antigas sem tratativa.
- Os indicadores respeitam automaticamente o perfil e a usina do usuário.
- Clique em um indicador para visualizar os registros daquele status.
- Lista detalhada com extintor, usina, localização, setor, responsável, data e comunicação.
- Acesso direto ao histórico do extintor pela lista.
- Nenhuma nova coleção foi criada no Firestore.
- Motor offline e sincronização da v3.2 foram preservados.
