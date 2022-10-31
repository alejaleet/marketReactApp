import React from 'react'
import Goods from '../../store/Goods'
import { observer } from 'mobx-react';

const Basket = () => {
  const {basketGoods} = Goods;
  return (
    <div className='BasketCard'>
        <div className="img"><img src="" alt=""/></div>
        <div className='basketCardContent'>
            <div className='title'>
                {basketGoods.map((item) => {
                  return(<div>{item.title}</div>)
                })}
            </div>
            <div className='cost'>
                {}
            </div>
        </div>
    </div>
  )
}

export default observer(Basket)