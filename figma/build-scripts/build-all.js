// Run via Cursor: use_figma with this file contents
// fileKey: HlZmQbpsh71153lQEtXvmx

await Promise.all([
  figma.loadFontAsync({ family: "Montserrat", style: "Regular" }),
  figma.loadFontAsync({ family: "Montserrat", style: "Bold" }),
]);

const C = {
  bgDark: { r: 0.118, g: 0.227, b: 0.373 },
  bgLight: { r: 0.961, g: 0.969, b: 0.98 },
  accent: { r: 0.176, g: 0.831, b: 0.749 },
  textDark: { r: 0.102, g: 0.102, b: 0.18 },
  textLight: { r: 1, g: 1, b: 1 },
  textMuted: { r: 0.392, g: 0.455, b: 0.545 },
};

function addRect(p, x, y, w, h, c) {
  const n = figma.createRectangle();
  p.appendChild(n);
  n.resize(w, h);
  n.fills = [{ type: "SOLID", color: c }];
  n.x = x; n.y = y;
}

function addText(p, x, y, text, size, style, color, w) {
  const t = figma.createText();
  p.appendChild(t);
  t.fontName = { family: "Montserrat", style };
  t.characters = text;
  t.fontSize = size;
  t.fills = [{ type: "SOLID", color }];
  if (w) { t.resize(w, 800); t.textAutoResize = "HEIGHT"; }
  t.x = x; t.y = y;
}

function titleSlide(slide, title, sub, notes) {
  addRect(slide, 0, 0, 1920, 1080, C.bgDark);
  addRect(slide, 80, 80, 8, 120, C.accent);
  addText(slide, 120, 380, title, 48, "Bold", C.textLight, 1680);
  if (sub) addText(slide, 120, 500, sub, 26, "Regular", C.textMuted, 1600);
  slide.speakerNotes = notes || "";
}

function contentSlide(slide, title, bullets, notes, term, analogy) {
  addRect(slide, 0, 0, 1920, 1080, C.bgLight);
  addRect(slide, 80, 60, 6, 48, C.accent);
  addText(slide, 100, 60, title, 38, "Bold", C.textDark, 1720);
  let y = 150;
  if (term) {
    addText(slide, 100, y, term, 26, "Bold", C.accent, 1720);
    y += 40;
    if (analogy) { addText(slide, 100, y, analogy, 20, "Regular", C.textMuted, 1720); y += 44; }
  }
  (bullets || []).forEach((b, i) => addText(slide, 100, y + i * 48, "•  " + b, 22, "Regular", C.textDark, 1720));
  slide.speakerNotes = notes || "";
}

