// Run via use_figma — Design file (NOT Slides)
// fileKey: gUc33KUiKQsXn47lpMXYwt
// Page: Ai-basics
// Template: 561:29 (BB / 1.1 Что это)

const TEMPLATE_ID = "561:29";
const SLIDE_W = 1440;
const SLIDE_H = 800;
const GAP_X = 120;
const GAP_Y = 100;
const COLS = 4;

const SECTION_NAMES = [
  "Intro", "Basics", "Models", "Harness", "MCP",
  "Loops", "Prototypes", "Research", "Capstone",
];

const C = {
  active: { r: 0x70 / 255, g: 0x2f / 255, b: 0xf4 / 255 },
  text: { r: 0x02 / 255, g: 0x02 / 255, b: 0x22 / 255 },
};

// Pass batch: { start: 0, end: 15 } for partial builds; omit for all
const BATCH = typeof __batch === "undefined" ? null : __batch;

const SECTIONS = [
  { name: "Intro", slides: [
    { id: "S01", type: "title", title: "AI от основ до harness\nи loop engineering", sub: "Мини-курс для не-программистов · ~6,5 часов" },
    { id: "S02", title: "Что внутри курса", bullets: ["Основы AI и промпты", "Harness, MCP, Loop engineering", "Прототипы в вёрстке и поиск в интернете", "Итоговый проект — capstone"] },
    { id: "S03", title: "Как проходить курс", bullets: ["Урок → практика → тест (≥80%)", "Презентация + markdown в репозитории", "Cursor + MCP для практики", "Код учить не нужно — HTML это результат AI"] },
  ]},
  { name: "Basics", slides: [
    { id: "S04", title: "Что такое LLM", term: "LLM — Large Language Model", analogy: "очень умное автодополнение", bullets: ["Предсказывает следующее слово", "Не «знает факты» — собирает правдоподобный текст", "ChatGPT, Claude, Gemini — все LLM"] },
    { id: "S05", title: "Когда AI помогает", bullets: ["Тексты, идеи, черновики", "Перевод и пересказ", "Структурирование информации", "Прототипы и исследования"] },
    { id: "S06", title: "Лимиты AI", bullets: ["Гарантировать правду нельзя — галлюцинации", "Не знает события после даты обучения", "Не берёт ответственность за решения"] },
    { id: "S07", title: "Галлюцинации", term: "Галлюцинация", analogy: "уверенный собеседник, который выдумывает цитату", bullets: ["AI может назвать несуществующий факт", "Звучит убедительно — это опасно", "Решение: проверять по источникам"] },
    { id: "S08", title: "Безопасность данных", bullets: ["Не вставляй пароли и персональные данные", "Корпоративные секреты — только в разрешённых инструментах", "Читай политику сервиса"] },
    { id: "S09", title: "Попробуй сама — практика М1", bullets: ["3 вопроса AI: факт / творчество / «не знаю»", "Сравни уверенность ответов", "Отметь, где нужна проверка"] },
  ]},
  { name: "Models", slides: [
    { id: "S10", title: "Одна модель — не для всего", bullets: ["У каждой модели — свои сильные стороны", "Perplexity для фактов, Claude для длинных текстов", "Можно комбинировать модели под задачу"] },
    { id: "S11", title: "ChatGPT · Claude · Gemini · Perplexity", bullets: ["ChatGPT — универсал, экосистема", "Claude — длинные тексты, анализ", "Gemini — Google-сервисы", "Perplexity — ответ + ссылки на источники"] },
    { id: "S12", title: "GLM · Kimi · Grok", bullets: ["GLM — код, китайский контекст", "Kimi — очень длинные документы и PDF", "Grok — тренды, X/Twitter"] },
    { id: "S13", title: "Хороший промпт = 5 частей", bullets: ["Роль → Задача → Контекст → Формат → Ограничения", "Чем точнее — тем лучше результат"] },
    { id: "S14", title: "Слабый vs сильный промпт", bullets: ["Слабый: «Напиши пост про кофе»", "Сильный: «Ты SMM. Пост для Instagram про кофейню. 100 слов, дружелюбный тон, призыв зайти»", "Разница — конкретность и контекст"] },
    { id: "S15", title: "Упражнение — практика М2", bullets: ["Перепиши слабый промпт по шаблону", "Задай один вопрос двум моделям", "Сравни ответы"] },
    { id: "S16", title: "Проверь себя — Quiz М2", bullets: ["Выбери модель под сценарий", "Найди ошибки в промпте", "Порог прохождения: ≥80%"] },
  ]},
  { name: "Harness", slides: [
    { id: "S17", title: "Что такое Harness", term: "Harness", analogy: "коробка с инструментами и правилами вокруг AI", bullets: ["Модель + инструменты + правила + лимиты", "Без harness — один ответ и всё", "С harness — AI действует в системе"] },
    { id: "S18", title: "Из чего состоит Harness", bullets: ["Инструменты — файлы, браузер, поиск (MCP)", "Правила — что можно и нельзя", "Песочница — безопасная зона", "Лог — что AI делал"] },
    { id: "S19", title: "Примеры Harness без кода", bullets: ["AI + калькулятор — точные цифры", "AI + файлы — читает документы", "AI только читает, не пишет"] },
    { id: "S20", title: "Cursor: Agent · Rules · Skills", bullets: ["Agent mode — AI сам выбирает действия", "Rules — постоянные инструкции", "Skills — чеклисты для задач"] },
    { id: "S21", title: "Заполни чеклист — практика М3", bullets: ["exercises/harness-checklist.md", "Определи инструменты, правила, лимиты для своей задачи"] },
  ]},
  { name: "MCP", slides: [
    { id: "S22", title: "Что такое MCP", term: "MCP — Model Context Protocol", analogy: "USB-порт для AI — один формат, много устройств", bullets: ["Стандарт подключения AI к сервисам", "Поиск, Figma, браузер, Obsidian"] },
    { id: "S23", title: "MCP vs Plugin", bullets: ["MCP = разъём · Plugin = прибор с кабелем", "Plugin ставится в один клик", "MCP настраивается в Settings → MCP"] },
    { id: "S24", title: "MCP для Research", bullets: ["Firecrawl — поиск и скрейп (обязательно)", "MarkItDown — PDF → текст", "Context7 — актуальная документация", "Tavily, Browser — дополнительно"] },
    { id: "S25", title: "MCP для Design", bullets: ["Figma — макеты и слайды (обязательно)", "Chrome DevTools — проверка вёрстки", "MagicPath — быстрые UI-макеты"] },
    { id: "S26", title: "Obsidian-стек", bullets: ["Obsidian MCP — AI работает с заметками", "Plannotator — review планов → Obsidian", "MarkItDown — документы в базу знаний"] },
    { id: "S27", title: "Как подключить MCP", bullets: ["Plugins: Firecrawl, Figma, Context7, Obsidian", "MCP вручную: MarkItDown, Chrome DevTools, Plannotator", "Проверка: «какие MCP подключены?»"] },
    { id: "S28", title: "Практика М3b", bullets: ["Минимум: Firecrawl + Figma", "Расширенный: + Context7, MarkItDown, Obsidian, Plannotator", "3 задачи: research, design, план в Obsidian"] },
  ]},
  { name: "Loops", slides: [
    { id: "S29", title: "Что такое Loop", term: "Loop", analogy: "повар пробует → добавляет → пробует снова", bullets: ["Подумал → Сделал → Посмотрел → Решил", "Не один ответ — цикл до готовности"] },
    { id: "S30", title: "Loop engineering", term: "Loop engineering", analogy: "правила игры: сколько попыток, кто проверяет", bullets: ["Когда продолжать", "Когда остановиться", "Как проверить результат"] },
    { id: "S31", title: "ReAct — Reason + Act", bullets: ["Reason — AI думает", "Act — AI действует (tool call)", "Observe — смотрит результат", "Repeat — повторяет или стоп"] },
    { id: "S32", title: "Maker / Checker", bullets: ["Maker — создаёт результат", "Checker — проверяет по фактам", "Не «мне кажется готово» — независимая проверка"] },
    { id: "S33", title: "Когда остановиться", bullets: ["Max попыток (например, 5)", "Стоп-условие: «найдено 3 источника»", "Эскалация к человеку"] },
    { id: "S34", title: "Loop в Cursor", bullets: ["/loop 5m проверь статус — AI возвращается через 5 мин", "Automations — повторяющиеся задачи"] },
    { id: "S35", title: "Практика М4", bullets: ["exercises/loop-scenario.md", "4 шага с точкой проверки"] },
  ]},
  { name: "Prototypes", slides: [
    { id: "S36", title: "Pipeline прототипа", bullets: ["Текстовое ТЗ → AI → HTML-страница", "Открываешь в браузере — видишь результат", "Итерируешь: «крупнее заголовок»"] },
    { id: "S37", title: "Cursor · Figma · v0 · Chrome DevTools", bullets: ["Cursor — описала → получила файл", "Figma MCP — слайды и макеты", "v0/Lovable — no-code прототип", "Chrome DevTools — проверка вёрстки"] },
    { id: "S38", title: "Что просить у AI — хорошее ТЗ", bullets: ["Одна страница, мобильная", "Кнопка X, цвета Y", "Конкретные секции: hero, features, footer"] },
    { id: "S39", title: "Улучшаем прототип", bullets: ["«Крупнее заголовок»", "«Добавь секцию с отзывами»", "«Сделай кнопку зелёной»", "Каждая итерация — один запрос"] },
    { id: "S40", title: "HTML — результат, не язык", bullets: ["AI создаёт index.html", "Ты открываешь в Chrome", "Смотришь, правишь через промпт", "HTML/CSS — не предмет изучения в курсе"] },
    { id: "S41", title: "Лендинг за 30 мин — практика М5", bullets: ["exercises/prototype-brief.md", "Вымышленный продукт", "Открыть index.html в браузере"] },
    { id: "S42", title: "Chrome DevTools MCP", bullets: ["«Проверь, почему кнопка не по центру»", "AI смотрит CSS на живой странице", "Исправляет и показывает diff"] },
  ]},
  { name: "Research", slides: [
    { id: "S43", title: "Когда AI-поиск лучше Google", bullets: ["Perplexity: ответ + ссылки сразу", "Google: список ссылок, сама читаешь", "Для фактов и исследований — Perplexity"] },
    { id: "S44", title: "Firecrawl · MarkItDown · Browser", bullets: ["Firecrawl — «найди и собери с N сайтов»", "MarkItDown — PDF/статья → текст для AI", "Browser MCP — AI читает страницу сам"] },
    { id: "S45", title: "Open-source для research", bullets: ["GPT Researcher, Perplexica, Jina Reader", "Как искать: awesome ai search", "Смотри: stars, дата коммита, README"] },
    { id: "S46", title: "Проверка источников", bullets: ["2 независимых источника", "Дата и автор", "Совпадение фактов"] },
    { id: "S47", title: "Бенчмарк 3 инструментов — практика М6", bullets: ["Одна тема", "Perplexity + Firecrawl + Browser MCP", "Таблица: источник / дата / вывод"] },
    { id: "S48", title: "Quiz М6", bullets: ["Выбери инструмент под задачу", "Найди ошибки в «ответах AI»", "Порог: ≥80%"] },
  ]},
  { name: "Capstone", slides: [
    { id: "S49", type: "title", title: "Что ты теперь умеешь", sub: "Итог курса" },
    { id: "S50", title: "Мини-продукт за 1 час", bullets: ["15 мин — research аудитории", "25 мин — HTML-прототип или слайд", "15 мин — loop: проверка + итерация", "15 мин — финальный тест"] },
    { id: "S51", title: "Шаг 1: Research (15 мин)", bullets: ["Firecrawl MCP или Perplexity", "Кто аудитория, что им нужно", "3–5 фактов с источниками"] },
    { id: "S52", title: "Шаг 2: Прототип (25 мин)", bullets: ["Cursor + Figma MCP", "Лендинг или слайд презентации", "Открыть и посмотреть результат"] },
    { id: "S53", title: "Шаг 3: Loop (15 мин)", bullets: ["Чеклист: факты, вёрстка, текст", "1 итерация правок", "Maker/checker: ты — checker"] },
    { id: "S54", title: "Финальный тест", bullets: ["15 вопросов + эссе", "Все модули курса", "MCP vs plugin, выбор инструмента", "Эссе: «объясни harness, MCP и loop бабушке»"] },
    { id: "S55", type: "title", title: "Курс пройден", sub: "Продолжай практиковать · glossary.md" },
    { id: "S56", title: "Куда дальше", bullets: ["README.md — оглавление", "exercises/ — брифы и чеклисты", "Cursor Docs, MCP Registry", "Курс — старт, не финал"] },
  ]},
];

