window.onload = function() {

    const dataReload = document.querySelectorAll('[data-reload]');
    const btnGenerator = document.querySelector('#btnButtonGenerator');
    const frmGenerator = document.querySelector('#frmImageGenerator');
    const ulSquares = document.querySelector('ul.squares');
    const ulCircles = document.querySelector('ul.circles');


    // INTRUCTIONS TO DETECT IF USER TYPED LETTER OR NUMBERS

    document.querySelector('input[type = "number"]#alturaImagem').addEventListener('keypress', function(event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            alert("Desculpe, letras não são permitidas. Digite apenas números nos inputs");
        } else if (event.keyCode >= 97 && event.keyCode <= 122) {
            alert("Desculpe, letras não são permitidas. Digite apenas números nos inputs");
        }
    });
    document.querySelector('input[type = "number"]#larguraImagem').addEventListener('keypress', function(event) {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            alert("Desculpe, letras não são permitidas. Digite apenas números nos inputs");
        } else if (event.keyCode >= 97 && event.keyCode <= 122) {
            alert("Desculpe, letras não são permitidas. Digite apenas números nos inputs");
        }
    });

    // INTRUCTIONS OF ENGLISH AND PORTUGUESE LANGUAGES 

    var language = {
        pt: {
            labelToChooseLang: "Escolha o idioma:",
            labelMainTitle: "Gerador de Imagens",
            labelFieldWhatToDo: "Preencha os campos abaixo para gerar a imagem:",
            labelFieldRequired: "* campos obrigatórios",
            labelImgDimensions: "Dimensão da imagem ",
            labelTypeImgColor: "Côr da imagem",
            labelColorGreysScale: "Tons de cinza",
            labelColoredColorScale: "Colorida",
            labelImgType: "Tipo de imagem",
            labelBlurImage: "Desfocar imagem aleatória? :",
            labelYesToBlurImage: "Sim",
            labelNoToBlurImage: "Não",
            labelBlurImgValues: "Valor de desfocagem entre 0 - 10:",
            labelBlurValue: "Desfocagem:",
            btnButtonGenerator: "Gerar imagem"

        },

        eng: {
            labelToChooseLang: "Choose language:",
            labelMainTitle: "Image generator",
            labelFieldWhatToDo: "Fill in the fields below to generate the image:",
            labelFieldRequired: "* campos obrigatórios",
            labelImgDimensions: "Image dimensions :",
            labelTypeImgColor: "Type of image",
            labelColorGreysScale: "Gray scales",
            labelColoredColorScale: "Colored",
            labelImgType: "Image type",
            labelBlurImage: "Blur the random image? :",
            labelYesToBlurImage: "Yes",
            labelNoToBlurImage: "No",
            labelBlurImgValues: "Blur value between 0 - 10:",
            labelBlurValue: "Blur value:",
            btnButtonGenerator: "Generate image"

        }
    }

    if (window.location.hash) {
        if (window.location.hash === "#eng") {
            lblLang.textContent = language.eng.labelToChooseLang;
            lblMainTitle.textContent = language.eng.labelMainTitle;
            lblWhatToDo.textContent = language.eng.labelFieldWhatToDo;
            lblFieldRequired.textContent = language.eng.labelFieldRequired;
            lblImgDimensions.textContent = language.eng.labelImgDimensions;
            lblImgColor.textContent = language.eng.labelTypeImgColor;
            lblColorGreysScale.textContent = language.eng.labelColorGreysScale;
            lblColoredColorScale.textContent = language.eng.labelColoredColorScale;
            lblBlurImage.textContent = language.eng.labelBlurImage;
            lblYesToChooseToBlur.textContent = language.eng.labelYesToBlurImage;
            lblNoToChooseToBlur.textContent = language.eng.labelNoToBlurImage;
            lblBlurImgValues.textContent = language.eng.labelBlurImgValues;
            lblBlurValue.textContent = language.eng.labelBlurValue;
            btnButtonGenerator.textContent = language.eng.btnButtonGenerator;
            document.querySelector('#alturaImagem').setAttribute('placeholder', 'Height');
            document.querySelector('#larguraImagem').setAttribute('placeholder', 'Width');


        }
        if (window.location.hash === "#pt") {
            lblLang.textContent = language.pt.labelToChooseLang;
            lblMainTitle.textContent = language.pt.labelMainTitle;
            lblWhatToDo.textContent = language.pt.labelFieldWhatToDo;
            lblFieldRequired.textContent = language.pt.labelFieldRequired;
            lblImgDimensions.textContent = language.pt.labelImgDimensions;
            lblImgColor.textContent = language.pt.labelTypeImgColor;
            lblColorGreysScale.textContent = language.pt.labelColorGreysScale;
            lblColoredColorScale.textContent = language.pt.labelColoredColorScale;
            lblBlurImage.textContent = language.pt.labelBlurImage;
            yesToChooseToBlur.textContent = language.pt.labelYesToBlurImage;
            noToChooseToBlur.textContent = language.pt.labelNoToBlurImage;
            lblBlurImgValues.textContent = language.pt.labelBlurImgValues;
            lblBlurValue.textContent = language.pt.labelBlurValue;
            btnButtonGenerator.textContent = language.pt.btnButtonGenerator;
            document.querySelector('#alturaImagem').setAttribute('placeholder', 'Altura');
            document.querySelector('#larguraImagem').setAttribute('placeholder', 'Largura');
        }
    }

    for (let i = 0; i < dataReload.length; i++) {
        dataReload[i].addEventListener('click', function() {
            setTimeout(function() {
                window.location.reload();
            }, 100);
        });
    };

    // INSTRUCTIONS TO CONTROL SQUARES OBJECTS

    for (let i = 0; i < 8; i++) {
        const li = document.createElement('li');
        li.classList.add('li-square');

        const getRandomValues = function(min, max) {
            return Math.random() * (max - min) + min;
        }

        const size = Math.floor(getRandomValues(10, 50));
        const position = Math.floor(getRandomValues(1, 75));
        const delay = getRandomValues(5, 0.1);
        const duration = getRandomValues(24, 12);

        li.style.width = `${size}px`;
        li.style.height = `${size}px`;
        li.style.bottom = `-${size}px`;

        li.style.left = `${position}%`;

        li.style.animationDelay = `${delay}s`;
        li.style.animationDuration = `${duration}s`;
        li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;



        ulSquares.appendChild(li);

        li.addEventListener('mouseover', function() {
            li.style.animationPlayState = "paused";
        });

        li.addEventListener('mouseout', function() {
            li.style.animationPlayState = "running";
        });


    }

    // INSTRUCTIONS TO CONTROL CIRCLES OBJECTS

    for (let i = 0; i < 8; i++) {
        const li = document.createElement('li');
        li.classList.add('li-circle');


        const getRandomValues = function(min, max) {
            return Math.random() * (max - min) + min;
        }

        const size = Math.floor(getRandomValues(10, 50));
        const position = Math.floor(getRandomValues(1, 75));
        const delay = getRandomValues(5, 0.1);
        const duration = getRandomValues(24, 12);

        li.style.width = `${size}px`;
        li.style.height = `${size}px`;
        li.style.bottom = `-${size}px`;
        li.style.left = `${size}%`;


        li.style.animationDelay = `${delay}s`;
        li.style.animationDuration = `${duration}s`;
        li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

        ulCircles.appendChild(li);

        li.addEventListener('mouseover', function() {
            li.style.animationPlayState = "paused";
        });

        li.addEventListener('mouseout', function() {
            li.style.animationPlayState = "running";
        });


    }

    // HIDDEN OPTION SCRIPT

    document.querySelector('#inputRange').addEventListener('change', function() {
        document.querySelector('#rangeValue').innerHTML = this.value;
    });









}