var adNum= document.getElementById("ad-num");
var Quote= document.getElementById("quote");
var Button= document.getElementById("btn");


Button.addEventListener("click", function(){
    fetch('	https://api.adviceslip.com/advice')
    .then(response => {
        return response.json();
    })
    .then(response => {
        var data= response.slip;
        var dataId= data.id;
        var dataAd= data.advice;

        adNum.innerHTML= dataId;
        Quote.innerHTML= dataAd
    });
})