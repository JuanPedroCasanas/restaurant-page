export function clearPage() {
  const content = document.getElementById('content');
  const toBeRemoved = document.getElementsByClassName('currentContent')[0];
  if(toBeRemoved != undefined){
    content.removeChild(toBeRemoved);
  } else {
  }
}