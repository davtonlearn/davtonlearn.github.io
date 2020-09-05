// Create Quiz
$(document).on('input', '.dg', function () {
	question = $('#question').val()
	option_a = $('#option_a').val()
	option_b = $('#option_b').val()
	option_c = $('#option_c').val()
	option_d = $('#option_d').val()

	if(question == '' || option_a == '' || option_b == '' || option_c == '' || option_d == ''){
		$('#next_question').attr('disabled', 'true');
	}
	else{
		$('#next_question').removeAttr('disabled');
	}
})

$(document).on('click', '#next_question', function (e) {
	e.preventDefault();
	question = $('#question').val()
	option_a = $('#option_a').val()
	option_b = $('#option_b').val()
	option_c = $('#option_c').val()
	option_d = $('#option_d').val()
	answer = $('input[name=correct_option]:checked').val()
		$.ajax({
		    url: 'https://reqres.in/api/users',
		    dataType: 'json',
		    type: 'post',
		    contentType: 'application/json',
		    data: JSON.stringify({"question":question,"option a":option_a,"option b":option_b,"option c":option_c,"option d":option_d,"answer":answer}),
		    processData: false,
		    success: function( data, textStatus, jQxhr ){
		        $('#question,#option_a,#option_b,#option_c,#option_d').val('')
		        $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
			      $("#success-alert").slideUp(500);
			    });
		    },
		    error: function( jqXhr, textStatus, errorThrown ){
		        console.log( errorThrown );
		    }
		});
});


// Edit Quiz
$(document).on('click', '.show_question', function (e) {
	e.preventDefault();
	id = $(this).attr('id')
	$.ajax({
        url: 'https://reqres.in/api/users',
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        data: { 
		    question_id: id, 
		},
        async: true,
        success: function( data, textStatus, jQxhr ){
            $('#question').val(data.data[id].id)
			$('#option_a').val(data.data[id].email)
			$('#option_b').val(data.data[id].last_name)
			$('#option_c').val(data.data[id].first_name)
			$('#option_d').val(data.data[id].last_name)
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
});

$(document).on('click', '#update_question', function (e) {
	e.preventDefault();
	question = $('#question').val()
	option_a = $('#option_a').val()
	option_b = $('#option_b').val()
	option_c = $('#option_c').val()
	option_d = $('#option_d').val()
	answer = $('input[name=correct_option]:checked').val()
		$.ajax({
		    url: 'https://reqres.in/api/users',
		    dataType: 'json',
		    type: 'post',
		    contentType: 'application/json',
		    data: JSON.stringify({"question":question,"option a":option_a,"option b":option_b,"option c":option_c,"option d":option_d,"answer":answer}),
		    processData: false,
		    success: function( data, textStatus, jQxhr ){
		        $('#question,#option_a,#option_b,#option_c,#option_d').val('')
		        $("#success-alert").fadeTo(2000, 500).slideUp(500, function() {
			      $("#success-alert").slideUp(500);
			    });
		    },
		    error: function( jqXhr, textStatus, errorThrown ){
		        console.log( errorThrown );
		    }
		});
});