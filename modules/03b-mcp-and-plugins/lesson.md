# М3b. MCP и плагины Cursor

## За 2 минуты

**MCP** — «разъём», через который AI подключается к сервисам. **Plugin** — установка в один клик. Для research, design и знаний — свой набор MCP.

---

## Объяснение

### MCP (Model Context Protocol)

**Термин:** MCP — стандарт подключения AI к внешним сервисам.  
**Аналогия:** *USB-порт — один формат, много устройств.*

Без MCP AI только генерирует текст. С MCP — ищет в интернете, читает Figma, работает с Obsidian.

### Plugin vs MCP

| | MCP | Plugin |
|--|-----|--------|
| Что | Протокол (разъём) | Надстройка в Marketplace |
| Аналогия | Кабель | Прибор с кабелем |
| Настройка | Settings → MCP | Settings → Plugins → Install |

Часто plugin уже включает MCP.

### Research: поиск в интернете

| Инструмент | Зачем | Приоритет |
|------------|-------|-----------|
| **Firecrawl** | Поиск, скрейп, crawl | Обязательно |
| **Tavily** | Быстрый web search | Рекомендуется |
| **Browser** (cursor-ide-browser) | AI читает страницу сам | Рекомендуется |
| **MarkItDown** | PDF/Word → текст для AI | Рекомендуется |
| **Context7** | Актуальная документация | Рекомендуется |
| **Exa** | Семантический поиск | По желанию |

*Perplexity — отдельный сервис (браузер), не MCP.*

### Design: прототипы и вёрстка

| Инструмент | Зачем | Приоритет |
|------------|-------|-----------|
| **Figma** | Макеты и слайды из Cursor | Обязательно |
| **Chrome DevTools** | AI-инспектор живой страницы | Рекомендуется |
| **MagicPath** | Быстрые UI-макеты | По желанию |

### Obsidian-стек: знания и планы

| Инструмент | Зачем |
|------------|-------|
| **Obsidian MCP** | AI читает/пишет заметки в vault |
| **Plannotator** | Review планов → сохранение в Obsidian |
| **MarkItDown** | Документы в базу знаний |

**Связка:** Plannotator → план в Obsidian → MarkItDown добавляет PDF → AI ищет по vault.

### Установка (упрощённо)

1. **Plugins:** Cursor → Settings → Plugins → Firecrawl, Figma, Context7, Obsidian MCP Connector → Install
2. **MCP вручную:** Settings → MCP → Add server (MarkItDown, Chrome DevTools, Plannotator)
3. **Plannotator + Obsidian:** Plannotator → Settings → Obsidian Integration → выбрать vault
4. **Проверка:** Agent mode → «какие MCP подключены?»

### Безопасность

- Не подключай MCP с доступом к почте/банку без нужды
- API-ключи — только в настройках, не в промптах
- Читай, какие права запрашивает plugin

---

## Практика

Пройди [exercises/mcp-setup-guide.md](../../exercises/mcp-setup-guide.md):

- **Минимум:** Firecrawl + Figma
- **Расширенный:** + Context7, MarkItDown, Obsidian, Plannotator, Chrome DevTools
- **3 задачи:** research, design, «сохрани план в Obsidian»

---

## Частые ошибки

1. **Ставить все MCP сразу** — начни с минимума, добавляй по задаче.
2. **Путать Perplexity и Firecrawl MCP** — Perplexity отдельный сайт; Firecrawl — внутри Cursor.
3. **Не проверять подключение** — после установки задай тестовую задачу.

---

## Что дальше

→ [quiz.md](quiz.md)  
→ [М4. Loop engineering](../04-loop-engineering/lesson.md)
