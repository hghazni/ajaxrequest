/**
 * Created by Harry on 10/09/2017.
 */

const welldone = new XMLHttpRequest();

    welldone.onreadystatechange = function() {
        if (welldone.readyState === 4) {
            document.getElementById('welldone').innerHTML = welldone.responseText;
        }
    };

    welldone.open('GET' , './partials/welldone.html');

    function SendAJAX() {
      welldone.send();
      document.getElementById('load').style.display = 'none';
    }