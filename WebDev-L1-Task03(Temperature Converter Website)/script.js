function convertTemperature() {
    const tempInputValue = document.getElementById('tempInput').value;
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    const resultDisplay = document.getElementById('resultDisplay');

    // Input validation check
    if (tempInputValue === '' || isNaN(tempInputValue)) {
        resultDisplay.innerHTML = '<span class="text-red-400 text-sm">Please enter a valid numerical temperature.</span>';
        return;
    }

    const temp = parseFloat(tempInputValue);
    let celsius;

    // Step 1: Normalize input temperature to Celsius base
    switch (fromUnit) {
        case 'C':
            celsius = temp;
            break;
        case 'F':
            celsius = (temp - 32) * (5 / 9);
            break;
        case 'K':
            celsius = temp - 273.15;
            break;
    }

    // Step 2: Convert base Celsius to requested target unit
    let converted;
    let unitSymbol;

    switch (toUnit) {
        case 'C':
            converted = celsius;
            unitSymbol = '°C';
            break;
        case 'F':
            converted = (celsius * 9 / 5) + 32;
            unitSymbol = '°F';
            break;
        case 'K':
            converted = celsius + 273.15;
            unitSymbol = 'K';
            break;
    }

    // Step 3: Display formatted calculation rounded to 2 decimal places
    resultDisplay.innerHTML = `
        <span class="text-slate-400 font-normal">${temp} ${getSymbol(fromUnit)} = </span>
        <span class="gradient-text font-black text-2xl">${converted.toFixed(2)} ${unitSymbol}</span>
    `;
}

function getSymbol(unitKey) {
    if (unitKey === 'C') return '°C';
    if (unitKey === 'F') return '°F';
    if (unitKey === 'K') return 'K';
    return '';
}