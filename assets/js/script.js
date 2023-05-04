(function(){

    var $chk = document.querySelector(".chk");
    var $label = document.querySelector(".label");
    console.log($chk);
    if($chk.checked === true) {
        console.log("1");
    }else{
        console.log("0");
    }
    if($chk.checked === false) {
        $label.style.backgroundColor = "hsl(25, 97%, 53%)";
    }
})()