$(document).ready(function() {



    // INSTRUCTIONS TO GENERATE RANDOM PICTURES

    $('#btnButtonGenerator').on('click', function() {
        $('#frmImageGenerator').on('submit', function(evento) {
            evento.preventDefault();
        });


        var imgWidth = $('#larguraImagem');
        var imgHeight = $('#alturaImagem');
        var imgColourType = $('input[name="colorOption"]');
        var imgBlured = $('input[name="chooseToBlur"]');
        var valueOfBlurOption = $('#inputRange').val();
        var urlGenerator = "https://picsum.photos/";

        if (imgWidth.val() != "" && imgHeight.val() != "" && $('#noToChooseToBlur').is(':checked') && imgColourType.is(':checked') && imgBlured.is(':checked')) {

            if ($('#greyImage').is(':checked')) {

                imgColour = "?grayscale";
                // imgType.prop('disabled', true);
                imgWidth.prop('disabled', true);
                imgHeight.prop('disabled', true);
                imgColourType.prop('disabled', true);

                urlGenerator += imgWidth.val() + "/" + imgHeight.val() + imgColour;

                $(':input', '#frmImageGenerator').not(':button, :submit, :reset, :hidden').val("").removeAttr('checked').removeAttr('selected');
                window.open(urlGenerator, '_blank');
                window.location.reload();

            } else if ($('#coloredImage').is(':checked')) {

                // imgType.prop('disabled', true);
                imgWidth.prop('disabled', true);
                imgHeight.prop('disabled', true);
                imgColourType.prop('disabled', true);

                urlGenerator += imgWidth.val() + "/" + imgHeight.val();

                $(':input', '#frmImageGenerator').not(':button, :submit, :reset, :hidden').val("").removeAttr('checked').removeAttr('selected');
                window.open(urlGenerator, '_blank');
                window.location.reload();

            }

        }
        if (imgWidth.val() != "" && imgHeight.val() != "" && $('#yesToChooseToBlur').is(':checked') && imgColourType.is(':checked') && imgBlured.is(':checked')) {

            if ($('#greyImage').is(':checked') && valueOfBlurOption > 0) {

                imgBlur = "&blur=";
                imgColour = "?grayscale";
                // imgType.prop('disabled', true);
                imgWidth.prop('disabled', true);
                imgHeight.prop('disabled', true);
                imgColourType.prop('disabled', true);

                urlGenerator += imgWidth.val() + "/" + imgHeight.val() + imgColour + imgBlur + valueOfBlurOption;

                $(':input', '#frmImageGenerator').not(':button, :submit, :reset, :hidden').val("").removeAttr('checked').removeAttr('selected');
                window.open(urlGenerator, '_blank');
                window.location.reload();

            } else if ($('#greyImage').is(':checked') && valueOfBlurOption == 0) {

                imgBlur = "&blur";
                imgColour = "?grayscale";
                // imgType.prop('disabled', true);
                imgWidth.prop('disabled', true);
                imgHeight.prop('disabled', true);
                imgColourType.prop('disabled', true);

                urlGenerator += imgWidth.val() + "/" + imgHeight.val() + imgColour + imgBlur;

                $(':input', '#frmImageGenerator').not(':button, :submit, :reset, :hidden').val("").removeAttr('checked').removeAttr('selected');
                window.open(urlGenerator, '_blank');
                window.location.reload();

            }

            if ($('#coloredImage').is(':checked') && valueOfBlurOption > 0) {

                imgBlur = "?blur=";
                // imgType.prop('disabled', true);
                imgWidth.prop('disabled', true);
                imgHeight.prop('disabled', true);
                imgColourType.prop('disabled', true);

                urlGenerator += imgWidth.val() + "/" + imgHeight.val() + imgBlur + valueOfBlurOption;

                $(':input', '#frmImageGenerator').not(':button, :submit, :reset, :hidden').val("").removeAttr('checked').removeAttr('selected');
                window.open(urlGenerator, '_blank');
                window.location.reload();

            } else if ($('#coloredImage').is(':checked') && valueOfBlurOption == 0) {

                imgBlur = "?blur";
                // imgType.prop('disabled', true);
                imgWidth.prop('disabled', true);
                imgHeight.prop('disabled', true);
                imgColourType.prop('disabled', true);

                urlGenerator += imgWidth.val() + "/" + imgHeight.val() + imgBlur;

                $(':input', '#frmImageGenerator').not(':button, :submit, :reset, :hidden').val("").removeAttr('checked').removeAttr('selected');
                window.open(urlGenerator, '_blank');
                window.location.reload();
            }

        }
        if ((imgWidth.val() == "" && imgHeight.val() == "" && !$('#noToChooseToBlur').is(':checked') && !imgColourType.is(':checked') && !imgBlured.is(':checked')) || (imgWidth.val() == "" && imgHeight.val() == "" && !$('#yesToChooseToBlur').is(':checked') && !imgColourType.is(':checked') && !imgBlured.is(':checked'))) {

            $('input, select').css('border-color', 'crimson');
            $('.span-required').fadeIn();


            bootbox.alert({
                size: 'medium',
                title: '    ',
                message: '<p>Por favor preencha os campos vázios !</p>',
            });
        }

    })

    // HIDDEN OPTION SCRIPT

    $('#yesToChooseToBlur').on('change', function() {

        if ($(this).prop('checked') == true) {

            $('#section-to-choose-amount-blur').css('display', 'block');
            $('main section#main-section').addClass('expanded');
            $('#section-to-choose-amount-blur').addClass('animationSectionAmountBlur');
        } else if ($(this).prop('checked') == false) {
            $('#section-to-choose-amount-blur').css('display', 'none');
            $('main section#main-section').removeClass('expanded');
        }
    });

    $('#noToChooseToBlur').on('change', function() {
        if ($(this).prop('checked') == true) {
            $('#section-to-choose-amount-blur').css('display', 'none');
            $('main section#main-section').removeClass('expanded');
        }
    })

});