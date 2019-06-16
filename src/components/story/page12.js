import React from 'react';

const Page12 = props => {
    return (
        <div className='page12 page'>
            <div className='front'>
                <h3 className='title'>探索獲得道具</h3>
                <img className='startImg' src={require('../../images/p19.png')}></img>
            </div>
            <div className='back'>
                <h3 className='title'>（完）製作日期：2019/6/10</h3>
                {/* <img className='startImg' src={require('../../images/p16.png')}></img> */}
            </div>
        </div>
    );
}

export default Page12;