import React from 'react';

const Page4 = props => {
    return (
        <div className='page4 page'>
            <div className='front'>
                <h3 className='title'>角色</h3>
                <img className='startImg' src={require('../../images/p7.png')}></img>
            </div>
            <div className='back'>
                <h3 className='title'>副本</h3>
                <img className='startImg' src={require('../../images/p8.png')}></img>
            </div>
        </div>
    );
}

export default Page4;