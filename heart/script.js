function checkPassword(){
    var input=document.getElementById("passwordInput").value;

    if(input==="Anaksha"){
        document.getElementById("passwordScreen").style.display="none";
        document.getElementById("mainContent").style.display="block";

        startMusic();
        typeWriter();
        startLoveCounter(); // 💖 important
    }else{
        alert("Wrong Password 😢");
    }
}

/* music */
function startMusic(){
    var music=document.getElementById("bgMusic");
    music.play();
}

/* typing */
var text="You are my everything ❤️";
var i=0;

function typeWriter(){
    if(i<text.length){
        document.getElementById("typing").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typeWriter,50);
    }
}

/* 💖 LOVE COUNTER */
function startLoveCounter(){

    // 👉 yaha apni love start date daal
    var startDate = new Date("2026-03-26"); 

    setInterval(function(){
        var now = new Date();
        var diff = now - startDate;

        var days = Math.floor(diff / (1000*60*60*24));
        var hours = Math.floor((diff / (1000*60*60)) % 24);
        var minutes = Math.floor((diff / (1000*60)) % 60);

        document.getElementById("loveCounter").innerHTML =
        days + " Days 💖 " + hours + " Hours 💕 " + minutes + " Minutes";
    },1000);
}

/* countdown */
setInterval(function(){
    var now=new Date();
    var b=new Date(now.getFullYear(),3,26);

    if(now>b){
        b.setFullYear(b.getFullYear()+1);
    }

    var diff=b-now;
    var d=Math.floor(diff/(1000*60*60*24));
    var h=Math.floor((diff/(1000*60*60))%24);

    document.getElementById("timer").innerHTML=
    d+" Days "+h+" Hours";
},1000);

/* surprise */
function openSurprise(){
    document.getElementById("surprisePage").style.display="flex";
}

function closeSurprise(){
    document.getElementById("surprisePage").style.display="none";
}