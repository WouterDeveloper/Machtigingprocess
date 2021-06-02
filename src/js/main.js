
  window.onload = function() {
    document.querySelectorAll('.skills__block .skills__header')
    .forEach(function(el, i) {
        el.className += ' header'+(i+1);
    })

    // document.querySelectorAll('.skills__techniques__row figure')
    // .forEach(function(el, i) {
    //     el.className += ' figure'+(i+1);
    // })
   var hamburger = document.querySelector(".hamburger");
   var navigation = document.querySelector(".content nav ul");

   hamburger.addEventListener("click", function() {
     hamburger.classList.toggle("is-active");
     navigation.classList.toggle("is-active");
   });

   let Buttons = document.querySelectorAll(".filter__button");

  // loop through the buttons using for..of 
  for (let button of Buttons) {
    // listen for a click event 
    button.addEventListener('click', (e) => {
      // et = event target
      const et = e.target;
      // slect active class
      const active = document.querySelector(".active");
      // check for the button that has active class and remove it
      if (active) {
        active.classList.remove("active");
      }
      // add active class to the clicked element 
      et.classList.add("active");
      
      // select all classes with the name content
      let allContent = document.querySelectorAll('.projects__project');

      // loop through all content classes
      for (let content of allContent) {
        // display the content if the class has the same data-attribute as the button 
        if(content.getAttribute('data-name') === button.getAttribute('data-name')) {
          content.style.display = "block";
        }

        else if(content.getAttribute('data-reset') === button.getAttribute('data-reset')) {
          content.style.display = "block";
        }

        // if it's not equal then hide it.
        else {
          content.style.display = "none";
        }
      }
    });
  }
  AOS.init();
  AOS.refresh();
  };

