function createGrid(size){

    const container=document.querySelector(".container");

    for(let i=0;i<size*size;i++){

        const square=document.createElement("div");
        square.classList.add("square");

        square.style.width = `${600 / size}px`;
        square.style.height = `${600 / size}px`;

        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
        });

        container.appendChild(square);
    }
}

function clearGrid(){
    const size=prompt("Enter the size of the grid (upto 100)");

    if(size>100 || size<0) return;
    else{
        const container=document.querySelector(".container");
        container.innerHTML="";
        createGrid(size);
    }
}

const button=document.querySelector("#clearbtn");
button.addEventListener("click",clearGrid);

createGrid(16);