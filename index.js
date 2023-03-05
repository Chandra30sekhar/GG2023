const imgPaths = ['./images/man.png', './images/girl.png', './images/man2.png']
const names = ['Person1', 'Person2', 'Person3']
const desc = ['Desc-1', 'Desc-2', 'Desc-3']
var i = 1;

function showNext(){
    imgSrc = document.getElementById('per-i');
    //Change the path of the image
    imgSrc.src = imgPaths[i];
    personName = document.getElementById('per-n');
    personName.innerHTML = names[i];
    personDesc = document.getElementById('per-d');
    personDesc.innerHTML = desc[i];
    if(i < imgPaths.length - 1){
        i = (i+1) % 3;
    }
    else{
        i = 0;
    }
    
}

function showPrev(){
    if(i > 0){
        i = (i-1) % 3;
    }
    else{
        i = 2;
    }

    imgSrc = document.getElementById('per-i');
    //Change the path of the image
    imgSrc.src = imgPaths[i];
    personName = document.getElementById('per-n');
    personName.innerHTML = names[i];
    personDesc = document.getElementById('per-d');
    personDesc.innerHTML = desc[i];
}


