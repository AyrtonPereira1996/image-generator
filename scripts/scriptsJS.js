window.onload = function() {

    const dataReload = document.querySelectorAll('[data-reload]');
    const btnGenerator = document.querySelector('#btnButtonGenerator');
    const frmGenerator = document.querySelector('#frmImageGenerator');
    const ulSquares = document.querySelector('ul.squares');
    const ulCircles = document.querySelector('ul.circles');

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
            labelOptionSelect: "Escolha o tipo de imagem : ",
            labelOptionAbstract: "Abstracto",
            labelOptionAnimals: "Animal",
            labelOptionBusiness: "Negócio",
            labelOptionCats: "Gatos",
            labelOptionCity: "Cidade",
            labelOptionFood: "Comida",
            labelOptionNightLife: "Vida noturna",
            labelOptionFashion: "Fashion",
            labelOptionPeople: "Pessoas",
            labelOptionNature: "Natureza",
            labelOptionSports: "Desporto",
            labelOptionTechnics: "Técnica",
            labelOptionTransport: "Transporte",
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
            labelOptionSelect: "Choose the type of image :",
            labelOptionAbstract: "Abstract",
            labelOptionAnimals: "Animal",
            labelOptionBusiness: "Business",
            labelOptionCats: "Cats",
            labelOptionCity: "City",
            labelOptionFood: "Food",
            labelOptionNightLife: "Night life",
            labelOptionFashion: "Fashion",
            labelOptionPeople: "People",
            labelOptionNature: "Nature",
            labelOptionSports: "Sports",
            labelOptionTechnics: "Technics",
            labelOptionTransport: "Transport",
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
            lblImgType.textContent = language.eng.labelImgType;
            lblOptionSelect.textContent = language.eng.labelOptionSelect;
            lblOptionAbstract.textContent = language.eng.labelOptionAbstract;
            lblOptionAnimals.textContent = language.eng.labelOptionAnimals;
            lblOptionBusiness.textContent = language.eng.labelOptionBusiness;
            lblOptionCats.textContent = language.eng.labelOptionCats;
            lblOptionCity.textContent = language.eng.labelOptionCity;
            lblOptionFood.textContent = language.eng.labelOptionFood;
            lblOptionNightLife.textContent = language.eng.labelOptionNightLife;
            lblOptionFashion.textContent = language.eng.labelOptionFashion;
            lblOptionPeople.textContent = language.eng.labelOptionPeople;
            lblOptionNature.textContent = language.eng.labelOptionNature;
            lblOptionSports.textContent = language.eng.labelOptionSports;
            lblOptionTechnics.textContent = language.eng.labelOptionTechnics;
            lblOptionTransport.textContent = language.eng.labelOptionTransport;
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
            lblImgType.textContent = language.pt.labelImgType;
            lblOptionSelect.textContent = language.pt.labelOptionSelect;
            lblOptionAbstract.textContent = language.pt.labelOptionAbstract
            lblOptionAnimals.textContent = language.pt.labelOptionAnimals;
            lblOptionBusiness.textContent = language.pt.labelOptionBusiness;
            lblOptionCats.textContent = language.pt.labelOptionCats;
            lblOptionCity.textContent = language.pt.labelOptionCity;
            lblOptionFood.textContent = language.pt.labelOptionFood;
            lblOptionNightLife.textContent = language.pt.labelOptionNightLife;
            lblOptionFashion.textContent = language.pt.labelOptionFashion;
            lblOptionPeople.textContent = language.pt.labelOptionPeople;
            lblOptionNature.textContent = language.pt.labelOptionNature;
            lblOptionSports.textContent = language.pt.labelOptionSports;
            lblOptionTechnics.textContent = language.pt.labelOptionTechnics;
            lblOptionTransport.textContent = language.pt.labelOptionTransport;
            btnButtonGenerator.textContent = language.pt.btnButtonGenerator;
            document.querySelector('#alturaImagem').setAttribute('placeholder', 'Altura');
            document.querySelector('#larguraImagem').setAttribute('placeholder', 'Largura');
        }
    }

    for (let i = 0; i < dataReload.length; i++) {
        dataReload[i].addEventListener('click', function() {
            setTimeout(function() {
                location.reload();
            }, 100);
        });
    };

    for (let i = 0; i < 11; i++) {
        const li = document.createElement('li');
        li.classList.add('li-square');

        const getRandomValues = function(min, max) {
            return Math.random() * (max - min) + min;
        }

        const size = Math.floor(getRandomValues(10, 100));
        const position = Math.floor(getRandomValues(1, 99));
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

    for (let i = 0; i < 8; i++) {
        const li = document.createElement('li');
        li.classList.add('li-circle');


        const getRandomValues = function(min, max) {
            return Math.random() * (max - min) + min;
        }

        const size = Math.floor(getRandomValues(10, 100));
        const position = Math.floor(getRandomValues(1, 99));
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


}