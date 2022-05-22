
function readInputs() {
    age = read('age')
    err = validateAge(age)
    if (err != '') {
        return [null, err]
    }
    gender = read('gender')
    err = validateGender(gender)
    if (err != '') {
        return [null, err]
    }
    height = read('height')
    err = validateHeight(height)
    if (err != '') {
        return [null, err]
    }
    weight = read('weight')
    err = validateWeight(weight)
    if (err != '') {
        return [null, err]
    }
    lift = read('lift')
    err = validateLift(lift)
    if (err != '') {
        return [null, err]
    }
    return [{
        'age': age,
        'gender': gender,
        'height': height,
        'weight': weight,
        'lift': lift,
    }, '']
}

function read(param) {
    return document.getElementById(`input-${param}`).value;
}

function validateAge(a) {
    if (!isInt(a)) {
        return 'Age must be a whole number'
    }
    return ''
}

function validateGender(g) {
    if (g != 'Male' && g != 'Female' && g != 'Other') {
        return `Gender must be Male, Female or Non-binary/Other`
    }
    return ''
}

function validateWeight(w) {
    if (w == '') {
        return ''
    }
    if (isNaN(parseFloat(weight))) {
        return 'Weight must be a number'
    }
    return ''
}

function validateHeight(h) {
    if (h == '') {
        return ''
    }
    if (isNaN(parseFloat(h))) {
        return 'Height must be a number'
    }
    return ''
}

function validateLift(l) {
    if (l == '') {
        return ''
    }
    if (l != 'Bench' && l != 'Squat' && l != 'Deadlift' && l != 'Other') {
        return `Lift must be Bench, Squat, Deadlift or Other`
    }
    return ''
}

function isInt(value) {
    var er = /^-?[0-9]+$/;
    return er.test(value);
}


