import React from 'react';

const Cover = props => {
    return (
        <div className='cover page'>
            <div className='front' >
                <h2 className='title'>遊戲手冊</h2>
                <img className='coverImg' src={require('../../images/r1-l.png')}></img>
            </div>
            <div className='back'>
                <h2 className='title'>遊戲手冊</h2>
                <img className='coverImg' src={require('../../images/r1-l.png')}></img>
            </div>
        </div>
    );
}

export default Cover;