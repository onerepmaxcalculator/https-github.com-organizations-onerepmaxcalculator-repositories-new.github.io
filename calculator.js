document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var age = document.getElementById("input-age").value;
    var weight = document.getElementById("input-weight").value;

    if (!isInt(age)) {
        displayError('Age must be a whole number')
        return
    }
    if (isNaN(parseFloat(weight))) {
        displayError('Weight must be a number')
        return
    }

    fetch('https://onerepmaxcalculator.herokuapp.com/calculate', {
            method: 'POST',
            body: JSON.stringify({
                age: parseInt(age),
                weight: parseFloat(weight),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Origin': 'https://onerepmaxcalculator.github.io'
            },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            document.getElementById('result').textContent = 'Calulated Max: ' + json['max'] + 'kg';
        });
});

function displayError(err) {
    document.getElementById('result').textContent = 'Error: ' + err;
}

function isInt(value) {
    var er = /^-?[0-9]+$/;
    return er.test(value);
}
