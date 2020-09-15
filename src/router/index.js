import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'; 
import AsyncComponent from '../utils/asyncComponent'
import home from "../pages/home/home";

// const handler = lazy( ()=> import("../pages/handler/handler"));
// const infoMng = lazy(() => import("../pages/infoMng/infoMng"));
// const log = lazy(() => import("../pages/log/log"));
// const statistics = lazy(() => import("../pages/statistics/statistics"));
const handler = AsyncComponent( () => import('../pages/handler/handler'))
const infoMng = AsyncComponent( () => import('../pages/infoMng/infoMng'))
const log = AsyncComponent( () => import('../pages/log/log'))
const statistics = AsyncComponent( () => import('../pages/statistics/statistics'))
// react-router4 不再推荐将所有路由规则放在同一个地方集中式路由，子路由应该由父组件动态配置，组件在哪里匹配就在哪里渲染，更加灵活
// export default class RouteConfig extends Component{
//   render(){
//     return(
//       <HashRouter>
//           <Subscribe fallback={Loading}>
//             <Switch>
//                 <Route path="/" exact component={home} />
//                 {/* <Route path="/handler" component={handler} />
//                 <Route path="/infoMng" component={infoMng} />
//                 <Route path="/log" component={log} />
//                 <Route path="/statistics" component={statistics} />
//                 <Redirect to="/" /> */}
//             </Switch>
//           </Subscribe>
//       </HashRouter>
//     )
//   }
// }
// function Loading() {
//     return <h1>Loading</h1>
// }
export default class RouteConfig extends Component{
    render(){
      return(
        <HashRouter>
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/handler" component={handler} />
                 <Route path="/infoMng" component={infoMng} />
              <Route path="/log" component={log} />
                <Route path="/statistics" component={statistics} />
            <Redirect to="/" />
          </Switch>
        </HashRouter>
      )
    }
  }