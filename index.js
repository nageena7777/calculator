function number(num) {
    var result = document.getElementById("input");
    result.value += num;
}

function result() {
    var result = document.getElementById("input");
    result.value = eval(result.value);
}

function clear() {
    result.value = " ";
}
