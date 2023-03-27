function cal(num) {
    var input = document.getElementById("btn");
    input.value += num;
    console.log(input)
}

function ans(){
    var inputValue = document.getElementById("btn");
    var output = eval(inputValue.value);
    inputValue.value = output
}