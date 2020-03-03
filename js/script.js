
var exchangeRatioUsdVnd = 23000

let currency = prompt("VND or USD")


if (currency === "vnd") {
    let amount = prompt("How much?");
    if (!Number(amount)) {
        alert("Viết sai viết lại")
        let amount = prompt("How much?")
        console.log("Value is" + " " + vndUsd(amount))
    }
    else if (Number(amount) < 0) {
        alert("Viết sai viết lại")
        let amount = prompt("How much?")
        console.log("Value is" + " " + vndUsd(amount))
    } else {
        console.log("Value is" + " " + vndUsd(amount));
    }
}

else if (currency === "usd") {
    let amount = prompt("How much?");
    if (!Number(amount)) {
        alert("Viết sai viết lại")
        let amount = prompt("How much?")
        console.log("Value is" + " " + usdVnd(amount))
    }
    else if (Number(amount) < 0) {
        alert("Viết sai viết lại")
        let amount = prompt("How much?")
        console.log("Value is" + " " + usdVnd(amount))
    } else {
        console.log("Value is" + " " + usdVnd(amount));
    }

}

else {
    alert("viet sai")
    let currency = prompt("VND or USD")
    if (currency === "vnd") {
        let amount = prompt("How much?");
        if (!Number(amount)) {
            alert("Viết sai viết lại")
            let amount = prompt("How much?")
            console.log("Value is" + " " + vndUsd(amount))
        }
        else if (Number(amount) < 0) {
            alert("Viết sai viết lại")
            let amount = prompt("How much?")
            console.log("Value is" + " " + vndUsd(amount))
        } else {
            console.log("Value is" + " " + vndUsd(amount));
        }
    }

    else if (currency === "usd") {
        let amount = prompt("How much?");
        if (!Number(amount)) {
            alert("Viết sai viết lại")
            let amount = prompt("How much?")
            console.log("Value is" + " " + usdVnd(amount))
        }
        else if (Number(amount) < 0) {
            alert("Viết sai viết lại")
            let amount = prompt("How much?")
            console.log("Value is" + " " + usdVnd(amount))
        } else {
            console.log("Value is" + " " + usdVnd(amount));
        }

    }

}


// function - VND => USD
function vndUsd(amount) {
    let convertAmount = (amount / exchangeRatioUsdVnd).toFixed(2);
    return convertAmount;
};


// function - USD => VND
function usdVnd(amount) {
    let convertAmount = (amount * exchangeRatioUsdVnd)
    return convertAmount
}


