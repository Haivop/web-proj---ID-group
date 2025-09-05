function toAlbums(){
    if(document.querySelector('#albums-table.hidden')){
        document.getElementById('albums-table').classList.toggle('hidden')
        document.getElementById('songs-table').classList.toggle('hidden')
        document.getElementById('tab-btn1').classList.toggle('active')
        document.getElementById('tab-btn2').classList.toggle('active')
    }
}

function toSongs(){
    if(document.querySelector('#songs-table.hidden')){
        document.getElementById('albums-table').classList.toggle('hidden')
        document.getElementById('songs-table').classList.toggle('hidden')
        document.getElementById('tab-btn1').classList.toggle('active')
        document.getElementById('tab-btn2').classList.toggle('active')
    }
}