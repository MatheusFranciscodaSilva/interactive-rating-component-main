
    
    
    var $btn = document.querySelector(".btn");

    //change of appearance
    function thanks(){
        var container = document.querySelector(".container");
        container.classList.add("open");
    }

    // print the result 
    function resultOption(result){
        var span = document.querySelector(".option-selected");
        var text = document.createTextNode(result)
        span.appendChild(text);

    }

    //configure of button
    $btn.addEventListener("click", function(){
        var option = document.getElementsByName("option");
        var container = document.querySelector("container");
        for (var i = 0 ; i < option.length; i++){
            
            if(option[i].checked){
                var result = option[i].value;
            }
        }

        //calling - change of appearance 
        thanks();

        //calling - print the result
        resultOption(result);
    })
    