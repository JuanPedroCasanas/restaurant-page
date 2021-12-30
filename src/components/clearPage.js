export function clearPage(currentContent) {
  const content = document.getElementById('content');
  const toBeRemoved = [];
  toBeRemoved.push(document.getElementsByClassName('home')[0]);
  toBeRemoved.push(document.getElementsByClassName('menu')[0]);
  toBeRemoved.push(document.getElementsByClassName('contact')[0]);
  toBeRemoved.push(document.getElementsByClassName('aboutUs')[0]);

  for (let i = toBeRemoved.length - 1; i >= 0; i--) {
    (toBeRemoved[i] != undefined && toBeRemoved[i] != currentContent) ?
      content.removeChild(toBeRemoved[i]) : () => { };
  }
}