function random() {
    if (document.getElementById('pickt').textContent == "Pick a random state") {
        var random = Math.floor(Math.random() * states.length);
        window['cascad'].innerHTML = states[random];
    }
    else {
        var random = Math.floor(Math.random() * city_names.length);
        window['cascad'].innerHTML = city_names[random];
    }
}
$(document).ready(function () {
    $('input').click(function () {
        if (document.getElementById('pickt').textContent == "Pick a random state") {
            document.getElementById('pickt').innerHTML = "Pick a random city";
            window['cascad'].innerHTML = "City";
            window['picker'].innerHTML = 'Pick a random City';
        }
        else {
            document.getElementById('pickt').innerHTML = "Pick a random state";
            window['cascad'].innerHTML = "State";
            window['picker'].innerHTML = 'Pick a random State';
        }
    });
});