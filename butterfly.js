$(function() {  
    $('#restore').hide();
    $("#transform").on('click', function() {   
        $( "h1" ).text( "The butterfly" );
        $( "#p1" ).html( "This is a <strong>butterfly</strong> in its natural habitat:" );
        $("img").attr('src', 'https://www.kasandbox.org/programming-images/animals/butterfly_monarch.png');
        $("a").text('Butterfly');
        $('a').after('<ul>') ;
        $("a").attr("href","https://en.wikipedia.org/wiki/Butterfly");
        $('ul').append('<li>There are more than 20,000 species of butterflies.</li>');
        $('ul').append('<li>Butterflies have up to 12,000 eyes.</li>');
        $('ul').append('<li>Butterflies live only a few weeks.</li>');
        $('ul').append('<li>Butterflies use their feet to taste.</li>');
        $("li").addClass("result");
        $('#transform').hide();
        $('#restore').show();
        
    
    });

    $("#restore").on('click', function() {
        location.reload(true); 
    }); 
});
