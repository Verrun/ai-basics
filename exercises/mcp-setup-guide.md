# MCP Setup Guide

Пошаговая установка MCP и плагинов в OpenCode (модуль **М4**).

---

## CLI — если впервые видишь терминал

**CLI** (Command Line Interface) — программы, которыми управляют **командами** (`firecrawl`, `git`, `gh`), а не кнопками.

**Терминал** — окно с приглашением вроде `$`. OpenCode сам — программа терминала: открой папку проекта в терминале и запусти `opencode`.

**Как это связано с курсом:**
- MCP-серверы добавляются командой `opencode mcp add` или строкой в конфиге `opencode.jsonc`.
- Плагины — ставятся командой (например, `npx oh-my-opencode-slim@latest install` — оркестрация из М11).
- Агент — AI **сам** пишет команды в терминал; ты смотришь результат.

**Практика (2 мин):** в чате агента: «Покажи текущую папку проекта и объясни, что делает команда ls.»  
Не запускай сама, если не уверен:а — попроси AI объяснить перед подтверждением.

---

## Уровень 1: Минимум (15 мин)

### Firecrawl (research)

1. Получи бесплатный API-ключ на [firecrawl.dev](https://firecrawl.dev)
2. Попроси агента: «подключи Firecrawl MCP» — или добавь через `opencode mcp add` (команда — в документации Firecrawl)
3. Вставь ключ в конфиг сервера (`opencode.jsonc`, поле `environment`)
4. **Проверка:** «Найди в интернете 3 статьи про [твоя тема]»

### Figma (design)

1. Попроси агента: «подключи Figma MCP» (установка — в документации Figma MCP)
2. При первом использовании — авторизация через Figma
3. **Проверка:** «Покажи структуру слайдов в файле [твой Figma URL]»

---

## Уровень 2: Расширенный (+30 мин)

### Context7 (документация)

1. Подключи: `opencode mcp add context7 --url https://mcp.context7.com/mcp` (или попроси агента)
2. **Проверка:** «Как установить Firecrawl CLI? Используй Context7.»

### MarkItDown (PDF → текст)

1. Добавь в конфиг `opencode.jsonc` (document-converter MCP):
   ```jsonc
   {
     "mcp": {
       "servers": {
         "document-converter": {
           "type": "local",
           "command": ["uvx", "document-converter-mcp"]
         }
       }
     }
   }
   ```
   *(Точная команда — в [документации](https://github.com/Zahid-Abbas-Ali-Baig/document-converter))*
2. **Проверка:** положи PDF в проект → «Прочитай этот PDF и перескажи главное»

### Obsidian MCP Connector

1. Установи [Obsidian](https://obsidian.md)
2. Obsidian → Community plugins → **MCP Connector** → Install → Enable
3. Скопируй конфиг коннектора и добавь его как MCP-сервер в `opencode.jsonc` (или попроси агента: «перенеси конфиг Obsidian MCP в OpenCode»)
4. **Проверка:** «Создай заметку "Тест MCP" в моём vault»

### Plannotator

1. Скачай с [github.com/backnotprop/plannotator/releases](https://github.com/backnotprop/plannotator/releases)
2. Settings → Obsidian Integration → Enable → выбери vault
3. **Проверка:** одобри тестовый план → проверь файл в Obsidian

### Chrome DevTools

1. Попроси агента: «подключи Chrome DevTools MCP» (или `opencode mcp add` с командой из документации)
2. Документация: поиск «chrome devtools mcp»
3. **Проверка:** открой HTML-страницу → «Проверь, почему элемент не по центру»

---

## 3 практические задачи

### Задача A: Research

**Промпт:** «Найди 3 источника про [тренд в твоей области]. Дай ссылки и краткий вывод.»

**Инструмент:** Firecrawl MCP или Browser MCP

- [ ] AI вызвал:а tool (не только текст)?
- [ ] Есть ссылки?
- [ ] Ты проверил:а 1 источник вручную?

### Задача B: Design

**Промпт:** «Создай один слайд "Тест MCP" в моём Figma Slides» *(или опиши макет)*

**Инструмент:** Figma MCP

- [ ] Результат появился в Figma или описан чётко?
- [ ] Можешь открыть и посмотреть?

### Задача C: План в Obsidian

**Промпт:** «Составь план из 3 шагов для [моя задача]. Сохрани в Obsidian.»

**Инструмент:** Obsidian MCP (+ Plannotator если настроен)

- [ ] Заметка появилась в vault?
- [ ] Можешь найти её через поиск в Obsidian?

---

## Troubleshooting

| Проблема | Решение |
|----------|---------|
| MCP не виден | Перезапусти `opencode`; проверь `opencode mcp list` |
| Firecrawl ошибка API | Проверь ключ; лимиты бесплатного плана |
| Figma не авторизуется | Выйди и войди снова в Figma account |
| Obsidian MCP не подключается | Plugin включён? Vault открыт? Конфиг добавлен в `opencode.jsonc`? |

---

## Чеклист установки

| MCP / Plugin | Установлен | Проверен |
|--------------|------------|----------|
| Firecrawl | ☐ | ☐ |
| Figma | ☐ | ☐ |
| Context7 | ☐ | ☐ |
| MarkItDown | ☐ | ☐ |
| Obsidian MCP | ☐ | ☐ |
| Plannotator | ☐ | ☐ |
| Chrome DevTools | ☐ | ☐ |
