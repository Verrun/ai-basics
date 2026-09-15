# Мини-курс «AI от основ до harness и loop engineering»

Простой курс для не-программистов: от «что такое LLM» до настройки MCP, loop engineering, RAG и прототипов в вёрстке.

**Время:** ~7 часов · **Модулей:** 9 + capstone

**Что разберёшь:**
- **Harness и MCP** — как AI подключается к Figma, браузеру, Obsidian
- **CLI** — текстовые команды в терминале (М3b); учить синтаксис не нужно, Agent запускает их за тебя
- **Loop engineering** — циклы «сделал → проверил → поправил»
- **Поиск в интернете** (М6) — Perplexity, Firecrawl, fact-check
- **RAG-поиск** (М6b) — ответы по *твоим* документам; локальные эмбеддинги **e5-small**; проверка поиска через **golden set**
- **Прототипы** — HTML-лендинг или слайд без изучения кода

---

## Как проходить курс

1. Читай `lesson.md` модуля (15–20 мин).
2. Делай практику из урока (20–30 мин).
3. Пройди `quiz.md` — нужно ≥80%.

Каждый модуль: **термин → аналогия → пример**. Точные названия важны — их найдёшь в [glossary.md](glossary.md).

---

## Программа

| № | Модуль | Время | Материалы |
|---|--------|-------|-----------|
| 0 | [Введение](modules/00-intro/lesson.md) | 20 мин | [quiz](modules/00-intro/quiz.md) |
| 1 | [Что такое AI](modules/01-basics/lesson.md) | 45 мин | [quiz](modules/01-basics/quiz.md) |
| 2 | [Модели и промпты](modules/02-models-and-prompts/lesson.md) | 50 мин | [quiz](modules/02-models-and-prompts/quiz.md) |
| 3 | [Harness](modules/03-harness/lesson.md) | 40 мин | [quiz](modules/03-harness/quiz.md) |
| 3b | [MCP и плагины](modules/03b-mcp-and-plugins/lesson.md) | 50 мин | [quiz](modules/03b-mcp-and-plugins/quiz.md) |
| 4 | [Loop engineering](modules/04-loop-engineering/lesson.md) | 55 мин | [quiz](modules/04-loop-engineering/quiz.md) |
| 5 | [Прототипы в вёрстке](modules/05-prototypes/lesson.md) | 60 мин | [quiz](modules/05-prototypes/quiz.md) |
| 6 | [Поиск в интернете](modules/06-web-research/lesson.md) | 50 мин | [quiz](modules/06-web-research/quiz.md) |
| 6b | [RAG-поиск](modules/06b-rag/lesson.md) | 50 мин | [quiz](modules/06b-rag/quiz.md) |
| 7 | [Capstone + финал](modules/07-capstone/lesson.md) | 60 мин | [quiz](modules/07-capstone/quiz.md) |

**М6 vs М6b:** интернет — сайты снаружи; RAG — твои PDF, заметки, база знаний. Оба модуля с fact-check.

---

## Практические материалы

| Файл | Для какого модуля |
|------|-------------------|
| [prompt-template.md](exercises/prompt-template.md) | М2 |
| [harness-checklist.md](exercises/harness-checklist.md) | М3 |
| [mcp-setup-guide.md](exercises/mcp-setup-guide.md) | М3b |
| [loop-scenario.md](exercises/loop-scenario.md) | М4 |
| [prototype-brief.md](exercises/prototype-brief.md) | М5 |
| [research-brief.md](exercises/research-brief.md) | М6 |
| [github-tools-list.md](exercises/github-tools-list.md) | М6 |
| [rag-brief.md](exercises/rag-brief.md) | М6b |

---

## Что понадобится

- Браузер (Chrome или аналог)
- [Cursor](https://cursor.com) — для практики с MCP
- Аккаунты по желанию: ChatGPT / Claude / Perplexity, Firecrawl API
- [Obsidian](https://obsidian.md) — для модуля MCP (Obsidian-стек)

---

## Структура репозитория

```
ai/
├── README.md          ← ты здесь
├── glossary.md        ← термины (LLM, MCP, CLI, RAG, …)
├── figma/             ← план слайдов (без публичных ссылок)
├── modules/           ← уроки и тесты (00–07, 03b, 06b)
└── exercises/         ← брифы и чеклисты
```
