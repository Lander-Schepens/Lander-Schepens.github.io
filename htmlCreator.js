const parent = document.getElementById('grandparent');
import  {arrayPartners} from './arrayPartners.js';


window.onload = function(){
    arrayPartners.forEach((partner)=>{
    parent.insertAdjacentHTML('beforeend', `<div class="parent"><div class="partnerArtikel"><div class="imageWrapper"><a href=${partner.link}><img src=${partner.image} alt=""></a></div></div></div>`);
});
} 
