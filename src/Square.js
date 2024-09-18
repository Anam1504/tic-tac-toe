import React from 'react';

function Square({value, onClick}){
    return(
        <button classname = "square" onClick={onClick}>
            {value}
        </button>
    );
}

export default Square;