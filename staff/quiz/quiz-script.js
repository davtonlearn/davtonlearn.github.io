(function() {
    var questions = [{
        question: "What is 2*5?",
        choices: [2, 5, 10, 15, 20],
        correctAnswer: 2
    }, {
        question: "What is 3*6?",
        choices: [3, 6, 9, 12, 18],
        correctAnswer: 4
    }, {
        question: "What is 8*9?",
        choices: [72, 99, 108, 134, 156],
        correctAnswer: 0
    }, {
        question: "What is 1*7?",
        choices: [4, 5, 6, 7, 8],
        correctAnswer: 3
    }, {
        question: "What is 8*8?",
        choices: [20, 30, 40, 50, 64],
        correctAnswer: 4
    }];

    var questionCounter = 0; //Tracks question number
    var selections = []; //Array containing user choices
    var quiz = $('#quiz'); //Quiz div object

    var total_seconds = 60;
    var c_minutes = parseInt(total_seconds / 60);
    var c_seconds = parseInt(total_seconds % 60);
    var timer;

    $('.result').hide();

    // Display initial question
    displayNext();

    // Click handler for the 'next' button
    $('#next').on('click', function(e) {
        e.preventDefault();

        // Suspend click listener during fade animation
        if (quiz.is(':animated')) {
            return false;
        }
        choose();

        // If no user selection, progress is stopped
        if (isNaN(selections[questionCounter])) {
            alert('Please make a selection!');
        } else {
            questionCounter++;
            displayNext();
        }
    });

    // Click handler for the 'prev' button
    $('#prev').on('click', function(e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        choose();
        questionCounter--;
        displayNext();
    });

    // Click handler for the 'Start Over' button
    $('#start').on('click', function(e) {
        e.preventDefault();

        if (quiz.is(':animated')) {
            return false;
        }
        questionCounter = 0;
        selections = [];
        displayNext();
        $('#start').hide();
    });

    // Animates buttons on hover
    $('.button').on('mouseenter', function() {
        $(this).addClass('active');
    });
    $('.button').on('mouseleave', function() {
        $(this).removeClass('active');
    });

    // Creates and returns the div that contains the questions and 
    // the answer selections
    function createQuestionElement(index) {
        var qElement = $('<div>', {
            id: 'question'
        });

        var header = $('<h5 class="mb-5">Question ' + (index + 1) + ' of ' + questions.length + ':</h5>');
        qElement.append(header);

        var question = $('<p>').append(questions[index].question);
        qElement.append(question);

        var radioButtons = createRadios(index);
        qElement.append(radioButtons);

        return qElement;
    }

    // Creates a list of the answer choices as radio inputs
    function createRadios(index) {
        var radioList = $('<ul class="list-unstyled">');
        var item;
        var input = '';
        for (var i = 0; i < questions[index].choices.length; i++) {
            item = $('<li class="my-3">');
            input = '<input class="mr-3" type="radio" name="answer" value=' + i + ' />';
            input += questions[index].choices[i];
            item.append(input);
            radioList.append(item);
        }
        return radioList;
    }

    // Reads the user selection and pushes the value to an array
    function choose() {
        selections[questionCounter] = +$('input[name="answer"]:checked').val();
    }

    // Displays next requested element
    function displayNext() {
        quiz.fadeOut(function() {
            $('#question').remove();

            if (questionCounter < questions.length) {
                var nextQuestion = createQuestionElement(questionCounter);
                quiz.append(nextQuestion).fadeIn();
                if (!(isNaN(selections[questionCounter]))) {
                    $('input[value=' + selections[questionCounter] + ']').prop('checked', true);
                }

                // Controls display of 'prev' button
                if (questionCounter === 1) {
                    $('#prev').show();
                } 
                else if (questionCounter === 0) {

                    $('#prev').hide();
                    $('#next').show();
                }
                if (questionCounter === questions.length - 1) {
                    $('#next').text('Submit');
                }
                else{

                    $('#next').text('Next');
                }
            } else {
                var scoreElem = displayScore();
                quiz.append(scoreElem).fadeIn();
                $('#next').hide();
                $('#prev').hide();
                $('.test').hide();
                $('.result').show();
                $('.quiz-submitted').show();
                displayScore();
                clearInterval(timer);
            }
        });
    }

    // Computes score and returns a paragraph element to be displayed
    function displayScore() {
        // var score = $('<p>',{id: 'question'});
        var score = $('.result-show');

        var numCorrect = 0;
        for (var i = 0; i < selections.length; i++) {
            if (selections[i] === questions[i].correctAnswer) {
                numCorrect++;
            }
        }

        if (numCorrect <= 1){
            score.append('You got ' + numCorrect + ' question out of ' +
                questions.length + ' right!!!');
        } else {
            score.append('You got ' + numCorrect + ' questions out of ' +
                questions.length + ' right!!!');
        }
        return score;
    }

    function CheckTime() {
        document.getElementById("quiz-time-left").innerHTML = 'Time Left: ' + c_minutes + ' minutes ' + c_seconds + ' seconds ';

        if (total_seconds <= 0) {
            // score();
            $('.result').show();
            $('.quiz-ended').show();
            $('.test').hide();
            displayScore();
        } else {
            total_seconds = total_seconds - 1;
            c_minutes = parseInt(total_seconds / 60);
            c_seconds = parseInt(total_seconds % 60);
            timer = setTimeout(CheckTime, 1000);
        }
    }
    timer = setTimeout(CheckTime, 1000);

})();