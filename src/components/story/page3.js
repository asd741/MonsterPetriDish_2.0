import React from 'react';

const Page3 = props => {
    return (
        <div className='page3 page'>
            <div className='front'>
                <h3 className='title'>收集冊</h3>
                <img className='startImg' src={require('../../images/p5.png')}alt=''></img>
            </div>
            <div className='back'>
                <h3 className='title'>物品</h3>
                <img className='startImg' src={require('../../images/p6.png')}alt=''></img>
            </div>
        </div>
    );
}

export default Page3;