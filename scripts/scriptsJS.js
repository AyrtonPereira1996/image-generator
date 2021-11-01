window.onload = function() {

    var dataReload = window.document.querySelectorAll("[data-reload]");

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
            lLabelOptionTechnics: "Técnica",
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
        }
    }

    for (i = 0; i <= dataReload.length; i++) {
        dataReload[i].onclick = function() {
            setTimeout(function() {
                location.reload();
            }, 100);

        };
    }
}