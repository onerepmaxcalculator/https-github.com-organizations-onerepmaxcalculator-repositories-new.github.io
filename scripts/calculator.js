document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let [inputs, err] = readInputs()
    if (err != '') {
        displayError(err)
        return
    }

    fetch('https://onerepmaxcalculator.herokuapp.com/calculate', {
            method: 'POST',
            body: JSON.stringify({
                age: parseInt(inputs['age']),
                weight: parseFloat(inputs['weight']),
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Origin': 'https://onerepmaxcalculator.github.io'
            },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            document.getElementById('result').textContent = 'Calculated Max: ' + json['max'] + 'kg';
            document.getElementById('results').classList.remove('hidden');
            document.getElementById('scroll-to').scrollIntoView();

        });
});

function displayError(err) {
    document.getElementById('result').textContent = 'Error: ' + err;
}
