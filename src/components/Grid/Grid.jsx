import { useState } from "react";
import Card from "../Card/Card";
import './Grid.css';
import isWinner from "../../helpers/checkWinner";
function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true); // true => O, false => X

    function play(index){
        if(turn === true){
            board[index] = 'O';
        }else {
            board[index] = 'X';
        }
        const win = isWinner(board, turn ? "O" : "X");
        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }
    function reset(){
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""))
    }
    return (
        <div className="grid-wrapper">
            {
                <>
                    <h1 className="turn-highlight">Winner is : {setWinner}</h1>  
                    <botton className="reset" onClick={reset}>Reset Game</botton>
                </>
            }
            <h1 className="turn-highlight">Current turn : {(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
                {board.map((el, idx) => <Card key={idx} onPlay={play} player={el} index={idx} />)}
            </div>
        </div>
        
    );
}
export default Grid;