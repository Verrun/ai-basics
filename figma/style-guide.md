# Style Guide — презентация курса

## Design file (основной)

**Страница:** Ai-basics · **Шаблон:** BB / 1.1 Что это (`561:29`)

### Макет слайда (1440×800)

| Зона | Стиль |
|------|--------|
| Sidebar | bg ghost `#f0f0fa`, Factor IO Bold 18px / 25px |
| Активная секция | `#702ff4` |
| Неактивная секция | `#020222` |
| Content bg | white |
| Заголовок | Factor IO Bold 40px / 48px |
| Тело | Factor IO Regular 18px / 24px, две колонки |
| Скругление | 40px |

**Секции в sidebar:** Intro · Basics · Models · Harness · MCP · Loops · Prototypes · Research · Capstone

**Сборка:** [build-scripts/build-design.js](build-scripts/build-design.js) — клон шаблона + контент из `slides-plan.md`

---

## Slides file (legacy)

**Сборка:** [build-scripts/build-all.js](build-scripts/build-all.js)

| Элемент | Style |
|---------|--------|
| Фон | `#020222` (`slide.fills`) |
| Заголовок | Header 2 — Montserrat Bold 48px / 140% |
| Текст | Body 1 — Montserrat Regular 36px / 120%, переменная White |
| Шильдик | `#2DD4BF` |
