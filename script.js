
function likeFunction(){
    let elemento = document.getElementById('numLikes');
    let likes = parseInt(elemento.innerHTML);
    likes += 1;
    elemento.innerHTML = likes;
    console.log(likes);
}
