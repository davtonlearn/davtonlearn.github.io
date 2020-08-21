$.fn.extend({
    faceMocion: function(opciones) {

        var faceMocion = this;
        var NombreSelector = "Selector";
        var DescripcionFace = "--";

        defaults = {
            emotions: [{
                    "emotion": "I love",
                    "TextEmotion": "I love it"
                },
                {
                    "emotion": "annoying",
                    "TextEmotion": "It annoys me"
                },
                {
                    "emotion": "scares",
                    "TextEmotion": "scares me"
                },
                {
                    "emotion": "amuses",
                    "TextEmotion": "I amused"
                },
                {
                    "emocion": "gusta",
                    "TextoEmocion": "Me gusta"
                },
                {
                    "emotion": "sad",
                    "TextEmotion": "It saddens me"
                },
                {
                    "emotion": "amazement",
                    "TextEmotion": "amazes me"
                },
                {
                    "emotion": "happy",
                    "TextEmotion": "I'm glad"
                }
            ]
        };

        var options = $.extend({}, defaults, options);

        $(faceMocion).each(function(index) {
            var UnicoID = Date.now();
            $(this).attr("class", $(faceMocion).attr("class") + "" + UnicoID);
            var InitialState = "happy";
            if ($(this).val() ! = "") {
                InitialState = $(this).val();
            } else {
                $(this).val('happy');
            }
            FaceDescription = InitialStatus;
            StartItem = '';
            StartItem = StartItem + '<div data-description = "' + DescriptionFace + '"';
            StartItem = StartItem + 'reference-id = "' + UnicoID;
            StartItem = StartItem + '"class ="' + SelectorName;
            StartItem = StartItem + 'selectorFace' + InitialStatus + '"> </div>';
            $(this).before(StartItem);
        });

        $(document).ready(function() {
            BarraEmociones = '<div class = "faceMocion">';
            $.each(options.emotions, function(index, emo) {
                BarraEmociones = BarraEmociones + '<div data-description = "' + emo.TextoEmocion;
                BarraEmociones = BarraEmociones + '"class ="' + emo.emocion + '"> </div>';
            });
            BarraEmociones = BarraEmociones + '</div>';
            $(document.body).append(BarraEmociones);
            $('. faceMocion div').hover(function() {
                var title = $(this).attr('data-description');
                $(this).data('tipText', title).removeAttr('data-description');
                $('<p class = "TextText"> </p>').text(title).appendTo('body').fadeIn('slow');
            }, function() {
                $(this).attr('data-description', $(this).data('tipText'));
                $('. TextText').Remove();
            }).mousemove(function(e) {
                var MouseX = e.pageX - 20;
                var MouseY = e.pageY - 60;
                $('. MessageText').Css({
                    top: MouseY,
                    left: MouseX
                })
            });
        });

        $('.' + SelectorName).hover(function(e) {
            SelectorEmocion = $(this);
            var MouseX = e.pageX - 20;
            var MouseY = e.pageY - 60;
            $(".faceMocion").css({
                top: RatonY,
                left: RatonX
            });
            $(".faceMocion").show();
            $(".faceMocion div").click(function() {

                SelectorEmocion.attr("class", SelectorName + "selectorFace" + $(this).attr('class'));

                The SelectedInput = SelectorEmocion.attr("reference-id");
                $("." + The SelectedInput).val($(this).attr('class'));

            });
        });
        $(document).mouseup(function(e) {
            $(".faceMocion").hide();
        });
        $(faceMocion).hide();

    }
});