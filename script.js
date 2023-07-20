//your JS code here. If required.

function findLevel(id) {
  let level = 1;
	
  let element = document.getElementById(id);
  while (element.parentNode) {
    element = element.parentNode;
    level++;
  }
  return level;
}

const n=findLevel("level");
alert(`The level of the element is: ${n}`);