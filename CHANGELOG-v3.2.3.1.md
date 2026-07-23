# Gestão de Extintores v3.2.3.1 — Correção Mobile

## Correções

- Tratativas de não conformidades passam a aparecer no Painel Geral do PWA móvel.
- Cards de NC ocupam toda a largura disponível no celular.
- Modal dos registros foi adaptado para telas pequenas.
- Arquivos JS e CSS receberam versionamento explícito para impedir carregamento do cache antigo.
- Service Worker agora busca JS e CSS primeiro na rede quando houver conexão.
- Nova versão do PWA é ativada imediatamente.
- Removido o registro antigo e inexistente do arquivo `sw.js`.
- Corrigido evento de instalação duplicado no Service Worker.
