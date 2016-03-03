function generator() {
	// word lists
	var firstPart = ["The Coldness of", "The Journey to", "Altered by", "A Parallel of", "The Return of", "Consider", "Iron in", "A State of", "The Destiny of", "Shades of", "Taken by", "A Stitch in Time Saves", "Saving", "Emperor of", "Whispers from", "The Book of", "The King of", "The Chronicles of", "The Broken", "Darker Than", "Song of", "Forever", "Love in the Time of", "The Moon is", "At least it's not", "The Abyss of"];
	var secondPart = ["the Coming Order", "the Relationship of Command", "Evil Androids", "Cybernetic Brain", "the Fate of Humanity", "Waltz", "Canto", "a Robot Dog", "Jupiter", "Humanity's Shame", "the Gunslinger", "the Black Tower", "Xenocide", "Blades", "Bel-Shazzar", "Titan", "the Desert", "Mirrors", "the Worm", "Zanzibar", "the End of the World", "Moondust", "Picnic", "Hyperion"];

	// generate name
	var name = firstPart[Math.floor(Math.random() * firstPart.length)] + " " + secondPart[Math.floor(Math.random() * secondPart.length)];

	//alert(name);

	// remove name div if existing
	if (document.getElementById("name")) {
		document.getElementById("placeholder").removeChild(document.getElementById("name"));
	}

	// append to placeholder div
	var element = document.createElement("div");
	element.setAttribute("id", "name");
	element.appendChild(document.createTextNode(name));
	document.getElementById("placeholder").appendChild(element);
}