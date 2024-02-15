const Http = new XMLHttpRequest();
const url = "https://economia.awesomeapi.com.br/json/last/BTC-BRL";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    if (Http.readyState === 4 && Http.status === 200) {
        try {
            let response = JSON.parse(Http.responseText);
            let valor_btc = response.BTCBRL.low;
            let input_cripto = document.getElementById("input-criptocoin");

            input_cripto.value = valor_btc;
        } catch (error) {
            console.error("Erro: ", error);
        }
    }
}

function onInputValue() {
    let input_brl = document.getElementById("input-money_irl");
    let input_cripto = document.getElementById("input-criptocoin");

    let response = JSON.parse(Http.responseText);
    let valor_btc = response.BTCBRL.low;

    parseInt(valor_btc)
    
    if (input_cripto.value != "") {
        let calc = valor_btc * parseInt(input_brl.value)
        input_cripto.value = calc
    } else {
        console.log('teste')
        input_cripto.value = ""
    }

}

function CriptoCurrencyLink() {
    let select_cripto = document.getElementById("select-moedas_cripto");
    let url = `https://coinmarketcap.com/pt-br/currencies/${select_cripto.value}/`;

    window.open(url, '_blank');

}