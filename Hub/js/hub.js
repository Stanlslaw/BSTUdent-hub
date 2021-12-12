$(document).ready(()=>{
    $('#logo').animate({
        opacity:"1",
        top:"0"
    }, 500)


    $("#leftArrBox").click(()=>{
        $(".focusModule").switchClass("focusModule", "nextModule", 500).css({transform:"rotateY(15deg)", transformOrigin: "left center"});
        $(".prevModule").switchClass("prevModule","focusModule", 500).css({transform:"rotateY(0deg)", transformOrigin: "center center"}).dblclick(()=>{
            $(".focusModule").addClass("openedModule","fast");
        });
        $(".nextModule").switchClass("nextModule","prevModule", 500).css({transform:"rotateY(-15deg)", transformOrigin: "right center"});
    })

    $("#rightArrBox").click(()=>{
        $(".focusModule").switchClass("focusModule", "prevModule", 500).css({transform:"rotateY(-15deg)", transformOrigin: "right center"});
        $(".prevModule").switchClass("prevModule","nextModule", 500).css({transform:"rotateY(15deg)", transformOrigin: "left center"});
        $(".nextModule").switchClass("nextModule","focusModule", 500).css({transform:"rotateY(0deg)", transformOrigin: "center center"});
    })

    $(".moduleElem").dblclick(()=>{
        $(".focusModule").addClass("openedModule", "fast");
        $(".arrows, .arrowBox").css({display:"none"});
        setTimeout(() => {
            $("#moduleControl").css({display:"block"})
        }, 200);
    });
    
    $(".moduleElem").mouseenter(()=>{
        $("#dblClickTip").css({top:"-20px", opacity:"1"})
    }).mouseout(()=>{
        $("#dblClickTip").css({top:"0", opacity:"0"})
    });
    
})


