import React, { Component } from "react";
import { NavBar, Icon} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
import Router from './router/index'

const title = "icemancrem"
export default class BasicExample extends Component {
  // goBack = () =>  {
  //   console.log(this);
  //   this.props.history.go(-1)
  // }
 render () {
   return (
     <div>
        <NavBar
           mode="light"
           icon={<Icon type="left" />}
           onLeftClick={ () => window.history.go(-1)}
           rightContent={[
             <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
             <Icon key="1" type="ellipsis" />,
           ]}
         >{title}
         </NavBar>
       <Router></Router>
     </div>
   );

 }
}

