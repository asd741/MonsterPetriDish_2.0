import React from 'react';

const Page5 = props => {
    return (
        <div className='page5 page'>
            <div className='front'>
                <h3 className='title'>設定</h3>
                <img className='startImg' src={require('../../../images/p9.png')}alt=''></img>
            </div>
            <div className='back'>
                <h3 className='title'>進化後</h3>
                <img className='startImg' src={require('../../../images/p10.png')}alt=''></img>
            </div>
        </div>
    );
}

export default Page5;