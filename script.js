$('form').on('submit', function (e) {
    e.preventDefault()
});

$('form').on('click', '.submitButton', function () {
    let title = $('#movieTitle').val();
    let rating = $('#movieRating').val();
    $('#reviews').append("<li>" + title + " : " + rating + "</li>")
    $('li').last().append("<button>Remove</button>").addClass('removeButton');
    $('#movieTitle').val(' ');
    $('#movieRating').val(1);
})

$('#reviews').on('click', '.removeButton', function() {
    $(this).remove();
})