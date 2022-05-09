
const Http = new XMLHttpRequest();
const url = "https://economia.awesomeapi.com.br/json/last/BTC-BRL";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
}


function CriptoCurrencyLink() {
    let select_cripto = document.getElementById("select-moedas_cripto");
    let url = `https://coinmarketcap.com/pt-br/currencies/${select_cripto.value}/`;

    window.open(url, '_blank');

}