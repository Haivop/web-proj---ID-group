document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('#albums-table img');
    let visible = 0;
    images[visible].classList.toggle('hidden');

    document.querySelector('#albums-table i.fa-arrow-right').addEventListener('click', () => {
        images[visible].classList.toggle('hidden');

        visible++;
        if(visible > images.length-1) visible = 0;

        images[visible].classList.toggle('hidden');
    })

    document.querySelector('#albums-table i.fa-arrow-left').addEventListener('click', () => {
        images[visible].classList.toggle('hidden');

        visible--;
        if(visible < 0) visible = images.length-1;

        images[visible].classList.toggle('hidden');
    })
})