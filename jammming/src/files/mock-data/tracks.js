import artwork from '../mock-data/Photo.png';

const getRandomId = () => `${Math.random()}-${Math.random()}`;

const getRandomNumber = (min, range) =>
  Math.floor((Math.random() * 100 * range) / 100) + min;

const randomFromList = (list) => list[getRandomNumber(0, list.length)];

const songs = ['song1', 'song2', 'song3', 'song4', 'song5']

const artists = ['Taylor Swift', 'Fall Out Boy', 'My Chemical Romance', 'Katy Perry', 'Dire Straits']

const albums = ['add', 'subtract', 'multiply', 'divide', 'equal']

const getTracks = () => ({
        images: {
            url: artwork,
            height: 300,
            width: 300
        },
        name: randomFromList(songs),
        artist: randomFromList(artists),
        album: randomFromList(albums),
        list: "searchResult",
        id: getRandomId()
    });

    export default {
    "/tracks": Array.from({ length: 8 }, getTracks)
}