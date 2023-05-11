
    
    
    var $btn = document.querySelector(".btn");

    //add aparencia
    function thanks(){
        var container = document.querySelector(".container");
        container.classList.add("open");
    }

    // result 
    function resultOption(result){
        var span = document.querySelector(".option-selected");
        var text = document.createTextNode(result)
        span.appendChild(text);

    }

    //botão que chama a função
    $btn.addEventListener("click", function(){
        var option = document.getElementsByName("option");
        var container = document.querySelector("container");
        for (var i = 0 ; i < option.length; i++){
            
            if(option[i].checked){
                var result = option[i].value;
            }
        }
        thanks();
        resultOption(result);
    })
    