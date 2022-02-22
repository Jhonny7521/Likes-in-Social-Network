
function likeFunction(obj){
    let objeto = obj.id;
    let elemento;
    let likes=0;

    if (objeto == "idPost01"){
        elemento = document.getElementById('numLikesPost01');
        likes = parseInt(elemento.innerHTML);
        likes += 1;
        elemento.innerHTML = likes;
    }
    else if (objeto == "idPost02"){
        elemento = document.getElementById('numLikesPost02');
        likes = parseInt(elemento.innerHTML);
        likes += 1;
        elemento.innerHTML = likes;
    }
    else if (objeto == "idPost03"){
        elemento = document.getElementById('numLikesPost03');
        likes = parseInt(elemento.innerHTML);
        likes += 1;
        elemento.innerHTML = likes;
    }
    console.log(objeto);
}