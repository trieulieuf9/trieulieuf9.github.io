function _insertArtwork(artworkContainer) {
	var artworkName = artworkContainer.split("-")[1];

	fetch(`artworks/${artworkName}`)
	  	.then(response => response.text())
	  	.then((content) => {
	  		console.log(artworkContainer, document.body.innerHTML);
	   		document.body.innerHTML = `<pre>${content}</pre>\n${document.body.innerHTML}`;
	});
}

function _writeContent(content) {
	parts = content.split("\n"); // split on newline

	parts.forEach(function(part) {
	  	if (part === "") {
	  		document.body.innerHTML += "<br><br>\n"
	  	} else if (part.startsWith("{{artwork}}")) {
	  		_insertArtwork(part);
	  	} else {
	  		document.body.innerHTML += `<span>${part}<span>\n`
	  	}
	});
}

function load(article_path) {
	fetch("contents/learning_quickly.txt")
	  	.then(response => response.text())
	  	.then((content) => {_writeContent(content);}
	);
}