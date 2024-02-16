const Http = new XMLHttpRequest();

function getCriptoURL() {
    cripto_name = document.getElementById("select-moedas_cripto").value
    return `https://economia.awesomeapi.com.br/json/last/${cripto_name}-BRL`
}
Http.open("GET", getCriptoURL());
Http.send();

Http.onreadystatechange = () => {
    if (Http.readyState === 4 && Http.status === 200) {
        try {
            let input_cripto = document.getElementById("input-criptocoin");
            input_cripto.value = "";
        } catch (error) {
            console.error(`Erro: ${error} HTTP_STATE: ${Http.readyState}`);
        }
    }
}

function onInputValue() {
    let input_brl = document.getElementById("input-money_irl");
    let input_cripto = document.getElementById("input-criptocoin");
    let response = JSON.parse(Http.responseText);
    let valor_btc = response.BTCBRL.low;

    parseInt(valor_btc)
    parseInt(input_brl.value)
    
    if (input_brl.value != "") {
        let calc = input_brl.value / valor_btc
        input_cripto.value = calc.toFixed(6)
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