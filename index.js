

function change(){
    document.getElementById("label-1").style.opacity= '0';

}

function change2(){
    document.getElementById("label-2").style.opacity= '0';
}

let background = document.body;
let aboutMe = document.getElementById('about-me');
let chkMode = true;


function lightMode(){
    chkMode = false;
    background.style.backgroundImage='url(./images-2/white.jpg)'
    background.style.color = 'hsla(0,0%,0%,.85)';
    document.getElementById('about-me').style.border = "3px hsla(168, 76%, 36%, .75) solid";
    aboutMe.querySelector('a').style.color = 'hsla(0,0%,0%,.85)';
    document.getElementById('dark-mode').style.color = 'black';
    document.getElementById('dark-mode').style.boxShadow = '1px 1px 1px black';
    document.getElementById('light-mode').style.color = 'hsla(168, 76%, 36%, .75)';
    document.getElementById('light-mode').style.boxShadow = '2px 2px 2px hsla(168, 76%, 36%, .75)';
    document.getElementById('light-mode').style.fontWeight = 'bold';
    document.getElementById('dark-mode').style.fontWeight = '400';

    let links = document.querySelectorAll('.nav-links')
    for(let i = 0; i < links.length; i++){
        links[i].style.color = 'black';
        links[i].style.opacity = '0.95';
    }
    
    document.getElementById('github').src='./images-2/github2.png'
    document.getElementById('github2').src='./images-2/github2.png'

}

function darkMode(){
    chkMode = true;
    background.style.backgroundImage='url(./images-2/andrew-kliatskyi-d3YXpAqdy2I-unsplash.jpg)'
    background.style.color = 'hsla(0,0%,95%, .9)';
    document.getElementById('about-me').style.border = "3px hsla(0,0%,95%, .4) solid";
    aboutMe.querySelector('a').style.color = 'hsla(0,0%,95%, .9)';

    document.getElementById('dark-mode').style.color = 'hsla(168, 76%, 36%, .75)';
    document.getElementById('dark-mode').style.boxShadow = '2px 2px 2px hsla(168, 76%, 36%, .75)';
    document.getElementById('light-mode').style.color = 'white';
    document.getElementById('light-mode').style.fontWeight = '400';
    document.getElementById('dark-mode').style.fontWeight = 'bold';
    document.getElementById('light-mode').style.boxShadow = '1px 1px 1px white';


    let links = document.querySelectorAll('.nav-links')
    for(let i = 0; i < links.length; i++){
        links[i].style.color = 'white';
        links[i].style.opacity = '0.95';
    }

    document.getElementById('github').src='./images-2/githubicon.png'
    document.getElementById('github2').src='./images-2/githubicon.png'

}

function highlightOn(){
    document.getElementById('about-anchor').style.color = 'hsla(168, 76%, 36%, .75)';
}

function highlightOff(){
    if (chkMode == false){
    document.getElementById('about-anchor').style.color = 'hsla(0,0%,0%,.85)';
} else {
    document.getElementById('about-anchor').style.color = 'hsl(0,0%,95%, .9)';
}
}




