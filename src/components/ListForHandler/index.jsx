import React, {Component, Fragment} from 'react'
import './index.css'
import {Button} from 'antd-mobile'
const count = 2
function ListHeader() {
    return <div className="header">
        <i className="title">张江（{count}）</i>
        <Button size={"large"} inline={true} type={"warning"} className="fr mr15">故障判定</Button>
    </div>
}
function Content() {
    return <Fragment>
        <div className="Content">
            
        </div>
    </Fragment>
}

class ListHandler extends Component {
    render () {
        return <Fragment>
            <ListHeader />
            <Content />
        </Fragment>
    }
}

export default ListHandler