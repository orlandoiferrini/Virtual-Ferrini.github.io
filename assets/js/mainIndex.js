(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }


  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }



  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

/*Barra de busqueda */

function buscar_libros(){
  let input = document.getElementById('buscador').value 
  input=input.toLowerCase();
  let x = document.getElementsByClassName('libros')
  
  for (i = 0; i< x.length; i++){
    if (!x[i]. innerHTML.toLowerCase().includes(input)){
      x[i].style.display="none"
    }
    else {
      x[i].style.display="list-item"
    }
  }
}



  