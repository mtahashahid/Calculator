function getNumber(num) {
    //console.log(num)
    var result = document.getElementById("result")
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result")
    result.value = " ";
}

function getResult() {
    var result = document.getElementById("result")
    result.value = eval(result.value)
}

function percent() {
    var result = document.getElementById("result")
    result.value = result.value / 100;
}

function square() {
    var result = document.getElementById("result")
    result.value = result.value * result.value;
}

function clearOne() {
    var result = document.getElementById("result")
    result.value = result.value.substring(0, result.value.length - 1);
}

function squareRoot() {
    var result = document.getElementById("result")
    result.value = Math.sqrt(result.value)
}