import React from 'react';
import './dl.index.sass';
// import Monster from '../story/monster';
const Index=()=>{
    return (
      <div id='dl-page'>
        <h2 className='title'>遊戲下載</h2>
        <p className='info'>本產品為手機遊戲,請使用手機掃碼ＱＲcode進行下載,或使用手機點擊下載按鈕</p>
        <section className='main'>
          <section className='dl-part'>
            <img className='dl-qrcode' src={require('../../images/dl.png')}></img>
            <a href='http://bit.ly/2EwQpvG' className='dl-btn' target='_blank'>下載</a>
          </section>
          <section className='text-part'>
            <ul className='list-wrapper'>
              <li className='list'>軟體名字：魔物培養皿</li>
              <li className='list'>檔案類型：.apk</li>
              <li className='list'>系統需求：Android 4.4版本以上</li>
              <li className='list'>記憶體需求：512mb</li>
            </ul>
          </section>
        </section>
        {/* <Monster/> */}
      </div>
    )
}
export default Index