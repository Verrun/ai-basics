# Figma Build Instructions

Скрипты сборки презентации (файлы Figma — внутренние, не публикуются в репозитории).

## Текущий статус (28.08.2026)

- **16/56 слайдов** уже созданы: секции Intro, Basics, Models (с контентом и Montserrat).
- Если в UI пусто, но в Layers есть слайды — сначала запусти `sync-grid.js` (см. ниже).
- Остальные 40 слайдов (Harness → Capstone) — после сброса лимита Figma MCP или повторным запуском `build-all.js`.

## Быстрый старт

1. Открой **Figma Desktop** и нужный файл Slides (fileKey в `build-all.js`).
2. В Cursor (Agent mode) скажи:

```
Выполни use_figma для fileKey HlZmQbpsh71153lQEtXvmx
с кодом из figma/build-scripts/build-all.js (строки 4+)
```

3. Скрипт создаст **56 слайдов** в 9 секциях с Montserrat и speaker notes.

## Если UI пустой, а Layers — нет

Запусти синхронизацию grid:

```
use_figma fileKey HlZmQbpsh71153lQEtXvmx
код из figma/build-scripts/sync-grid.js
```

## Если в файле дубли

**Не запускай скрипты удаления слайдов** — они ломали grid. Удали лишнее вручную в Figma, затем `build-all.js`.

## Альтернатива: ручная сборка

Используй [slides-plan.md](slides-plan.md) как текстовый сценарий и [style-guide.md](style-guide.md) для оформления.

---

## Секции (9 × 56 слайдов)

| № | Секция | Слайдов |
|---|--------|---------|
| 1 | Intro | 3 |
| 2 | Basics | 6 |
| 3 | Models | 7 |
| 4 | Harness | 5 |
| 5 | MCP | 7 |
| 6 | Loops | 7 |
| 7 | Prototypes | 7 |
| 8 | Research | 6 |
| 9 | Capstone | 8 |

**Скрипт:** [build-scripts/build-all.js](build-scripts/build-all.js)
