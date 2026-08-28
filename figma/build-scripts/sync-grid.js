// Run via use_figma if слайды есть в Layers, но UI показывает пустые строки
// fileKey: HlZmQbpsh71153lQEtXvmx

const sg = figma.currentPage.children.find(c => c.type === "SLIDE_GRID");
const gridFromTree = sg.children
  .map(row => [...row.children].filter(c => c.type === "SLIDE"))
  .filter(row => row.length > 0);
figma.setSlideGrid(gridFromTree);

const grid = figma.getSlideGrid();
return {
  total: grid.reduce((a, r) => a + r.length, 0),
  sections: sg.children
    .filter(row => row.children.some(c => c.type === "SLIDE"))
    .map(row => ({ name: row.name, count: row.children.length })),
};
