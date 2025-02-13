// Ini file Javascript

console.log('Javascript is working!');

let celciusToFahrenheit = true; // Default mode

function validateForm() {
    let input = document.getElementById('main-input');
    let output = document.getElementById('main-result');

    console.log(input.value);

    if (input.value === '') {
        alert('Input cannot be empty');
        return;
    }

    let result, calculation;
    if (celciusToFahrenheit) {
        result = convertToFahrenheit(input.value);
        calculation = `S °F = ${input.value} °C * (9/5) + 32 = ${result} °F`;
    } else {
        result = convertToCelsius(input.value);
        calculation = `S °C = (${input.value} °F - 32) * (5/9) = ${result} °C`;
    }

    output.value = result;
    document.getElementById('calculation-method').value = calculation;
    console.log('Konversi berhasil:', result);
}

/// Fungsi Konversi
function convertToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function reset() {
    document.getElementById('main-input').value = '';
    document.getElementById('main-result').value = '';
    document.getElementById('calculation-method').value = '';
}

document.addEventListener("DOMContentLoaded", function () {
    const labelInput = document.getElementById("labelInput");
    const labelResult = document.getElementById("labelResult");
    const inputField = document.getElementById("main-input");
    const resultField = document.getElementById("main-result");
    const reverseButton = document.getElementById("reverseButton");

    if (reverseButton) {
        reverseButton.addEventListener("click", function () {
            console.log("Reverse button clicked!");
            celciusToFahrenheit = !celciusToFahrenheit;

            if (celciusToFahrenheit) {
                labelInput.innerHTML = 'Celsius (&deg;C)';
                labelResult.innerHTML = 'Fahrenheit (&deg;F)';
                inputField.placeholder = "Enter temperature in Celsius";
            } else {
                labelInput.innerHTML = 'Fahrenheit (&deg;F)';
                labelResult.innerHTML = 'Celsius (&deg;C)';
                inputField.placeholder = "Enter temperature in Fahrenheit";
            }

            // **Tukar tempat input dan output**
            let temp = inputField.value;
            inputField.value = resultField.value;
            resultField.value = temp;
        });
    } else {
        console.error("Element with id 'reverseButton' not found.");
    }
});
