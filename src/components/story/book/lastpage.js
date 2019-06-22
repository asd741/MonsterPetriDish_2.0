import React from 'react';

const LastPage = props => {
    return (
        <div className='last-page page'>
            <div className='front'>
                <img className='coverImg' src={require('../../images/r1-l.png')}></img>
            </div>
            <div className='back'>
                <img className='coverImg' src={require('../../images/r1-l.png')}></img>
            </div>
        </div>
    );
}

export default LastPage;