import React, { Component } from 'react'
import './dl.index.sass'
export default class Index extends Component {
  render() {
    return (
      <div id='dl-page'>
        <h2 className='title'>遊戲下載</h2>
        <p className='info'>本產品為手機遊戲,請使用手機掃碼ＱＲcode進行下載,或使用手機點擊下載按鈕</p>
        <section className='main'>
          <section className='dl-part'>
            <img className='dl-qrcode' src={require('../../images/dl.png')}></img>
            <a href='https://drive.google.com/uc?authuser=1&id=19dbCgeQXmScK9DPbfKDRmHWtAJP0_ORy&export=download' className='dl-btn' target='_blank'>下載</a>
          </section>
          <section className='text-part'>
            <ul className='list-wrapper'>
              <li className='list'>軟體名字：魔物培養皿</li>
              <li className='list'>檔案類型：.apk</li>
              <li className='list'>系統需求：Android 4.1版本以上</li>
              <li className='list'>記憶體：512mb</li>
            </ul>
          </section>
        </section>

      </div>
    )
  }
}
