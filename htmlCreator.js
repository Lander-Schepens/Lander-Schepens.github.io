const parent = document.getElementById('grandparent');
import  {arrayPartners} from './arrayPartners.js';


window.onload = function(){
    arrayPartners.forEach((partner)=>{
    parent.insertAdjacentHTML('beforeend', `<div class="parent"><div class="partnerArtikel"><div class="imageWrapper"><img src=${partner.image} alt=""></div></div></div>`);
});
} 
