import './style.css'
import './reset.css'

 // core version + navigation, pagination modules:
 import Swiper, { Navigation, Pagination } from 'swiper';
 // import Swiper and modules styles
 import 'swiper/css';
 import 'swiper/css/navigation';
 import 'swiper/css/pagination';

 // init Swiper:
 const swiper = new Swiper('.swiper', {
   // configure Swiper to use modules
   modules: [Navigation, Pagination], 
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
  
  async function succes(position){
    const apiKey = 'pk.eyJ1IjoiZXhlbW5lcyIsImEiOiJjbGVxemdsOTMwaWNsM3JwMWh5aXU1MHFrIn0.Ef8ucFX8zu_adGFA-cj0CA'
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZXhlbW5lcyIsImEiOiJjbGVxemdsOTMwaWNsM3JwMWh5aXU1MHFrIn0.Ef8ucFX8zu_adGFA-cj0CA"
    try{
    const response = await fetch(url);
    console.log(response);
  } catch(error) {
    console.log (error)
  }
  //test prettier
}





