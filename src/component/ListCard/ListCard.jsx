import React from 'react'
import Goods from '../../store/Goods'
import Card from '../Card/Card'
import Row from '../Row/Row'

const ListCard = () => {
    const headphones = [
        {
            img: "/img/1img.png",
            title: "Apple BYZ S852I",
            price: 2927,
            rate: 4.7
        },
        {
            img: "/img/2img.png",
            title: "Apple EarPods",
            price: 2327,
            rate: 4.5
        },
        {
            img: "/img/3img.png",
            title: "Apple EarPods",
            price: 2327,
            rate: 4.7
        },
        {
            img: "/img/4img.png",
            title: "Apple BYZ S852I",
            price: 2927,
            rate: 4.7
        },
        {
            img: "/img/5img.png",
            title: "Apple EarPods",
            price: 2927,
            rate: 4.5
        },
        {
            img: "/img/6img.png",
            title: "Apple EarPods",
            price: 2927,
            rate: 4.7
        },
        {
            img: "/img/7img.png",
            title: "Apple AirPods",
            price: 9527,
            rate: 4.7
        },
        {
            img: "/img/8img.png",
            title: "GERLAX GH-04",
            price: 6527,
            rate: 4.7
        },
        {
            img: "/img/9img.png",
            title: "BOROFONE BO4",
            price: 7527,
            rate: 4.7
        },
    ]
    let tempList = []
    const rows = []
    for(const card of headphones){
        tempList.push(card)
        if(tempList.length===3){
            rows.push(<Row childs={tempList}></Row>)
            tempList = []
        }
    }
    console.log(rows)
  return (
    <div className="listCard">{
        rows.map((item) => {
            return(item)
        })
    }</div>
  )
}

export default ListCard