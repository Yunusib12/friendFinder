$(function() {

    const user = {
        name: $("#name").val().trim(),
        photo: $("#photo").val().trim(),
        scores: []
    };



    $(".custom-select").change(function(event) {


        const value = $(this).find("option:selected").attr("value");
        const id = event.currentTarget.id + "-";

        console.log(`My Value ${value} - My ID ${id}`);

        user.scores.push(value);

        const $question = $(`#${id}`);

        $question.removeClass()
            .addClass("my-3 p-3 bg-white rounded shadow-sm animated fadeOutRight")

        setTimeout(function() {
            $question.hide();
        }, 1000);

        console.log(user.scores);

    });





});