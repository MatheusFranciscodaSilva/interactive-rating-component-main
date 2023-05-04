(function(){
    
   
    var $btn = document.querySelector(".btn");
    var $ask = document.querySelector(".rating-ask");
    var $thanks = document.querySelector(".thank-you-section")
    

    $btn.addEventListener("click", radioOption);

    function radioOption() {
        var radio = document.getElementsByName("option");
        for(var i = 0; i < radio.length; i++){
            if(radio[i].checked){
                console.log("Escolheu " + radio[i].value);
            }
            $ask.classList.add("on");
            $thanks.classList.add("on");
        }

    }
})()