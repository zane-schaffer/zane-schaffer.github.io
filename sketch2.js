const canvasContainer = document.getElementById("canvasContainer");

// Left Section
const workLink = document.getElementById("workLink");
const workText = document.getElementById("workText");

// Right Section
const musicLink = document.getElementById("musicLink");
const musicText = document.getElementById("musicText");

/**
* Changes an HTMLElement's display style between 'flex' and 'none'
*/
function toggleVis(link, text) {
    link.addEventListener('click', () => {
        if (text.style.display == 'flex' || !text.style.display) {
            text.style.display = 'none'
        } else {
            text.style.display = 'flex'
        }
    })
}


toggleVis(workLink, workText);
toggleVis(musicLink, musicText);