var flag = false;
        var tracker = new Date();
        trackerDays = tracker.getDay();
        trackerHours = tracker.getHours();
        trackerMinutes = tracker.getMinutes();
        $(function() {
        if (trackerDays==1 && ((((trackerHours==14) && (trackerMinutes>=40 && trackerMinutes<=60))) || (((trackerHours==15) && (trackerMinutes>=0 && trackerMinutes<=60))))) {
             $("#mathOrScr").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (trackerDays==1 && ((((trackerHours==16) && (trackerMinutes>=30 && trackerMinutes<=60))) || (((trackerHours==17) && (trackerMinutes>=0 && trackerMinutes<=50))))) {
             $("#trpoLr").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (trackerDays==2 && ((((trackerHours==16) && (trackerMinutes>=30 && trackerMinutes<=60))) || (((trackerHours==17) && (trackerMinutes>=0 && trackerMinutes<=50))))) {
             $("#oapLk").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (trackerDays==2 && ((((trackerHours==18) && (trackerMinutes>=5 && trackerMinutes<=60))) || (((trackerHours==19) && (trackerMinutes>=0 && trackerMinutes<=25))))) {
             $("#mathanalPz").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (flag && trackerDays==2 && ((((trackerHours==19) && (trackerMinutes>=40 && trackerMinutes<=60))) || (((trackerHours==20) && (trackerMinutes>=0 && trackerMinutes<=60))))) {
             $("#oapLr").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (trackerDays==3 && ((((trackerHours==14) && (trackerMinutes>=40 && trackerMinutes<=60))) || (((trackerHours==15) && (trackerMinutes>=0 && trackerMinutes<=60))))) {
             $("#alotsvmLk").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (trackerDays==3 && ((((trackerHours==16) && (trackerMinutes>=30 && trackerMinutes<=60))) || (((trackerHours==17) && (trackerMinutes>=0 && trackerMinutes<=50))))) {
             $("#pe1").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (trackerDays==3 && ((((trackerHours==18) && (trackerMinutes>=5 && trackerMinutes<=60))) || (((trackerHours==19) && (trackerMinutes>=0 && trackerMinutes<=25))))) {
             $("#mathanalLk").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (trackerDays==4 && ((((trackerHours==13) && (trackerMinutes>=0 && trackerMinutes<=60))) || (((trackerHours==14) && (trackerMinutes>=0 && trackerMinutes<=20))))) {
             $("#anglPz").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (trackerDays==4 && ((((trackerHours==14) && (trackerMinutes>=40 && trackerMinutes<=60))) || (((trackerHours==15) && (trackerMinutes>=0 && trackerMinutes<=60))))) {
             $("#scrLr").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (trackerDays==4 && ((((trackerHours==16) && (trackerMinutes>=30 && trackerMinutes<=60))) || (((trackerHours==17) && (trackerMinutes>=0 && trackerMinutes<=50))))) {
             $("#poLk").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (trackerDays==4 && ((((trackerHours==18) && (trackerMinutes>=5 && trackerMinutes<=60))) || (((trackerHours==19) && (trackerMinutes>=0 && trackerMinutes<=25))))) {
             $("#kyarLr").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (trackerDays==5 && ((((trackerHours==14) && (trackerMinutes>=40 && trackerMinutes<=60))) || (((trackerHours==15) && (trackerMinutes>=0 && trackerMinutes<=60))))) {
             $("#oapLr").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (trackerDays==5 && ((((trackerHours==16) && (trackerMinutes>=30 && trackerMinutes<=60))) || (((trackerHours==17) && (trackerMinutes>=0 && trackerMinutes<=50))))) {
             $("#linPz").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (flag && trackerDays==5 && ((((trackerHours==18) && (trackerMinutes>=5 && trackerMinutes<=60))) || (((trackerHours==19) && (trackerMinutes>=0 && trackerMinutes<=25))))) {
             $("#mathanalPz").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (flag && trackerDays==5 && ((((trackerHours==19) && (trackerMinutes>=40 && trackerMinutes<=60))) || (((trackerHours==20) && (trackerMinutes>=0 && trackerMinutes<=60))))) {
             $("#vov").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (flag && trackerDays==6 && ((((trackerHours==9) && (trackerMinutes>=35 && trackerMinutes<=60))) || (((trackerHours==10) && (trackerMinutes>=0 && trackerMinutes<=55))))) {
             $("#alotsvmPz").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (trackerDays==6 && ((((trackerHours==11) && (trackerMinutes>=25 && trackerMinutes<=60))) || (((trackerHours==12) && (trackerMinutes>=0 && trackerMinutes<=45))))) {
             $("#mathanalLk").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (trackerDays==6 && ((((trackerHours==13) && (trackerMinutes>=0 && trackerMinutes<=60))) || (((trackerHours==14) && (trackerMinutes>=0 && trackerMinutes<=20))))) {
             $("#pe2").css("background-color", "rgba(255,0,0, 0.9)");
            }
        if (trackerDays==6 && ((((trackerHours==14) && (trackerMinutes>=40 && trackerMinutes<=60))) || (((trackerHours==15) && (trackerMinutes>=0 && trackerMinutes<=60))))) {
             $("#kyarLk").css("background-color", "rgba(255,0,0, 0.9)");
            }



            
        });