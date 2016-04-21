window.onload= function(){
	var addButton=document.getElementById("addButton");
	addButton.onclick=handleButtonClick;
	loadPlaylist();
	
}
function handleButtonClick() {
	var userText=document.getElementById("userText");
		var addSong=userText.value;
		var li=document.createElement("li");
		li.innerHTML=addSong;
		var ul=document.getElementById("playlist");
		ul.appendChild(li);
		save(addSong);
}

function handleKeyPress(e) {
	var addButton = document.getElementById("addButton");

	// in IE9 and earlier, the event object doesn't get passed
	// to the event handler correctly, so we use window.event instead.
	e = e || window.event;

	if (e.keyCode === 13) {
		addButton.click();
		return false;
	}
}


