"USE STRICT";
var save = undefined;

function tableRowRemove(){
    const tableBody = document.getElementById('songs-table-body');
    if (tableBody.lastElementChild) {
        save = tableBody.lastElementChild
        tableBody.lastElementChild.remove();
    }
}

function prependSavedRow(){
    const tableBody = document.getElementById('songs-table-body');
    let save_temp = tableBody.firstElementChild;
    if(save){
        tableBody.firstElementChild.remove();
        tableBody.prepend(save);
        tableBody.prepend(save_temp);
    }
}

function replaceInconsistancy(){
    const tableBody = document.getElementById('songs-table-body');
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    const targetRow = rows.find(row => row.children[0].textContent.trim() === '9.');
    tableBody.lastElementChild.after(targetRow);
}

function replaceFirstANDLast() {
    const tableBody = document.getElementById('songs-table-body');
    let save = tableBody.children[1];
    tableBody.children[1].replaceWith(tableBody.lastElementChild);
    tableBody.lastElementChild.after(save)
}

function devInfo(devLastname, devName, position="Студент НТУУ КПІ ім. Ігоря Сікорскього факултета ФІОТ"){
    alert("Розробник цього сайта\n" + devLastname + " " + devName + "\n" + position)
}

function confirmLink(link){
    if(confirm("Бажаєте перейти за цим посиланням? ("+link+")")){
        location.href = link;
    }
}

function dialog(){
    do{
        let dialogOption = prompt("Яку інформацію бажаєте дізнатись ? (введіть потрібний варінт)\n" +
            "1. Інформація про розробника\n" + 
            "2. GitHub\n", "");
        
        switch(dialogOption){
            case '1':
                devInfo("Свистун", "Артем");
                break;
            case '2':
                confirmLink("https://github.com/Haivop")
                break;
            default:
                alert("Спробуйте знову!")
                break;
        }
    } while(confirm("Бажаєте знову щось дізнатись?"))
}

function CompareNameLengths(){
    const songTable = document.getElementById("songs-table");
    const songs = songTable.querySelectorAll(".name");

    let name1 = prompt("Оберіть першу назву пісні за номером в таблиці");
    let name2 = prompt("Оберіть другу назву пісні за номером в таблиці");

    if((name1 >= '1') && (name2 >= '1') && (name1 <= '9') && (name2 <= '9') && (name1 != name2))
    {
        if(songs[Number(name1)-1].firstChild.nodeValue != 'Wake Up' && songs[Number(name2)-1].firstChild.nodeValue != 'Wake Up'){
            name1 = songs[Number(name1)-1].innerHTML;
            name2 = songs[Number(name2)-1].innerHTML;
        
            if(name1 > name2){
                alert(name1);
            }
            else if(name2 > name1){
                alert(name2);
            }
            else{
                alert("Рядки рівні");
            }
        }
    }
}

function changeBackColor(){
    color='#C1AEB8'
    document.body.style.background = color; 
    setTimeout(() => document.body.style.background = '', 30000);
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

function changeListType(){
    let list = document.getElementsByTagName("ol")[0];
    list.outerHTML = "<ul><label><H3 class=\"headers\">Жанри, в яких виконує</H3><hr></label><li>Алтернативний рок</li><li>Інді-рок</li><li>Поп-рок</li><li>Інді-поп</li><li>Електропоп</li></ul>"
}

document.getElementById("dialogButton").addEventListener('click', dialog);

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