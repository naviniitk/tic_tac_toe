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
        if(rowSum[row-1] == 3){
            alert("Winner "+ this.name);
        }
        if(columnSum[col-1] == 3){
            alert("Winner "+ this.name);
        }
        if(diagSum[0] == 1 && diagSum[1] == 1 && diagSum[2] == 1){
            alert("Winner "+ this.name);
        }
        if(antiDiag[0] == 1 && antiDiag[1] == 1 && antiDiag[2] == 1){
            alert("Winner "+ this.name);
        }
    }
    return {name, makeMove};
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
    button.onclick = () => {
        for(let i = 0; i < cells.length; i++){
            cells[i].innerText = "";
        }
    }
    
    function clickAction(){
        if(this.innerText == ""){
            if(count%2 == 0){
                this.innerText = "X";
                let str = this.id;
                player1.makeMove(parseInt(str[0]), parseInt(str[1]));
                count++;
            }
            else{
                this.innerText = "O";
                let str = this.id;
                player2.makeMove(parseInt(str[0]), parseInt(str[1]));
                count++;
            }
            
        }
    }
})();


