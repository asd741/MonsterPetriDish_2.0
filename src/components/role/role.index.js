import React, { Component } from 'react';
import './role.index.sass';
import QueueAnim from "rc-queue-anim";
import { isImageUrl } from 'antd/lib/upload/utils';
const Index = () => {
    return (
        <div id='role-page'>
            <h2 className='page-title'>
                <img className='title-decoration' src={require('../../images/banner2.png')}></img>
                角色介紹
                </h2>
            <section className='main'>
                <ul className='card-wrapper'>
                    <li className='card'>
                        <section className='img-wrapper'>
                            <img src={require('../../images/r1.png')}></img>
                            <h3 className='name'>魔物雞</h3>
                        </section>
                        <section className='text-wrapper'>
                            <p className='text'>魔物的原始設計-基礎魔物,魔物雞</p>
                        </section>
                    </li>
                    <li className='card'>
                        <section className='img-wrapper'>
                            <img src={require('../../images/r2.png')}></img>
                            <h3 className='name'>蘑菇雞</h3>
                        </section>
                        <section className='text-wrapper'>
                            <p className='text'>加入自然的要素,魔物雞的初階段進化型態,蘑菇雞</p>
                        </section>
                    </li>
                    <li className='card'>
                        <section className='img-wrapper'>
                            <img src={require('../../images/r3.png')}></img>
                            <h3 className='name'>魔法雞</h3>
                        </section>
                        <section className='text-wrapper'>
                            <p className='text'>加入魔力的要素,魔物雞的初階段進化型態,魔法雞</p>
                        </section>
                    </li>
                </ul>
            </section>
            <section className='bg-decoration'>
                <img className='leftTop small' src={require('../../images/r3-l.png')}></img>
                <img className='rightCenter small' src={require('../../images/r1-l.png')}></img>
                <img className='leftBottom small' src={require('../../images/r2-l.png')}></img>
                <img className='big' src={require('../../images/banner.png')}></img>
                <section className='zzz'>
                    <span>Z</span>
                    <span>Z</span>
                    <span>Z</span>
                </section>
            </section>
        </div>
    );
}

export default Index;
