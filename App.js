import React from 'react';
import Board from './Board';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            squares: Array(9).fill(null),
            xIsNext: true;
            winner: null;
        };
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        if(this.state.winner || squares[i]) return;

        squares[i] =  this.statexIsNext ? 'X' : 'O';
        const winner = calculateWinner(squares);

        this.setState({
            squares: squares,
            xIsNext: !this.statexIsNext,
            winner: winner,
        });
    }

    render(){
        const status = this.state.winner
        ? `winner: ${this.state.winner}`
        : `Next Player: ${this.state.xIsNext ? 'X' : 'O'}`;

        return(
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={this.state.squares}
                        onClick={(i) = this.handleClick(i)}
                    />
                </div>
                <div className='game-info'>
                    <div>{status}</div>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],

    ];

    for(let i=0; i<lines.length; i++){
        const[a,b,c] = lines[i];

        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}

export default App;