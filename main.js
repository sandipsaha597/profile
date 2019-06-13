'use strict'

let toggleMenu = document.querySelector('ul.menu'),
    toggleButton = document.querySelector('.side')

//navbar box-shadow

let navbar = document.querySelector('nav')

toggleButton.onclick = function() {
  if(window.innerWidth <= 768) {
    if(toggleMenu.className == 'menu') {
      toggleMenu.className += ' active'
    } else {
      toggleMenu.className = 'menu'
    }
  }
  toggleButton.classList.toggle('active')    
}

// modal box
let div = document.querySelectorAll('.modal-box')
  for (let i = 0; i < div.length; i++) { 
  div[i].onclick = function() {
    toggleClass(this)
  } 
}

function toggleClass(el) {
  el.classList.toggle('active')
}

let blogPosts = document.querySelectorAll(".modal-box"),
  loadMore = document.querySelector(".load-more"),
  j = 0

function myF() {
  j += 8
  
  if(j >= blogPosts.length) {
    loadMore.style.display = 'none'
  }
  for(let k = 0; k < j; k++) {
    blogPosts[k].style.display = 'grid'
  }
}

myF()
loadMore.addEventListener('click', myF)
//modal box --end


// Smooth scrolling
$(document).ready(function() {
  
 //   parallax 
  $(window).scroll(function() {
  parallax()
})

function parallax() {
  var wScroll = $(window).scrollTop();
  $('header').css('background-position', 'center '+ (wScroll*1 - 40) + 'px') 
}
  
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 80
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 120;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })
  
})


// Google maps API

function myMap() {
  var myCenter = new google.maps.LatLng(41.877995, -87.632255);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
}
myMap()

function scroll() {  
  if (window.pageYOffset >= 200) {
    navbar.classList.add('box')
  } else {
    navbar.classList.remove('box')
  }
}
window.addEventListener('scroll', scroll)



