

function change(){
    document.getElementById("label-1").style.opacity= '0';

}

function change2(){
    document.getElementById("label-2").style.opacity= '0';
}

let background = document.body;
let aboutMe = document.getElementById('about-me');
var node = document.getElementById('links').querySelector('img');


function lightMode(){
    background.style.backgroundImage='url(./images-2/white.jpg)'
    background.style.color = 'hsla(0,0%,0%,.85)';
    document.getElementById('about-me').style.border = "3px hsla(168, 76%, 36%, .75) solid";
    aboutMe.querySelector('a').style.color = 'hsla(0,0%,0%,.85)';
   
    //document.getElementsByClassName('color-mode').style.boxShadow = "2px 2px 2px black";
    document.getElementById('nav').querySelector('li').style.color = 'hsla(0,0%,0%,.85)'
    node.style.backgroundColor = 'hsla(0,0%,50%,.5)'
    node.style.borderRadius = '5px'
 /*
    for (let i = 0; i < node.clientHeight; i++){
        node[i].style.backgroundColor = 'hsla(0,0%,50%,.5)';
    };
*/



}





