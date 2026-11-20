
let result = document.getElementById("result");

let buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {

    button.onclick = function() {

        let value = button.innerText;

        if(value == "AC") {
            result.value = "";
        }

        else if(value == "DEL") {
            result.value = result.value.slice(0, -1);
        }

        else if(value == "=") {

            try {
                if(result.value == "") {
                    result.value = "";
                }
                else {
                    result.value = eval(result.value);
                }
            }
            catch {
                result.value = "Error";
            }

        }

        else {
            if(result.value == "Error") {
                result.value = "";
            }

            result.value = result.value + value;
        }

    };

});
