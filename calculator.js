document.querySelector('.alert-btn').addEventListener('click', function() {
    alert("JavaScript is working");
});

document.querySelector('.get-btn').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((json) => {
            console.log(json)
            document.getElementById('result').textContent = 'API response: ' + JSON.stringify(json);
        });
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var title = document.getElementById("input-title").value;
    var body = document.getElementById("input-body").value;
    var userID = document.getElementById("input-user-id").value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: title,
                body: body,
                userId: userID,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            document.getElementById('result').textContent = 'API response: ' + JSON.stringify(json);
        });
});
