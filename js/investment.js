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

    $("button#sacos1").click(function(){
        $('#Sacos').hide();
        $('#sacos').hide();
        $('#sacos1').hide();
        $("#sacos2").show();
    });

    // implementing the hover effect.
    $("#stock2").hover(function(){
    }, function(){
        $("#stock2").hide();
        $('#stocks').show();
        $('#Stock').show();
        $('#stock1').show();
    });

    $("#bond2").hover(function(){
    }, function(){
        $('#bonds').show();
        $('#Bond').show();
        $('#bonds1').show();
        $("#bond2").hide();
    });

    $("#share2").hover(function(){
    }, function(){
        $('#Share').show();
        $('#shares1').show();
        $('#shares').show();
        $("#share2").hide();
    });

    $("#loan2").hover(function(){
    }, function(){
        $('#loans').show();
        $('#Loan').show();
        $('#loan1').show();
        $("#loan2").hide();
    });

    $("#saving2").hover(function(){
    }, function(){
        $('#savings').show();
        $('#Saving').show();
        $('#saving1').show();
        $("#saving2").hide();
    });

    $("#sacos2").hover(function(){
    }, function(){
        $('#Sacos').show();
        $('#sacos').show();
        $('#sacos1').show();
        $("#sacos2").hide();
    });

});
