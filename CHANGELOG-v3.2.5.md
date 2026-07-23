# Gestão de Extintores v3.2.5 — Otimização de desempenho

## Salvamento local-first

- O sistema salva primeiro no aparelho e sincroniza em segundo plano.
- O formulário não aguarda mais a leitura e regravação de toda a coleção do Firestore.
- Somente o extintor ou a inspeção alterada é enviada para a nuvem.
- Edições repetidas do mesmo registro substituem a pendência anterior, evitando fila duplicada.

## Aplicativo móvel

- Fotos são redimensionadas e comprimidas de forma mais eficiente no celular.
- O backup completo do cache é executado fora do caminho principal do salvamento.
- Atualizações da interface de sincronização foram reduzidas durante o envio automático.
- O sistema não recarrega todas as coleções após cada alteração sincronizada.

## Segurança e compatibilidade

- Pendências são preservadas no IndexedDB antes de o formulário ser fechado.
- Ao reabrir o app, as operações pendentes são reaplicadas ao estado local.
- Exclusões de inspeções e extintores também usam a fila confiável.
- Operações antigas do tipo snapshot continuam compatíveis.
- Nenhuma coleção nova foi criada no Firestore.
