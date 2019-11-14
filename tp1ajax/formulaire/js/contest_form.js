
/*$.getJSON( "../formulaire/choix_js.json", function( json ) {
    for(let obj in json){
        document.getElementById("choix").innerHTML += '<option value="'+json[obj].label+'">'+json[obj].label+'</option>';
    }
});*/

fetch('../formulaire/choix_js.json')
    .then(function(response){
        console.log(response);
    }); 

$("#valider").click(function(){

    $.ajax({
        type: 'POST',
        dataType: "json",
        url: "http://miw.spipha.fr:3000/api/contest_js",
        data: {
            name : $('#name').val(),
            choix : $('#choix').val()
        },
        success: function(){

        }
    });

})