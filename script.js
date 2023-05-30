//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function sortArticles(name) {
	const articles = ['a', 'an', 'the'];
	return name.replace(/(^a|an|the^)\s/i, '');
}

touristSpots.sort((a,b) => sortArtilcles(a).localCompare(sortArticles(b)));
const bandList = document.createElement("ul");
bandList.id = "band";

for(let i =0; i<touristSpots.length; i++){
	var li = document.createElement("li");
	li.textContent=touristSpots[i];
	bandList.appendChild(li);
}