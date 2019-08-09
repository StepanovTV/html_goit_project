'use strict';

function toggle(ID) {
  var element = document.getElementById(ID);

  if (element.style.display === 'none') {
    element.style.display = 'flex';
  } else {
    element.style.display = 'none';
  }
}

var element = document.getElementById('burger');

element.onclick = function (event) {
  toggle('menu');
};