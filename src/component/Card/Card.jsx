import React from 'react'
import Goods from '../../store/Goods'
import { observer } from 'mobx-react';

const Card = (props) => {
    const {addGood} = Goods;
  return (
    <div className="card">
        <div className="img"><img src={props.img} alt=""/></div>
        <div className="cardContent">
            <div className="info">
                <div className="title">
                    {props.title}
                    <div className="cost">{props.price} ₽</div>
                </div>
                <div className="title rate">
                    <div className="star">
                        <img src="img/rate.png" alt=""/>
                        {props.rate}
                    </div>
                    <button onClick={() => addGood({title:props.title})}>Купить</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default observer(Card)