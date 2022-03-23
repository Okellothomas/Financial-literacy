// Implement the toogle in the card and video section.
$(document).ready(function(){
    $("button#stock1").click(function(){
        $('#stocks').hide();
        $('#Stock').hide();
        $('#stock1').hide();
        $("#stock2").show();
    });

    $("button#bonds1").click(function(){
        $('#bonds').hide();
        $('#Bond').hide();
        $('#bonds1').hide();
        $("#bond2").show();
    });

    $("button#shares1").click(function(){
        $('#Share').hide();
        $('#shares1').hide();
        $('#shares').hide();
        $("#share2").show();
    });

    $("button#loan1").click(function(){
        $('#loans').hide();
        $('#Loan').hide();
        $('#loan1').hide();
        $("#loan2").show();
    });

    $("button#saving1").click(function(){
        $('#savings').hide();
        $('#Saving').hide();
        $('#saving1').hide();
        $("#saving2").show();
    });

    $("button#shares1").click(function(){
        $('#Share').hide();
        $('#shares1').hide();
        $('#shares').hide();
        $("#share2").show();
    });

    // implementing the hover effect.
    $("card#stock2").hover(function(){
        // $("img#work1").css('background-color','white').css('opacity','0.2');
        alert('show me now!');
    }, function(){
        $("#stock2").hide();
        $('#stocks').show();
        $('#Stock').show();
        $('#stock1').show();
    });

    $("card#bond2").hover(function(){
        // $("img#work1").css('background-color','white').css('opacity','0.2');
        alert('Show me then');
    }, function(){
        $('#stocks').show();
        $('#Stock').show();
        $('#stock1').show();
        $("#stock2").hide();
    });

    $("card#share2").hover(function(){
        // $("img#work1").css('background-color','white').css('opacity','0.2');
        alert('show us how it works')
    }, function(){
        $('#stocks').show();
        $('#Stock').show();
        $('#stock1').show();
        $("#stock2").hide();
    });

});
