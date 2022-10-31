import React from 'react'
import Card from '../Card/Card'

const Row = (props) => {
  return (
    <div className='row'>
        {props.childs.map((item) =>{
            return(<Card img={item.img} title={item.title} price={item.price} rate={item.rate}></Card>)
        })}
    </div>
  )
}

export default Row