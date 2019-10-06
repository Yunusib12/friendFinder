$(function() {

    const nScores = [];

    $("body").on("submit", function(event) {

        event.preventDefault();

        const user = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: nScores
        };

        //console.log(user);

        // SEND datas to the api 

        $.post("/api/friends", user, function(data) {

            // console.log(data);

            $("#matchName").text(data.name);
            $("#matchImg").attr("src", data.photo);

        });

        // display the result

        $('.modal').modal({
            dismissible: false,
            opacity: .5,
            inDuration: 300,
            outDuration: 200,
            startingTop: '4%',
            endingTop: '10%'
        });

        //clear form after submission
        $('#name').val("");
        $('#photo').val("");
        $('#q1').val("");
        $('#q2').val("");
        $('#q3').val("");
        $('#q4').val("");
        $('#q5').val("");
        $('#q6').val("");
        $('#q7').val("");
        $('#q8').val("");
        $('#q9').val("");
        $('#q10').val("");

    });


    $(".custom-select").change(function(event) {

        const value = $(this).find("option:selected").attr("value");
        const id = event.currentTarget.id + "-";

        nScores.push(value);

        const $question = $(`#${id}`);

        $question.removeClass()
            .addClass("my-3 p-3 bg-white rounded shadow-sm animated fadeOutRight")

        setTimeout(function() {
            $question.hide();
        }, 1000);

        // console.log(nScores);

    });

    $("#redo").on("click", function(event) {

        location.reload(true);
    });


});