const songTitleContainer = document.getElementsByClassName("songTitle");
const songTitleScrollWidth = songTitleContainer.scrollWidth;

window.addEventListener('load', () => {
self.setInterval(() => {
if (songTitleContainer.scrollLeft !== songTitleScrollWidth) {
    songTitleContainer.scrollTo(songTitleContainer.scrollLeft + 1, 0);
}
}, 15);
});