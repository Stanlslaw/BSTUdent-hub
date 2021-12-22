$(window).scroll(function() {
  
    let $window = $(window),
        $card = $('.cardElem');
        $cardText = $('#cardText');
        $cardsCont = $('#cards');
        $main = $("#mainContent");
        $head = $("#hubHead");
        
        let $authors = $(".authorElem");
        let $authCont = $("#authors");
        let $authHead = $('#authorsHead')
        let $authAbout = $('.authAbout')
    let scroll = $window.scrollTop() + (3 * $window.height() / 4);
   
    $card.each(function() {
      let $this = $(this);
      
      if ($this.position().top <= scroll) {
        $card.addClass("cardActive");
        $cardsCont.addClass("cardActive");
        $main.addClass("cardActive");
        $cardText.addClass("cardActive");
        $head.addClass("cardActive");
        $authAbout.css({visibility:"hidden"})
      }
      else {
          $cardText.removeClass("cardActive");
          $main.removeClass("cardActive");
          $cardsCont.removeClass("cardActive");
          $head.removeClass("cardActive");
          $authAbout.css({visibility:"visible"})
      }
    });

    $authCont.each(function() {
        let $this = $(this);

        if($this.position().top <= scroll){
            $authors.addClass("authorActive");
            $authCont.addClass("authorActive")
            $head.removeClass("cardActive");
            $cardsCont.removeClass("cardActive");
            $authHead.addClass("authorActive");
        }
        else {  
            $authCont.removeClass("authorActive")
            $authHead.removeClass("authorActive")
        }
    })


    
  }).scroll();

$(document).ready(()=>{
    $('#logo').animate({
        opacity:"1",
        top:"0"
    }, 500)

    $(".navButton").each(function(){
        let $this = $(this);

        $this.animate({
            opacity:"1"
        }, 500)
    })

    let navStart = false;

    setTimeout(() => {
        if(!navStart){
            let greetings = document.getElementById('greet');
            greetings.style.opacity = 1;
            setTimeout(() => {
                greetings.style.opacity = 0;
                if(!navStart){
                    setTimeout(() => {
                        greetings.innerText = "Для навигации используйте меню ниже";
                        greetings.style.opacity = 1;
                        setTimeout(() => {
                            greetings.style.opacity = 0;
                        }, 1500);
                    }, 800);
                }
            }, 1000);
        }
    }, 800);

    $("#leftArrBox").click(()=>{
        navStart = true;
        $(".focusModule").switchClass("focusModule", "nextModule", 500).css({transform:"rotateY(15deg)", transformOrigin: "left center"});
        $(".prevModule").switchClass("prevModule","focusModule", 500).css({transform:"rotateY(0deg)", transformOrigin: "center center"});
        $(".nextModule").switchClass("nextModule","prevModule", 500).css({transform:"rotateY(-15deg)", transformOrigin: "right center"});
    })

    $("#rightArrBox").click(()=>{
        navStart = true;
        $(".focusModule").switchClass("focusModule", "prevModule", 500).css({transform:"rotateY(-15deg)", transformOrigin: "right center"});
        $(".prevModule").switchClass("prevModule","nextModule", 500).css({transform:"rotateY(15deg)", transformOrigin: "left center"});
        $(".nextModule").switchClass("nextModule","focusModule", 500).css({transform:"rotateY(0deg)", transformOrigin: "center center"});
    })

    $(".moduleElem").dblclick(openModule = function() {
        $(".focusModule").addClass("openedModule", "fast");
        $(".focusModule .moduleDesc").addClass("opened", "fast");
        $(".focusModule .authAbout").addClass("opened","fast")
        $(".arrows, .arrowBox").css({display:"none"});
        setTimeout(() => {
            $("#moduleControl").css({display:"block"})
        }, 200);
    });
    
    
})

let closeModule = function() {
    $(".focusModule").switchClass("openedModule", "");
    $(".arrows, .arrowBox").css({display:"block"});
    $("#moduleControl").css({display:"none"});
    $(".focusModule .moduleDesc").switchClass("opened", "")
    $(".focusModule .authAbout").switchClass("opened","")
}

