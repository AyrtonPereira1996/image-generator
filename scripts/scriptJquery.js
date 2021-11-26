$(document).ready(function() {

    // INSTRUCTIONS TO GENERATE RANDOM PICTURES

    $('#btnButtonGenerator').on('click', function() {
        $('#frmImageGenerator').on('submit', function(evento) {
            evento.preventDefault();
        });

        let imgType = $('#optionImageType');
        let imgWidth = $('#larguraImagem');
        let imgHeight = $('#alturaImagem');
        let imgColourType = $('input[type="radio"]');
        let urlGenerator = "https://lorempixel.com/";

        if (imgType.val() != "" && imgWidth.val() != "" && imgHeight.val() != "") {
            $('input, select').css('border-color', '#69385c');
            if ($('#greyImage').is(':checked')) {

                imgColour = "g";
                imgType.prop('disabled', true);
                imgWidth.prop('disabled', true);
                imgHeight.prop('disabled', true);
                imgColourType.prop('disabled', true);

                urlGenerator += imgColour + "/" + imgWidth.val() + "/" + imgHeight.val() + "/" + imgType.val();

                $(':input', '#frmImageGenerator').not(':button, :submit, :reset, :hidden').val("").removeAttr('checked').removeAttr('selected');
                window.location.href = urlGenerator;

            } else if ($('#coloredImage').is(':checked')) {

                imgColour = "";
                imgType.prop('disabled', true);
                imgWidth.prop('disabled', true);
                imgHeight.prop('disabled', true);
                imgColourType.prop('disabled', true);

                urlGenerator += imgWidth.val() + "/" + imgHeight.val() + "/" + imgType.val();

                $(':input', '#frmImageGenerator').not(':button, :submit, :reset, :hidden').val("").removeAttr('checked').removeAttr('selected');
                window.location.href = urlGenerator;

            }
        } else {
            $('input, select').css('border-color', 'crimson');
            $('.span-required').fadeIn();

            bootbox.alert({
                size: 'medium',
                title: '    ',
                message: '<p>Por favor preencha os campos vázios !</p>',
            });
        }

    })
});