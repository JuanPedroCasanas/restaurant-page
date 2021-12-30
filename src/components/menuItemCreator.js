export function menuItemCreator(name, url, description){
  let itemName = document.createElement('p');
  let itemImg = document.createElement('img');
  let itemDescription = document.createElement('p');
  let menuItem = document.createElement('div');

  itemName.textContent = name;
  itemImg.src = url;
  itemDescription.textContent = description;

  itemName.classList.add('itemName');
  itemImg.classList.add('itemImg');
  itemDescription.classList.add('itemDescription');
  menuItem.classList.add('menuItem');
  
  menuItem.appendChild(itemName);
  menuItem.appendChild(itemImg);
  menuItem.appendChild(itemDescription);
  return menuItem;
}