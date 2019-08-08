'use strict';

function toggle(ID) {
  let element = document.getElementById(ID);
  if (element.style.display === 'none') {
    element.style.display = 'flex';
  } else {
    element.style.display = 'none';
  }
}

let element = document.getElementById('burger');
element.onclick = function(event) {
  toggle('menu');
};
