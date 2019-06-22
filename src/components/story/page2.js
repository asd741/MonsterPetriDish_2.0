import React from 'react';

const Page2 = props => {
    return (
        <div className='page2 page'>
            <div className='front'>
                <h3 className='title'>功能列（上）</h3>
                <img className='startImg' src={require('../../images/p3.png')}alt=''></img>
            </div>
            <div className='back'>
                <h3 className='title'>功能列（下）</h3>
                <img className='startImg' src={require('../../images/p4.png')}alt=''></img>
            </div>
        </div>
    );
}

export default Page2;