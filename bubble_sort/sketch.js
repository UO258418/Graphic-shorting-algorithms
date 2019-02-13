var collection;
var i = j = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	collection = new Collection(windowWidth);
}

function draw() {

	background(255);
	collection.render();

	// swap if needed
	let current = collection.items[j].value;
	let next = collection.items[j + 1].value;
	if(current > next) swap(j, j + 1);

	// bubble sort basis
	if(i < collection.size) {
		j++;
		if(j >= collection.size - i - 1) {
			j = 0;
			i++;
		}
	} else {
		console.log("DONE");
		noLoop();
	}

}

const swap = (i, j) => {
	let tmp = collection.items[i];
	collection.items[i] = collection.items[j];
	collection.items[j] = tmp;
}
