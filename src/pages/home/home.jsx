import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import {Grid} from 'antd-mobile'
import './home.css'
import MeauImg from '../../img/1600158854838.jpg'
const data = [
    {
        icon: MeauImg,
        text: '故障处置',
        path: '/handler'
    },
    {
        icon: MeauImg,
        text: '通知管理',
        path: '/infoMng'
    },
    {
        icon: MeauImg,
        text: '故障统计',
        path: '/statistics'
    },
    {
        icon: MeauImg,
        text: '处置日志',
        path: '/log'
    },
]

export default class Home extends Component {
    go = (item) => {
        console.log(this);
        this.props.history.push({
            pathname: item,
        })
    }
    render() {
        return  <div>
                    <img src={require("../../img/1600158956870.jpg")} alt=""/>
                    <Grid data={data} activeStyle={false} columnNum={2} onClick={ el => this.go(el.path)}></Grid>
                </div>
    }
}