const SECTIONS = [
  { name: "Intro", slides: [
    { id: "S01", type: "title", title: "AI от основ до harness\nи loop engineering", sub: "Мини-курс для не-программистов · ~6,5 часов", notes: "Добро пожаловать. Курс простым языком — от «что такое LLM» до настройки инструментов и прототипов." },
    { id: "S02", title: "Что внутри курса", bullets: ["Основы AI и промпты", "Harness, MCP, Loop engineering", "Прототипы в вёрстке и поиск в интернете", "Итоговый проект — capstone"], notes: "8 модулей + capstone. Каждый — урок, практика, тест." },
    { id: "S03", title: "Как проходить курс", bullets: ["Урок → практика → тест (≥80%)", "Презентация + markdown в репозитории", "Cursor + MCP для практики", "Код учить не нужно — HTML это результат AI"], notes: "Не нужно учить код. HTML — результат работы AI, не язык для изучения." },
  ]},
  { name: "Basics", slides: [
    { id: "S04", title: "Что такое LLM", term: "LLM — Large Language Model", analogy: "очень умное автодополнение", bullets: ["Предсказывает следующее слово", "Не «знает факты» — собирает правдоподобный текст", "ChatGPT, Claude, Gemini — все LLM"], notes: "Главная мысль: AI не база данных. Он генерирует текст." },
    { id: "S05", title: "Когда AI помогает", bullets: ["Тексты, идеи, черновики", "Перевод и пересказ", "Структурирование информации", "Прототипы и исследования"], notes: "AI — помощник, не замена эксперта." },
    { id: "S06", title: "Лимиты AI", bullets: ["Гарантировать правду нельзя — галлюцинации", "Не знает события после даты обучения", "Не берёт ответственность за решения"], notes: "Всегда проверяй факты." },
    { id: "S07", title: "Галлюцинации", term: "Галлюцинация", analogy: "уверенный собеседник, который выдумывает цитату", bullets: ["AI может назвать несуществующий факт", "Звучит убедительно — это опасно", "Решение: проверять по источникам"], notes: "Пример: выдуманная дата, несуществующая статья." },
    { id: "S08", title: "Безопасность данных", bullets: ["Не вставляй пароли и персональные данные", "Корпоративные секреты — только в разрешённых инструментах", "Читай политику сервиса"], notes: "«Бесплатно» часто означает «данные могут использовать для обучения»." },
    { id: "S09", title: "Попробуй сама — практика М1", bullets: ["3 вопроса AI: факт / творчество / «не знаю»", "Сравни уверенность ответов", "Отметь, где нужна проверка"], notes: "Переход к модулю 2 — модели и промпты." },
  ]},
  { name: "Models", slides: [
    { id: "S10", title: "Одна модель — не для всего", bullets: ["У каждой модели — свои сильные стороны", "Perplexity для фактов, Claude для длинных текстов", "Можно комбинировать модели под задачу"], notes: "Выбор модели — часть навыка работы с AI." },
    { id: "S11", title: "ChatGPT · Claude · Gemini · Perplexity", bullets: ["ChatGPT — универсал, экосистема", "Claude — длинные тексты, анализ", "Gemini — Google-сервисы", "Perplexity — ответ + ссылки на источники"], notes: "Кратко по каждой — когда выбирать." },
    { id: "S12", title: "GLM · Kimi · Grok", bullets: ["GLM — код, китайский контекст", "Kimi — очень длинные документы и PDF", "Grok — тренды, X/Twitter"], notes: "Альтернативы западным моделям." },
    { id: "S13", title: "Хороший промпт = 5 частей", bullets: ["Роль → Задача → Контекст → Формат → Ограничения", "Чем точнее — тем лучше результат"], notes: "Показать пример слабого vs сильного промпта." },
    { id: "S14", title: "Слабый vs сильный промпт", bullets: ["Слабый: «Напиши пост про кофе»", "Сильный: «Ты SMM. Пост для Instagram про кофейню. 100 слов, дружелюбный тон, призыв зайти»", "Разница — конкретность и контекст"], notes: "Разница — конкретность." },
    { id: "S15", title: "Упражнение — практика М2", bullets: ["Перепиши слабый промпт по шаблону", "Задай один вопрос двум моделям", "Сравни ответы"], notes: "Шаблон в exercises/prompt-template.md." },
    { id: "S16", title: "Проверь себя — Quiz М2", bullets: ["Выбери модель под сценарий", "Найди ошибки в промпте", "Порог прохождения: ≥80%"], notes: "quiz.md в modules/02-models-and-prompts/." },
  ]},
  { name: "Harness", slides: [
    { id: "S17", title: "Что такое Harness", term: "Harness", analogy: "коробка с инструментами и правилами вокруг AI", bullets: ["Модель + инструменты + правила + лимиты", "Без harness — один ответ и всё", "С harness — AI действует в системе"], notes: "Harness — не промпт. Это инфраструктура." },
    { id: "S18", title: "Из чего состоит Harness", bullets: ["Инструменты — файлы, браузер, поиск (MCP)", "Правила — что можно и нельзя", "Песочница — безопасная зона", "Лог — что AI делал"], notes: "Схема: модель → harness → действие." },
    { id: "S19", title: "Примеры Harness без кода", bullets: ["AI + калькулятор — точные цифры", "AI + файлы — читает документы", "AI только читает, не пишет"], notes: "Harness решает, какие «руки» у AI." },
    { id: "S20", title: "Cursor: Agent · Rules · Skills", bullets: ["Agent mode — AI сам выбирает действия", "Rules — постоянные инструкции", "Skills — чеклисты для задач"], notes: "Это harness в Cursor." },
    { id: "S21", title: "Заполни чеклист — практика М3", bullets: ["exercises/harness-checklist.md", "Определи инструменты, правила, лимиты для своей задачи"], notes: "Quiz: harness vs промпт." },
  ]},
  { name: "MCP", slides: [
    { id: "S22", title: "Что такое MCP", term: "MCP — Model Context Protocol", analogy: "USB-порт для AI — один формат, много устройств", bullets: ["Стандарт подключения AI к сервисам", "Поиск, Figma, браузер, Obsidian"], notes: "MCP — часть harness." },
    { id: "S23", title: "MCP vs Plugin", bullets: ["MCP = разъём · Plugin = прибор с кабелем", "Plugin ставится в один клик", "MCP настраивается в Settings → MCP"], notes: "Часто plugin уже включает MCP." },
    { id: "S24", title: "MCP для Research", bullets: ["Firecrawl — поиск и скрейп (обязательно)", "MarkItDown — PDF → текст", "Context7 — актуальная документация", "Tavily, Browser — дополнительно"], notes: "Perplexity — отдельный сервис, не MCP." },
    { id: "S25", title: "MCP для Design", bullets: ["Figma — макеты и слайды (обязательно)", "Chrome DevTools — проверка вёрстки", "MagicPath — быстрые UI-макеты"], notes: "Chrome DevTools = AI-инспектор сайта." },
    { id: "S26", title: "Obsidian-стек", bullets: ["Obsidian MCP — AI работает с заметками", "Plannotator — review планов → Obsidian", "MarkItDown — документы в базу знаний"], notes: "Связка: план → vault → поиск по заметкам." },
    { id: "S27", title: "Как подключить MCP", bullets: ["Plugins: Firecrawl, Figma, Context7, Obsidian", "MCP вручную: MarkItDown, Chrome DevTools, Plannotator", "Проверка: «какие MCP подключены?»"], notes: "mcp-setup-guide.md — пошагово." },
    { id: "S28", title: "Практика М3b", bullets: ["Минимум: Firecrawl + Figma", "Расширенный: + Context7, MarkItDown, Obsidian, Plannotator", "3 задачи: research, design, план в Obsidian"], notes: "Quiz: выбор инструмента под задачу." },
  ]},
  { name: "Loops", slides: [
    { id: "S29", title: "Что такое Loop", term: "Loop", analogy: "повар пробует → добавляет → пробует снова", bullets: ["Подумал → Сделал → Посмотрел → Решил", "Не один ответ — цикл до готовности"], notes: "Loop — внутри harness." },
    { id: "S30", title: "Loop engineering", term: "Loop engineering", analogy: "правила игры: сколько попыток, кто проверяет", bullets: ["Когда продолжать", "Когда остановиться", "Как проверить результат"], notes: "Отдельная дисциплина от harness." },
    { id: "S31", title: "ReAct — Reason + Act", bullets: ["Reason — AI думает", "Act — AI действует (tool call)", "Observe — смотрит результат", "Repeat — повторяет или стоп"], notes: "Классический паттерн agent loop." },
    { id: "S32", title: "Maker / Checker", bullets: ["Maker — создаёт результат", "Checker — проверяет по фактам", "Не «мне кажется готово» — независимая проверка"], notes: "Checker может быть человек или другой AI." },
    { id: "S33", title: "Когда остановиться", bullets: ["Max попыток (например, 5)", "Стоп-условие: «найдено 3 источника»", "Эскалация к человеку"], notes: "Без лимитов AI может крутиться бесконечно." },
    { id: "S34", title: "Loop в Cursor", bullets: ["/loop 5m проверь статус — AI возвращается через 5 мин", "Automations — повторяющиеся задачи"], notes: "Loop engineering в действии." },
    { id: "S35", title: "Практика М4", bullets: ["exercises/loop-scenario.md", "4 шага с точкой проверки"], notes: "Quiz: где нужен loop, где достаточно одного ответа." },
  ]},
  { name: "Prototypes", slides: [
    { id: "S36", title: "Pipeline прототипа", bullets: ["Текстовое ТЗ → AI → HTML-страница", "Открываешь в браузере — видишь результат", "Итерируешь: «крупнее заголовок»"], notes: "Не нужно учить HTML — AI создаёт файл." },
    { id: "S37", title: "Cursor · Figma · v0 · Chrome DevTools", bullets: ["Cursor — описала → получила файл", "Figma MCP — слайды и макеты", "v0/Lovable — no-code прототип", "Chrome DevTools — проверка вёрстки"], notes: "Выбор зависит от задачи." },
    { id: "S38", title: "Что просить у AI — хорошее ТЗ", bullets: ["Одна страница, мобильная", "Кнопка X, цвета Y", "Конкретные секции: hero, features, footer"], notes: "Чем точнее ТЗ — тем меньше итераций." },
    { id: "S39", title: "Улучшаем прототип", bullets: ["«Крупнее заголовок»", "«Добавь секцию с отзывами»", "«Сделай кнопку зелёной»", "Каждая итерация — один запрос"], notes: "Каждая итерация — один запрос." },
    { id: "S40", title: "HTML — результат, не язык", bullets: ["AI создаёт index.html", "Ты открываешь в Chrome", "Смотришь, правишь через промпт", "HTML/CSS — не предмет изучения в курсе"], notes: "HTML/CSS — не предмет изучения в курсе." },
    { id: "S41", title: "Лендинг за 30 мин — практика М5", bullets: ["exercises/prototype-brief.md", "Вымышленный продукт", "Открыть index.html в браузере"], notes: "Quiz: что входит в хорошее ТЗ." },
    { id: "S42", title: "Chrome DevTools MCP", bullets: ["«Проверь, почему кнопка не по центру»", "AI смотрит CSS на живой странице", "Исправляет и показывает diff"], notes: "Связка с М3b." },
  ]},
  { name: "Research", slides: [
    { id: "S43", title: "Когда AI-поиск лучше Google", bullets: ["Perplexity: ответ + ссылки сразу", "Google: список ссылок, сама читаешь", "Для фактов и исследований — Perplexity"], notes: "Perplexity — не MCP, отдельный сервис." },
    { id: "S44", title: "Firecrawl · MarkItDown · Browser", bullets: ["Firecrawl — «найди и собери с N сайтов»", "MarkItDown — PDF/статья → текст для AI", "Browser MCP — AI читает страницу сам"], notes: "Из модуля М3b." },
    { id: "S45", title: "Open-source для research", bullets: ["GPT Researcher, Perplexica, Jina Reader", "Как искать: awesome ai search", "Смотри: stars, дата коммита, README"], notes: "github-tools-list.md — подборка." },
    { id: "S46", title: "Проверка источников", bullets: ["2 независимых источника", "Дата и автор", "Совпадение фактов"], notes: "AI может ошибаться — ты проверяешь." },
    { id: "S47", title: "Бенчмарк 3 инструментов — практика М6", bullets: ["Одна тема", "Perplexity + Firecrawl + Browser MCP", "Таблица: источник / дата / вывод"], notes: "research-brief.md." },
    { id: "S48", title: "Quiz М6", bullets: ["Выбери инструмент под задачу", "Найди ошибки в «ответах AI»", "Порог: ≥80%"], notes: "≥80% для прохождения." },
  ]},
  { name: "Capstone", slides: [
    { id: "S49", type: "title", title: "Что ты теперь умеешь", sub: "Итог курса", notes: "Понимать LLM, harness, loop, MCP. Писать промпты и выбирать модели. Делать прототипы и research." },
    { id: "S50", title: "Мини-продукт за 1 час", bullets: ["15 мин — research аудитории", "25 мин — HTML-прототип или слайд", "15 мин — loop: проверка + итерация", "15 мин — финальный тест"], notes: "Все навыки в одном сценарии." },
    { id: "S51", title: "Шаг 1: Research (15 мин)", bullets: ["Firecrawl MCP или Perplexity", "Кто аудитория, что им нужно", "3–5 фактов с источниками"], notes: "Fact-check обязателен." },
    { id: "S52", title: "Шаг 2: Прототип (25 мин)", bullets: ["Cursor + Figma MCP", "Лендинг или слайд презентации", "Открыть и посмотреть результат"], notes: "prototype-brief как шаблон." },
    { id: "S53", title: "Шаг 3: Loop (15 мин)", bullets: ["Чеклист: факты, вёрстка, текст", "1 итерация правок", "Maker/checker: ты — checker"], notes: "loop-scenario.md." },
    { id: "S54", title: "Финальный тест", bullets: ["15 вопросов + эссе", "Все модули курса", "MCP vs plugin, выбор инструмента", "Эссе: «объясни harness, MCP и loop бабушке»"], notes: "modules/07-capstone/quiz.md." },
    { id: "S55", type: "title", title: "Курс пройден", sub: "Продолжай практиковать · glossary.md · Figma Slides", notes: "Материалы остаются в репозитории." },
    { id: "S56", title: "Куда дальше", bullets: ["README.md — оглавление", "exercises/ — брифы и чеклисты", "Cursor Docs, MCP Registry", "Курс — старт, не финал"], notes: "Курс — старт, не финал." },
  ]},
];

const sg = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
const ids = [];

for (let ri = 0; ri < SECTIONS.length; ri++) {
  while (sg.children.length <= ri) figma.createSlideRow();
  sg.children[ri].name = SECTIONS[ri].name;
  const sec = SECTIONS[ri];
  const rowNode = sg.children[ri];
  for (let ci = 0; ci < sec.slides.length; ci++) {
    const d = sec.slides[ci];
    let slide = rowNode.children[ci]?.type === "SLIDE" ? rowNode.children[ci] : figma.createSlide(ri, ci);
    for (const child of [...slide.children]) child.remove();
    slide.name = d.id;
    if (d.type === "title") {
      titleSlide(slide, d.title, d.sub, d.notes);
    } else {
      contentSlide(slide, d.title, d.bullets, d.notes, d.term, d.analogy);
    }
    ids.push(slide.id);
  }
}

const gridFromTree = sg.children
  .map(row => [...row.children].filter(c => c.type === "SLIDE"))
  .filter(row => row.length > 0);
figma.setSlideGrid(gridFromTree);

const grid = figma.getSlideGrid();
return {
  total: grid.reduce((a, r) => a + r.length, 0),
  sections: grid.map((r, i) => ({ name: sg.children[i]?.name, count: r.length })),
  ids,
};
