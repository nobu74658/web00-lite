'use strict';

{
  document.getElementById('namedata').focus();
  function keydown(e){
    if(e.keyCode === 13){
      document.getElementById('passworddata').focus();
    }
  }
  window.onkeydown = keydown;
};