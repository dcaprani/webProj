var XMLHttpRequestObject = false;
if (window.XMLHttpRequest) {
		XMLHttpRequestObject = new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		XMLHttpRequestObject =
		new ActiveXObject("Microsoft.XMLHTTP");
	}
	function getData(datasource, divID) {
		if (XMLHttpRequestObject) {
			var obj = document.getElementById(divID);
			XMLHttpRequestObject.open("GET", datasource, true);
		XMLHttpRequestObject.onreadystatechange = function(){
				if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200)
			{
				obj.innerHTML = XMLHttpRequestObject.responseText;
			}

		}
		XMLHttpRequestObject.send(null);
	}
}

// JQuery Ajax request for web page
//JavaScript AJAX code here
$(document).ready(function()

		{

		//Attach a handler to the click event

		//of the link on the page:

		$('a').click(function()

		{

		//Target the div with id of result

		//and load the content from the specified url

		//and the specified div element into it:

		$('#result').load('DivHomePage.html #menu');

		});

});

///Bouncy Stuff
		$.fn.bounce = function(options) {

		    var settings = $.extend({
		        speed: 10
		    }, options);

		    return $(this).each(function() {

		        var $this = $(this),
		            $parent = $this.parent(),
		            height = $parent.height(),
		            width = $parent.width(),
		            top = Math.floor(Math.random() * (height / 2)) + height / 4,
		            left = Math.floor(Math.random() * (width / 2)) + width / 4,
		            vectorX = settings.speed * (Math.random() > 0.5 ? 1 : -1),
		            vectorY = settings.speed * (Math.random() > 0.5 ? 1 : -1);

		        // place initialy in a random location
		        $this.css({
		            'top': top,
		            'left': left
		        }).data('vector', {
		            'x': vectorX,
		            'y': vectorY
		        });

		        var move = function($e) {

		            var offset = $e.offset(),
		                width = $e.width(),
		                height = $e.height(),
		                vector = $e.data('vector'),
		                $parent = $e.parent();

		            if (offset.left <= 80 && vector.x < 0) {
		                vector.x = -1 * vector.x;
		            }
		            if ((offset.left + width-60) >= $parent.width()) {
		                vector.x = -1 * vector.x;
		            }
		            if (offset.top <= 20 && vector.y < 0) {
		                vector.y = -1 * vector.y;
		            }
		            if ((offset.top + height) >= $parent.height()) {
		                vector.y = -1 * vector.y;
		            }

		            $e.css({
		                'top': offset.top + vector.y + 'px',
		                'left': offset.left + vector.x + 'px'
		            }).data('vector', {
		                'x': vector.x,
		                'y': vector.y
		            });

		            setTimeout(function() {
		                move($e);
		            }, 50);

		        };

		        move($this);
		    });

		};

		$(function() {
		    $('#wrapper li').bounce({
		        'speed': 7
		    });
});