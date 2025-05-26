console.log("lets write JavaScript");

async function getSongs() {
    let a = await fetch("http://127.0.0.1:3000/song/")
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    console.log(as)
    let songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/song/")[1])
        }

    }
    return songs
}

async function main() {

    let songs = await getSongs();
    console.log(songs)

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + ` <li><img class="invert" src="img/music.svg" alt="music">
                            <div class="info">
                                <div>${song.replaceAll("%_", " ")}</div>
                                <div>Jay Kumar</div>
                            </div>
                            <div class="playNow">
                                <span>Play Now</span>
                                <img class="invert" src="img/play.svg" alt="play">
                            </div>
                        </li>`;
    }

    // ??Play the first Songs
    var audio = new Audio(song[0])
    console.log(audio)
    audio.play; // play()

    audio.addEventListener('loadeddata', () => {
        let duration = audio.duration;
        console.log(duration);
    });
}

main()