'use strict';

{
   const twMove = document.getElementById('twMove');
   const twIcon = document.getElementById('twIcon');
   const fbMove = document.getElementById('fbMove');
   const fbIcon = document.getElementById('fbIcon');

    twMove.classList.remove('move');
    twIcon.classList.remove('move'); 
    fbMove.classList.remove('move');
    fbIcon.classList.remove('move'); 

   twMove.addEventListener('mouseover', () => {
    twMove.classList.add('move');
    twIcon.classList.add('move');
   });
   twIcon.addEventListener('mouseover', () => {
    twMove.classList.add('move');
    twIcon.classList.add('move');
   });

   twMove.addEventListener('mouseleave', () => {
    twMove.classList.remove('move');
    twIcon.classList.remove('move');
   });
   twIcon.addEventListener('mouseleave', () => {
    twMove.classList.remove('move');
    twIcon.classList.remove('move');
   });

   fbMove.addEventListener('mouseover', () => {
    fbMove.classList.add('move');
    fbIcon.classList.add('move');
   });
   fbIcon.addEventListener('mouseover', () => {
    fbMove.classList.add('move');
    fbIcon.classList.add('move');
   });

   fbMove.addEventListener('mouseleave', () => {
    fbMove.classList.remove('move');
    fbIcon.classList.remove('move');
   });
   fbIcon.addEventListener('mouseleave', () => {
    fbMove.classList.remove('move');
    fbIcon.classList.remove('move');
   });
}