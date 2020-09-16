import React, {Component} from 'react'
import {List, Flex, Radio} from 'antd-mobile'
import './index.less'
const Item = List.Item
const RadioItem = Radio.RadioItem;

class Jug extends Component {
    state = {
        value1: 3,
    }
    onchange = (item) => {
        console.log(item);
        this.setState({
            value1: item
        })
    }
    render () {
        const data = [
            {value: 0, label: "故障"},
            {value: 1, label: "非故障"}
        ]
        const {value1} = this.state
        return <main>
            <List renderHeader={ () => <div className="header"><i className="title">松江</i></div>}>
                <Item extra={'name'}>故障设备</Item>
                <Item extra={'name'}>故障级别</Item>
                <Item extra={'name'}>故障类别</Item>
            </List>
            {/* <Flex style={{ padding: '15px' }}> */}
                {data.map( (item,index) => {
                    return <p>{item.label}<input type='radio' value={item.value} checked={value1 === item.value} onChange={ () => this.onchange(item.value)} ></input>
                        {/* <RadioItem defaultChecked={true} key={item.value} checked={ value1 === item.value} onchange={ () => this.onchange(item.value)}>{item.label}</RadioItem> */}
                        </p>
                })}
            {/* </Flex> */}
        </main>
    }
}
export default Jug