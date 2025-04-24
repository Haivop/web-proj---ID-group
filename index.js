"USE STRICT";

const songTable = document.getElementById("songs-table");
const songs = songTable.querySelectorAll(".name");

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
    var name1;
    var name2;

    name1 = prompt("Оберіть першу назву пісні за номером в таблиці");
    name2 = prompt("Оберіть другу назву пісні за номером в таблиці");

    if((name1 >= '1') && (name2 >= '1') && (name1 <= '9') && (name2 <= '9') && (name1 != name2))
    {
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

function changeBackColor(color='#C1AEB8'){
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
        albumPretext.appendChild(textnode)
        row.appendChild(albumPretext)
    }
    document.getElementById("songs-table-body").appendChild(row)
}

