export function renderTitle() {
  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = `El Canchero's Pizzeria`;
  return title;
}