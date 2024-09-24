document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const unitInput = document.getElementById('unitInput').value;
    let convertedTemperature;
    let resultText = '';

    if (isNaN(temperatureInput)) {
        resultText = 'Please enter a valid number!';
    } else {
        switch (unitInput) {
            case 'C':
                convertedTemperature = (temperatureInput * 9/5) + 32; // Celsius to Fahrenheit
                resultText = `${temperatureInput} °C = ${convertedTemperature.toFixed(2)} °F`;
                convertedTemperature = temperatureInput + 273.15; // Celsius to Kelvin
                resultText += ` | ${temperatureInput} °C = ${convertedTemperature.toFixed(2)} K`;
                break;
            case 'F':
                convertedTemperature = (temperatureInput - 32) * 5/9; // Fahrenheit to Celsius
                resultText = `${temperatureInput} °F = ${convertedTemperature.toFixed(2)} °C`;
                convertedTemperature = (temperatureInput - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
                resultText += ` | ${temperatureInput} °F = ${convertedTemperature.toFixed(2)} K`;
                break;
            case 'K':
                convertedTemperature = temperatureInput - 273.15; // Kelvin to Celsius
                resultText = `${temperatureInput} K = ${convertedTemperature.toFixed(2)} °C`;
                convertedTemperature = (temperatureInput - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
                resultText += ` | ${temperatureInput} K = ${convertedTemperature.toFixed(2)} °F`;
                break;
        }
    }

    document.getElementById('result').innerText = resultText;
});
