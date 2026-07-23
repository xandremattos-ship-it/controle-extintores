# Gestão de Extintores v3.2.5.1 — Correção IndexedDB

## Problema corrigido

O aplicativo tentava abrir o banco local `gestao-extintores-offline` na versão 1,
mas alguns dispositivos já possuíam a versão 2. Isso causava `VersionError` e
impedia o cache, a fila offline e o salvamento das inspeções.

## Correção

- O banco passa a abrir automaticamente na versão já existente no aparelho.
- Bancos novos continuam criando normalmente as stores `kv` e `queue`.
- Os dados locais existentes não são apagados.
- Adicionado tratamento para troca de versão e banco bloqueado por outra aba.
- Cache do PWA atualizado para forçar o carregamento dos arquivos corrigidos.
