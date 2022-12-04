

function change(){
    document.getElementById("label-1").style.opacity= '0';

}

function change2(){
    document.getElementById("label-2").style.opacity= '0';
}

let background = document.body;
let aboutMe = document.getElementById('about-me');
var node = document.getElementById('links').querySelector('img');
var chkMode = true;

function lightMode(){
    chkMode = false;
    background.style.backgroundImage='url(./images-2/white.jpg)'
    background.style.color = 'hsla(0,0%,0%,.85)';
    document.getElementById('about-me').style.border = "3px hsla(168, 76%, 36%, .75) solid";
   // aboutMe.querySelector('a').style.color = 'hsla(0,0%,0%,.85)';
    document.getElementById("anchor-about").style.color="black";
    //document.getElementsByClassName('color-mode').style.boxShadow = "2px 2px 2px black";
    // document.getElementById('nav').querySelector('li').style.color = 'hsla(0,0%,0%,.85)'

    var links = document.querySelectorAll(".links-li");
    for(var i = 0; i < links.length; i++){
        links[i].style.color= "black"
    }

    node.style.backgroundColor = 'hsla(0,0%,50%,.5)'
    node.style.borderRadius = '5px'
 /*
    for (let i = 0; i < node.clientHeight; i++){
        node[i].style.backgroundColor = 'hsla(0,0%,50%,.5)';
    };
*/



}

function highlight(){
    document.getElementById("anchor-about").style.color = "hsla(168, 76%, 36%, .90)"
}

function revertHighlight(){
    if(chkMode == false){
        document.getElementById("anchor-about").style.color = "black";
    }
    else{
        document.getElementById("anchor-about").style.color = "white";
    }
}

function highlight1(){
    document.getElementsByClassName("links-li")[0].style.color = "hsla(168, 76%, 36%, .90)";
}

function revertHighlight1(){
    if(chkMode == false){
        document.getElementsByClassName("links-li")[0].style.color = "black";
    }
    else{
        document.getElementsByClassName("links-li")[0].style.color = "white";
    }
}

function highlight2(){
    document.getElementsByClassName("links-li")[1].style.color = "hsla(168, 76%, 36%, .90)";
}

function revertHighlight2(){
    if(chkMode == false){
        document.getElementsByClassName("links-li")[1].style.color = "black";
    }
    else{
        document.getElementsByClassName("links-li")[1].style.color = "white";
    }
}

function highlight3(){
    document.getElementsByClassName("links-li")[2].style.color = "hsla(168, 76%, 36%, .90)";
}

function revertHighlight3(){
    if(chkMode == false){
        document.getElementsByClassName("links-li")[2].style.color = "black";
    }
    else{
        document.getElementsByClassName("links-li")[2].style.color = "white";
    }
}





