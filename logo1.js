//on hover, change url of image

const afbeelding = document.getElementById('logo1');
const knop = document.getElementById('linksLinkB');

knop.addEventListener("mouseover", function (){
        afbeelding.src='../images/lanworks_icon_1_hover.png';
});

knop.onmouseleave = function(){
    afbeelding.src='../images/lanworks_icon_1.png';
}