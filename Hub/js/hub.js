$(document).ready(()=>{
    $('#logo').animate({
        opacity:"1",
        top:"0"
    }, 500)


    $("#leftArrBox").click(()=>{
        $(".ghostModule").css({left: "-500px"})
        $(".focusModule").switchClass("focusModule", "nextModule", 500).css({transform:"rotateY(15deg)", transformOrigin: "left center"});
        $(".prevModule").switchClass("prevModule","focusModule", 500).css({transform:"rotateY(0deg)", transformOrigin: "center center"});
        $(".nextModule").switchClass("nextModule","prevModule", 500).css({transform:"rotateY(-15deg)", transformOrigin: "right center"});
        
    })

    $("#rightArrBox").click(()=>{
        $(".ghostModule").css({ right:"-400px"})
        $(".focusModule").switchClass("focusModule", "prevModule", 500).css({transform:"rotateY(-15deg)", transformOrigin: "right center"});
        $(".prevModule").switchClass("prevModule","nextModule", 500).css({transform:"rotateY(15deg)", transformOrigin: "left center"});
        $(".nextModule").switchClass("nextModule","focusModule", 500).css({transform:"rotateY(0deg)", transformOrigin: "center center"});
    })

    //Нереализованная функция!
    $(".focusModule").draggable({
        axis:"x",
        containment:"parent"
    })

})