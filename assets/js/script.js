(function(){
    
   
    var $btn = document.querySelector(".btn");
    var $ask = document.querySelector(".rating-ask");
    var $thanks = document.querySelector(".thank-you-section")
    

    $btn.addEventListener("click", radioOption);

    function radioOption(option) {
        var radio = document.getElementsByName("option");
        for(var i = 0; i < radio.length; i++){
            if(radio[i].checked){
                
                alert("Escolheu " + radio[i].value);
                var option = radio[i].value;
                optionSelected(option);
            }
            
        }
        
        

    }
    function optionSelected(option){
        var select = option;
        alert("Selected " + select);
        var $span = document.querySelector(".option-select");
        $span.innerHTML = "oi";
    }
    
})()