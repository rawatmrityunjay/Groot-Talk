var buttonTranslate = document.querySelector("#translate-button");
var groot_input = document.querySelector("#input")
var groot_output = document.querySelector("#output")

var api_url = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(input){

    return api_url + "?" + "text=" + input

}

function clickHandler(){

    var input_text = groot_input.value;

    fetch(getTranslationURL(input_text))
    .then(response => response.json())
    .then(json => {

        var translatedText = json.contents.translated;
        groot_output.innerText = translatedText;

    })

}

buttonTranslate.addEventListener("click",clickHandler)