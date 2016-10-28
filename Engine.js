//JavaScript (w/ jQuery) for page programming

//pure JavaScript
function myName()
{
    return "<p>My name is Miguel</p>";
}

function OnBut()
{
    alert('Nod ya head!');
}



//pure jQuery
//jQuery 'document is ready' function (jQuery code MUST be inside!)
$(document).ready(function(){
    
    //make title slide down
    $("#title_slide").hide();
    $("#title_slide").slideDown("slow");
    //make boxes draggable
    //from StackOverflow user:Luca Filosofi
    /*$("#draggable").draggable({
        revert : function(event, ui) {
            // on older version of jQuery use "draggable"
            // $(this).data("draggable")
            // on 2.x versions of jQuery use "ui-draggable"
            // $(this).data("ui-draggable")
            $(this).data("uiDraggable").originalPosition = {
                top : 0,
                left : 0
            };
            // return boolean
            return !event;
            // that evaluate like this:
            // return event !== false ? false : true;
        }
    });*/
    $( function() {
        $(".draggable").draggable();
    });
    //---------------------------------
    $("#drag-exit").click(function(){
       $(".draggable").hide(); 
    });
    //--------------------------------
    //-----------------------------------------
    //function called on button press
    $("#ValidationButton").click(function() {

        var para = document.createElement("P"); 
        var possibility = Math.floor(Math.random() * 6) + 1;
        var str = ""

        switch(possibility) 
        {
            case 1:
                str = "You are awesome!"
                break;
            case 2:
                str = "Looking good!" ; 
                break;
            case 3:
                str ="I love you!" ; 
                break;
            case 4:
                str ="Stay strong champion."; 
                break;
            case 5:
                str ="Existence has meaning." ; 
                break;
            default:
                str = "Have dreams!" ;
        }

        var t = document.createTextNode(str); 
        para.appendChild(t);                                          
        document.body.appendChild(para); 
    });
    //-------------------------------------
    
});    