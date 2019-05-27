import React from 'react';

const Page3 = props => {
    return (
        <div className='page3 page'>
            <div className='front'>
                <h3 className='title'>物品欄</h3>
                <img className='startImg' src={require('../../images/p5.png')}></img>
            </div>
            <div className='back'>
                <h3 className='title'>道具</h3>
                <img className='startImg' src={require('../../images/p6.png')}></img>
            </div>
        </div>
    );
}

export default Page3;