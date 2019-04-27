import React from 'react';

const Page2 = props => {
    return (
        <div className='page2 page'>
            <div className='front'>
                <h3 className='title'>開始畫面</h3>
                <img className='startImg' src={require('../../images/p1.png')}></img>
            </div>
            <div className='back'>
                <h3 className='title'>遊戲主畫面</h3>
                <img className='startImg' src={require('../../images/p2.png')}></img>
            </div>
        </div>
    );
}

export default Page2;