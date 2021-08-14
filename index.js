
var tipp;
var tipFinal;
var buttonInnerHTML = 99;
var num = document.querySelectorAll("button").length;
for (let i = 0; i < num ; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        tipp = document.querySelectorAll("button")[i];
         buttonInnerHTML = tipp.value;
      });
}


    function calculate(){
    let bill = document.querySelector('.bill').value;

    if(bill == 0){
         alert("Invalid Input");
    }
    
    let people = document.querySelector("#number-of-people").value;
    let custom = document.querySelector('#custom').value;
     
    if(buttonInnerHTML === 99){
        tipFinal = custom;
    }
    else{
        tipFinal = buttonInnerHTML;
    }
    var tip = parseInt(bill*tipFinal/100);
    var total = Math.floor((parseInt(bill)+tip)/people);
    document.querySelector('.amount1').innerHTML = "$"+tip;
    document.querySelector('.amount2').innerHTML  = "$"+total;
     }

     function Reset(){
         window.location.reload(true);
     }
