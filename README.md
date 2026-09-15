# Мини-курс «AI от основ до harness и loop engineering»

Простой курс для не-программителей: от «что такое LLM» до настройки MCP, loop engineering, RAG и прототипов в вёрстке.

**Время:** ~12 часов · **Модулей:** 9 + capstone + блок основ разработки (9)

**Что разберёшь:**
- **Основы разработки** (блок «Как устроена разработка») — фронтенд/бекенд/API/БД, терминал и окружение, HTTP/JSON/DevTools, SQL и миграции, Git, отладка, безопасность и секреты, деплой и продакшен, работа с кодинг-агентом
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

## Блок «Как устроена разработка» (Ф1–Ф9)

Отдельный большой блок основ для тех, кто хочет понимать, **из чего состоит приложение** и **как разговаривать с разработкой и кодинг-агентом на одном языке**. Уровень — ELI5: каждая тема через бытовую аналогию. Можно проходить до основного курса, между модулями или отдельно.

| № | Модуль | Время | Материалы |
|---|--------|-------|-----------|
| Ф1 | [Как устроено приложение: фронтенд, бекенд, API и база данных](fundamentals/01-web-app-anatomy/lesson.md) | 35 мин | [quiz](fundamentals/01-web-app-anatomy/quiz.md) |
| Ф2 | [Терминал, файлы, зависимости и переменные окружения](fundamentals/02-terminal-files-env/lesson.md) | 35 мин | [quiz](fundamentals/02-terminal-files-env/quiz.md) |
| Ф3 | [HTTP, JSON, DevTools: как работает API](fundamentals/03-http-json-devtools/lesson.md) | 35 мин | [quiz](fundamentals/03-http-json-devtools/quiz.md) |
| Ф4 | [SQL, связи в базе данных, схемы и миграции](fundamentals/04-sql-schema-migrations/lesson.md) | 35 мин | [quiz](fundamentals/04-sql-schema-migrations/quiz.md) |
| Ф5 | [Git: коммиты, diff, ветки, remote и безопасный откат](fundamentals/05-git-safety/lesson.md) | 40 мин | [quiz](fundamentals/05-git-safety/quiz.md) |
| Ф6 | [Stack trace, логи и системная отладка ошибок](fundamentals/06-debugging/lesson.md) | 35 мин | [quiz](fundamentals/06-debugging/quiz.md) |
| Ф7 | [Основы безопасности и работа с секретами](fundamentals/07-security-secrets/lesson.md) | 35 мин | [quiz](fundamentals/07-security-secrets/quiz.md) |
| Ф8 | [Деплой, продакшен, мониторинг и бэкапы](fundamentals/08-deploy-production/lesson.md) | 35 мин | [quiz](fundamentals/08-deploy-production/quiz.md) |
| Ф9 | [Как ставить задачи кодинг-агенту и проверять его результат](fundamentals/09-coding-agent-tasks/lesson.md) | 40 мин | [quiz](fundamentals/09-coding-agent-tasks/quiz.md) |

**Логика блока:** Ф1–Ф3 — из чего состоит приложение и как его части общаются; Ф4–Ф6 — данные, версионирование и отладка; Ф7–Ф9 — безопасность, продакшен и работа с кодинг-агентом (финал блока, мостик к М4).

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
├── fundamentals/      ← блок «Как устроена разработка» (Ф1–Ф9)
└── exercises/         ← брифы и чеклисты
```
