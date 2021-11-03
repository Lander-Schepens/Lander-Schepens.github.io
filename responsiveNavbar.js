const bars = document.getElementById('bars');
const navbar = document.getElementById('navbar');
const linksLink1= document.getElementById('linksLink1');
const linksLink2= document.getElementById('linksLink2');
const leftAligned = document.getElementById('leftAligned');
const link1 = document.getElementById('linksLinkA');
const link2 = document.getElementById('linksLinkB');
bars.onclick = function(){
    if(navbar.style.height == '20vh'){
        navbar.style.transition = 'all 0.2s ease-in-out';
        navbar.style.height = '7vh';
        navbar.style.alignItems='center';
        linksLink1.style.display='none';
        linksLink2.style.display='none';
    } else {
        navbar.style.transition='all 0.2s ease-in-out';
        navbar.style.height='20vh';
        navbar.style.alignItems='flex-start';
        linksLink1.style.display='inherit';
        linksLink2.style.display='inherit';
        linksLink1.style.width='51vw';
        linksLink2.style.width="51vw";
        link1.style.fontSize='1.5rem';
        link1.style.marginTop='2vh';
        link2.style.fontSize='1.5rem';
        link2.style.marginTop='2vh';
    }
   
}

// .navbar height moet naar 30vh