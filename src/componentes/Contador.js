import React from 'react';
import '../hoja-de-estilo/Contador.css';
function Contador(props){
    return (
        <div className='contador'>
            {props.numClics}
        </div>
    );
}

export default Contador;