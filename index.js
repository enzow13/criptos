const Http = new XMLHttpRequest();

addEventListener("DOMContentLoaded", () => {
    let cripto_name = document.getElementById("select-moedas_cripto").value;
    
    if (cripto_name != "BTC") {
        Http.open("GET", `https://economia.awesomeapi.com.br/json/last/${cripto_name}-BRL`);
        Http.send();
    } else {
        Http.open("GET", `https://economia.awesomeapi.com.br/json/last/BTC-BRL`);
        Http.send();
    }
})

function onChangeCripto() {
    let cripto_name = document.getElementById("select-moedas_cripto").value;
    Http.open("GET", `https://economia.awesomeapi.com.br/json/last/${cripto_name}-BRL`);
    Http.send();
}

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
    let cripto_name = document.getElementById("select-moedas_cripto").value;
    let input_brl = parseFloat(document.getElementById("input-money_irl").value);
    let input_cripto = document.getElementById("input-criptocoin");
    let response = JSON.parse(Http.responseText);
    let valor_cripto = parseFloat(response[cripto_name + "BRL"].low)

    /* Printa o valor das variáveis para ver erros

    console.log(`Valor: ${valor_cripto}, Tipo: ${typeof valor_cripto}/n Valor: ${input_brl}, Tipo: ${typeof input_brl}`)
    console.log(`${valor_cripto + input_brl}`)
    */

    if (!isNaN(input_brl)) {
        let calc = input_brl / valor_cripto;
        input_cripto.value = calc.toFixed(6);
    } else {
        input_cripto.value = ""
    }

}

// Levar ao site de gráficos (coin market)
function CriptoCurrencyLink() {
    let select_cripto = document.getElementById("select-moedas_cripto");
    let url = `https://coinmarketcap.com/pt-br/currencies/${select_cripto.value}/`;

    window.open(url, '_blank');

}