const template = figma.getNodeById(TEMPLATE_ID);
if (!template) throw new Error("Template " + TEMPLATE_ID + " not found");

const templateTexts = template.findAllWithCriteria({ types: ["TEXT"] });
const fontSet = new Set();
for (const t of templateTexts) {
  if (t.fontName !== figma.mixed) fontSet.add(JSON.stringify(t.fontName));
  else for (const s of t.getStyledTextSegments(["fontName"])) fontSet.add(JSON.stringify(s.fontName));
}
for (const f of fontSet) await figma.loadFontAsync(JSON.parse(f));

await figma.setCurrentPageAsync(figma.root.children.find(p => p.name === "Ai-basics"));

function flatSlides() {
  const out = [];
  SECTIONS.forEach((sec, si) => sec.slides.forEach(d => out.push({ ...d, sectionIndex: si, sectionName: sec.name })));
  return out;
}

function bodyLines(d) {
  const lines = [];
  if (d.term) lines.push(d.term);
  if (d.analogy) lines.push(d.analogy);
  (d.bullets || []).forEach(b => lines.push("•  " + b));
  return lines;
}

async function setText(node, text) {
  if (node.fontName !== figma.mixed) await figma.loadFontAsync(node.fontName);
  else for (const s of node.getStyledTextSegments(["fontName"])) await figma.loadFontAsync(s.fontName);
  node.characters = text;
}

