# MCP Setup Guide

Пошаговая установка MCP и плагинов в Cursor (модуль **М3b**).

---

## Уровень 1: Минимум (15 мин)

### Firecrawl (research)

1. Cursor → **Settings** → **Plugins** (или Marketplace)
2. Найди **Firecrawl** → **Install**
3. Если нужен API key: зарегистрируйся на [firecrawl.dev](https://firecrawl.dev) → скопируй ключ в настройки plugin
4. **Проверка:** Agent mode → «Найди в интернете 3 статьи про [твоя тема]»

### Figma (design)

1. Settings → Plugins → **Figma** → Install
2. При первом использовании — авторизация через Figma
3. **Проверка:** «Покажи структуру слайдов в файле [твой Figma URL]»

---

## Уровень 2: Расширенный (+30 мин)

### Context7 (документация)

1. Settings → Plugins → **Context7** → Install
2. **Проверка:** «Как установить Firecrawl CLI? Используй Context7.»

### MarkItDown (PDF → текст)

1. Settings → **MCP** → Add server
2. Конфиг (document-converter MCP):
   ```json
   {
     "mcpServers": {
       "document-converter": {
         "command": "uvx",
         "args": ["document-converter-mcp"]
       }
     }
   }
   ```
   *(Точная команда — в [документации](https://github.com/Zahid-Abbas-Ali-Baig/document-converter))*
3. **Проверка:** положи PDF в проект → «Прочитай этот PDF и перескажи главное»

### Obsidian MCP Connector

1. Установи [Obsidian](https://obsidian.md)
2. Obsidian → Community plugins → **MCP Connector** → Install → Enable
3. Settings → MCP Connector → Copy config → вставь в Cursor MCP settings
4. **Проверка:** «Создай заметку "Тест MCP" в моём vault»

### Plannotator

1. Скачай с [github.com/backnotprop/plannotator/releases](https://github.com/backnotprop/plannotator/releases)
2. Settings → Obsidian Integration → Enable → выбери vault
3. **Проверка:** одобри тестовый план → проверь файл в Obsidian

### Chrome DevTools

1. Settings → MCP → Add server (Chrome DevTools MCP)
2. Документация: поиск «chrome devtools mcp cursor»
3. **Проверка:** открой HTML-страницу → «Проверь, почему элемент не по центру»

---

## 3 практические задачи

### Задача A: Research

**Промпт:** «Найди 3 источника про [тренд в твоей области]. Дай ссылки и краткий вывод.»

**Инструмент:** Firecrawl MCP или Browser MCP

- [ ] AI вызвал tool (не только текст)?
- [ ] Есть ссылки?
- [ ] Ты проверила 1 источник вручную?

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
| MCP не виден | Перезапусти Cursor; проверь Settings → MCP |
| Firecrawl ошибка API | Проверь ключ; лимиты бесплатного плана |
| Figma не авторизуется | Выйди и войди снова в Figma account |
| Obsidian MCP не подключается | Plugin включён? Vault открыт? Config скопирован? |

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
