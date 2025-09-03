"USE STRICT";
var save = undefined;

function tableRowRemove(){
    const tableBody = document.getElementById('songs-table-body');
    if (tableBody.lastElementChild) {
        save = tableBody.lastElementChild
        tableBody.lastElementChild.remove();
    }
}

function replaceInconsistancy(){
    const tableBody = document.getElementById('songs-table-body');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    const targetRow = rows.find(row => row.children[0].textContent.trim() === '9.');
    tableBody.lastElementChild.after(targetRow);
}

function AppendAlbum(){
    let label = prompt("Як називається альбом?")
    let row = document.createElement("tr");
    for(i=0; i<2; i++){
        let albumPretext = document.createElement("td")
        let textnode;
        if(i==0) {
            textnode = document.createTextNode(label);
            albumPretext.className = "album"
            albumPretext.rowSpan = 1;
        }
        if(i==1) {
            textnode = document.createTextNode(prompt("Дані про альбом"));
            albumPretext.className = "album-summary";
            albumPretext.colSpan = 4;
        }
        albumPretext.append(textnode)
        row.append(albumPretext)
    }
    document.getElementById("songs-table-body").append(row)
}

document.addEventListener('click', function(event) {
    const toggleSource = event.target.closest('[data-toggle-id]');
    if (!toggleSource) return;

    const toggledElemId = toggleSource.dataset.toggleId;
    const toggledElement = document.getElementById(toggledElemId);
    if (!toggledElement) return;

    const isHidden = toggledElement.dataset.hidden === 'true';

    toggledElement.style.visibility = isHidden ? 'visible' : 'collapse';
    toggledElement.dataset.hidden = (!isHidden).toString();
});

document.addEventListener('click', function(event) {
    const toggleSource = event.target.closest('[data-toggle-id]');
    if (!toggleSource) return;

    let isColored = toggleSource.style.color === 'rgb(90, 176, 146)';
    toggleSource.style.color = isColored ? 'white' : '#5ab092';
    isColored = !isColored;
});

document.addEventListener('DOMContentLoaded', () => {
    const tbody = document.getElementById('songs-table-body');
    const rows = Array.from(tbody.querySelectorAll('tr')).slice(1);

    rows.forEach(row => {
        row.addEventListener('mouseover', (e) => {
            if (!row.contains(e.relatedTarget)) {
                e.currentTarget.classList.add('hovered-row');
            }
        });

        row.addEventListener('mouseout', (e) => {
            if (!row.contains(e.relatedTarget)) {
                e.currentTarget.classList.remove('hovered-row');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
  let draggedImg = null;
  let offsetX = 0;
  let offsetY = 0;

  const albumGame = document.getElementById('album-game');
  const images = albumGame.querySelectorAll('img');

  images.forEach(img => {
    img.addEventListener('mousedown', (e) => {
      e.preventDefault();
      draggedImg = img;

      const rect = img.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;

      img.style.position = 'absolute';
      img.style.zIndex = 1000;
      img.style.pointerEvents = 'none';
      document.body.appendChild(img);

      moveAt(e.pageX, e.pageY);
    });
  });

  function moveAt(pageX, pageY) {
    draggedImg.style.left = `${pageX - offsetX}px`;
    draggedImg.style.top = `${pageY - offsetY}px`;
  }

  document.addEventListener('mousemove', (e) => {
    if (draggedImg) {
        moveAt(e.pageX, e.pageY);
    }
  });

  document.addEventListener('mouseup', (e) => {
    if (!draggedImg) return;

    draggedImg.style.pointerEvents = '';
    draggedImg.style.position = '';
    draggedImg.style.zIndex = '';
    draggedImg.style.left = '';
    draggedImg.style.top = '';

    const dropTarget = document.elementFromPoint(e.clientX, e.clientY);
    const place = dropTarget.closest('.place');

    if (place) {
        const existingImg = place.querySelector('img');
        if (existingImg) {
            document.getElementById('album-pool').appendChild(existingImg);
        }

        place.appendChild(draggedImg);
    } 
    else {
    document.getElementById('album-pool').appendChild(draggedImg);
    }

    draggedImg = null;
  });
});