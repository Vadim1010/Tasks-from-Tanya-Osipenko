/**
 * Created by SWIFT on 09.04.2017.
 */
function showe() {
    var a = document.getElementsByClassName('img');
    for (var i = 0; i < a.length; i++) {
        a[i].style.display = "block";
    }
};
function hover () {
    var a = document.getElementsByClassName('img');
    for (var i = 0; i < a.length; i++) {
        if (i < 2) {
            a[i].style.display = "none";
        }
    }
};

function change(el) {
    if (el == 'boxes') {
        var a = document.getElementById('boxes');
        a.style.color = "#0867a6";
    }
    if (el == 'filter') {
        var a = document.getElementById('filter');
        a.style.color = "#0867a6";
    }
};

