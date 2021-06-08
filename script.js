const Player = (name) => {
    let rowSum = [0, 0, 0];
    let columnSum = [0, 0, 0];
    let diagSum = [0, 0, 0];
    let antiDiag = [0, 0, 0];
    
    const getName = () => name;

    function makeMove(row, col) {
        rowSum[row-1] += 1;
        columnSum[col-1] += 1;

        if(row == col){
            diagSum[row-1] += 1;
        }
        if(row+col-1 == 3){
            antiDiag[row-1] += 1;
        }
        if(rowSum[row-1] == 3 || columnSum[col-1] == 3 || 
            (diagSum[0] == 1 && diagSum[1] == 1 && diagSum[2] == 1)|| 
            (antiDiag[0] == 1 && antiDiag[1] == 1 && antiDiag[2] == 1)){
            return 1;
        }
        return 0;
    }
    function clear(){
        rowSum = [0, 0, 0];
        columnSum = [0, 0, 0];
        diagSum = [0, 0, 0];
        antiDiag = [0, 0, 0];
    }
    return {name, makeMove, clear};
};


const displayController = (() => {
    let cells = document.getElementsByClassName("cell");
    let count = 0;
    const player1 = Player("Ben");
    const player2 = Player("Kevin");
    for(let i = 0; i < cells.length; i++){
        cells[i].addEventListener("click", clickAction);
        
    }
    let button = document.getElementById("btn");
    button.onclick = restartGame;
    function restartGame() {
        for(let i = 0; i < cells.length; i++){
            cells[i].innerText = "";
            count = 0;
            player1.clear();
            player2.clear();
        }
    }
    function addImage(name) {
        const img = document.createElement("img");
        img.src = name;
        img.style.width = "90px";
        img.style.height = "90px";
        img.style.margin = "auto";
        return img;
    }

    function clickAction(){
        if(this.innerText == ""){
            if(count%2 == 0){
                this.appendChild(addImage("cross.png"));
                let str = this.id;
                if(player1.makeMove(parseInt(str[0]), parseInt(str[1]))){
                    alert("Winner: "+ player1.name);
                    restartGame();
                    return;
                };
                
            }
            else{
                this.appendChild(addImage("zero.png"));
                let str = this.id;
                if(player2.makeMove(parseInt(str[0]), parseInt(str[1]))){
                    alert("Winner: "+ player2.name);
                    restartGame();
                    return;
                };
                
            }
            count++;
        }
    }
})();


