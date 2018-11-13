"use strict";
(function() {
  if (typeof(document.querySelector)==='undefined') {
    return;
  }

  document.addEventListener('DOMContentLoaded', function() {
    var doorbell_button;
    document.querySelector('html').className='js';

    doorbell_button = document.createElement('button');
    doorbell_button.id = 'doorbell-button';
    doorbell_button.innerHTML = 'Ring the Doorbell';

    doorbell_button.addEventListener('click', function(){
      var doorbell = new Audio('media/doorbell.mp3');
      doorbell.play();
    });

    document.querySelector('#content').appendChild(doorbell_button);
  });

})();
