const navbarBtn = document.querySelector('.navbar__btn')
const navbarLinks = document.querySelector('.navbar__links')

navbarBtn.addEventListener('click', function() {
    let value = navbarLinks.classList.contains('navbar__collapse')

    if(value) {
        navbarLinks.classList.remove('navbar__collapse')
        navbarBtn.classList.remove('change')
    }
    else {
        navbarLinks.classList.add('navbar__collapse')
        navbarBtn.classList.add('change')
    }
})

// If play button clicked, change pp.src to pause button and call song.play(). If pause button clicked, change pp.src to play button and call song.pause().
let playing = true
function playPause() {
  if (playing) {
    const song = document.querySelector('#song')
    thumbnail = document.querySelector('#thumbnail')

    //this will change the Play button to a Pause button
   // pPause.src = "./assets/icons/pause.png"

    //this will play the audio track
    song.play()
    playing = false
  } else {
   // pPause.src = "./assets/icons/play.png"
    song.pause()
    playing = true
  }
}