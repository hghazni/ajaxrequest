# AJAX Request
>By [Haroon Ghazni](http://hghazni.com)
(Front End Web Developer)

[View Demo](http://hghazni.com/ajax/)

### Simple but effective
I've created a simple AJAX Request. It's just me playing around with AJAX and creating a fun demo showing of the bare minimal of what it can do. Needs a virtual web server (MAMP etc) to run if you're wanting to run this locally. Otherwise just click my demo link.

>**Stage 1**: Create an XMLHTTP Request Object

Pretty self-explanatory but it essentially gives this new AJAX request the right paperwork to pass through security at the web server without the need of a thorough cavity search (well maybe just one for fun).
```` 
const welldone = new XMLHttpRequest();

````

>**Stage 2**: Create a Callback Function

The meat and potatoes of the AJAX Request which essentially processes the new XMLHTTP (XMR) Request Object and then changes the innerHTML of #welldone.
```` 
    welldone.onreadystatechange = function() {
        if (welldone.readyState === 4) {
            document.getElementById('welldone').innerHTML = welldone.responseText;
        }
    };

````

>**Stage 3**: Open a Request

Requests welldone.html from the website server.
```` 
   welldone.open('GET' , './partials/welldone.html');

````

>**Stage 4**: Send a Request

So this sends the requests to the web server and then hides the button with the SendAJAX() onclick function.

```` 
    function SendAJAX() {
      welldone.send();
      document.getElementById('load').style.display = 'none';  
    }
    
 ```` 
 
 Then that's pretty much it!