function ensureSidebarItems(sidebar, sampleToc) {
  let items = sidebar.findAll(n => n.name === "toc" && n.type === "TEXT");
  while (items.length < SECTION_NAMES.length) {
    const clone = items[items.length - 1].clone();
    sidebar.appendChild(clone);
    items = sidebar.findAll(n => n.name === "toc" && n.type === "TEXT");
  }
  return items;
}

async function buildSlide(d, globalIndex) {
  const col = globalIndex % COLS;
  const row = Math.floor(globalIndex / COLS);
  const frame = template.clone();
  frame.name = d.id;
  frame.x = col * (SLIDE_W + GAP_X);
  frame.y = row * (SLIDE_H + GAP_Y);
  figma.currentPage.appendChild(frame);

  const sidebar = frame.findOne(n => n.name === "Sidebar");
  const content = frame.findOne(n => n.name === "Content");
  const titleNode = content.findOne(n => n.name === "Title");
  const columns = content.findOne(n => n.name === "Columns");
  const colA = columns.findOne(n => n.name === "Col A");
  const colB = columns.findOne(n => n.name === "Col B");

  const tocItems = ensureSidebarItems(sidebar, null);
  for (let i = 0; i < SECTION_NAMES.length; i++) {
    const item = tocItems[i];
    await setText(item, SECTION_NAMES[i]);
    item.fills = [{ type: "SOLID", color: i === d.sectionIndex ? C.active : C.text }];
  }

  if (d.type === "title") {
    await setText(titleNode, d.title.replace(/\n/g, " "));
    await setText(colA, d.sub || "");
    await setText(colB, "");
  } else {
    await setText(titleNode, d.title);
    const lines = bodyLines(d);
    const mid = Math.ceil(lines.length / 2);
    await setText(colA, lines.slice(0, mid).join("\n\n"));
    await setText(colB, lines.slice(mid).join("\n\n"));
  }

  return frame.id;
}

const all = flatSlides();
const start = BATCH ? BATCH.start : 0;
const end = BATCH ? BATCH.end : all.length;
const ids = [];
for (let i = start; i < end; i++) ids.push(await buildSlide(all[i], i));

return { built: ids.length, range: [start, end], total: all.length, page: figma.currentPage.name, ids };
