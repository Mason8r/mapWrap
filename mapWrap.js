/**
 * @preserve MapWrap: add a clickable layer on top of the google map API
 * @version 0.0.1
 * @author DarkBlue Creative / @masonator
 * @license MIT License
 */
function mapWrap(mapDiv,lock) {
	
	if (typeof mapDiv == 'string') {
		var mapDiv = document.getElementById(mapDiv);
	};

	if(!lock){
		var mapPadlock = createPadlock(mapDiv);
	}

	applyCelophane(mapDiv, createCelophane(mapDiv));

	mapCelophane.parentNode.insertBefore(mapPadlock, mapCelophane);

}

function createCelophane(mapDiv) {

	var mapCelophane = document.createElement("div");

	mapCelophane.setAttribute('id','mapCelophane');
	mapCelophane.style.height = mapDiv.offsetHeight + 'px';
	mapCelophane.style.width = mapDiv.offsetWidth + 'px';
	
	mapCelophane.addEventListener("click", function() {

		document.getElementById('mapPadlock').className = 'open';

		this.parentElement.removeChild(this);
		
	});

	return mapCelophane;
}

function createPadlock(mapDiv) {

	var mapPadlock = document.createElement("div");

	mapPadlock.setAttribute('id','mapPadlock');
	mapPadlock.className = 'closed';

	mapPadlock.addEventListener("click", function() {

		var mapCelophane = document.getElementById('mapCelophane');

		if(mapCelophane==null)
		{
			//if the celophant doesn't exist, bring it back.
			applyCelophane(mapDiv, createCelophane(mapDiv));
			mapPadlock.className = 'closed';
		}
		else
		{
			//otherwise get rid of it
			mapCelophane.parentElement.removeChild(mapCelophane);
			mapPadlock.className = 'open';
		}

	});

	return mapPadlock;

}

function applyCelophane(parent, mapCelophane) {

	parent.parentNode.insertBefore(mapCelophane, parent);

}
