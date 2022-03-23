// writing a function to update attributes of an object
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else {
    if (prop === "tracks") {
      // collection.id.tracks += value;
      collection[id][tracks] |= [];
      collection[id][tracks].push(value);
    } else {
      collection[id][prop] = value;
    }
  }
  return collection;
}

console.log(collectionCopy);
updateRecords(5439, "artist", "ABBA");
console.log(collection["5439"]);
