import React from 'react';
import './nav.sass';
const Nav = props => {
    return (
        <nav id='bookNav'>
            <div className='bookmark'>主畫面</div>
            <div className='bookmark'>物品</div>
            <div className='bookmark'>進化</div>
            <div className='bookmark'>副本</div>
            <div className='bookmark'>探索</div>
        </nav>
    );
}

export default Nav;