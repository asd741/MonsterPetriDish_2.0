import React from 'react';

const Page4 = props => {
    return (
        <div className='page4 page'>
            <div className='front'>
                <h3 className='title'>物品資料</h3>
                <img className='startImg' src={require('../../images/p7.png')}alt=''></img>
            </div>
            <div className='back'>
                <h3 className='title'>狀態欄</h3>
                <img className='startImg' src={require('../../images/p8.png')}alt=''></img>
            </div>
        </div>
    );
}

export default Page4;