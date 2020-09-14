import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { NavBar, Icon} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css'
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
const routes = [
  {
    path: '/',
    exact: true,
    title: "首页",
    main: () => Home(),
  },
  {
    path: '/handle',
    title: "故障处置",
    main: () => Handler(),
  },
  {
    path: '/infoMng',
    title: "通知管理",
    main: () => InfoMng(),
  },
  {
    path: '/statistics',
    title: "故障统计",
    main: () => Statistics(),
  },
  {
    path: '/log',
    title: "处置日志",
    main: () => Log(),
  },
]
export default function BasicExample() {
  
  var title = "智能运维"
  return (
    <Router>
      <div>
        <getUrl></getUrl>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => History.goBack()}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >{title}
        </NavBar>
        <ul>
          { routes.map( (item,index) => {
            return <li key={index}>
              <Link to={item.path} > {item.title} </Link>
            </li>
          })}
        </ul>

        <hr />
        <Switch>
          {routes.map( (item, index) => {
            return <Route
              key={index}
              path={item.path}
              exact={item.exact}
              children={<item.main />}
            />
          })}
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
    <h2>home</h2>
  </div>
  );
}
function Handler() {
  return (
    <div>
      <h2>Handler</h2>
    </div>
  );
}

function InfoMng() {
  return (
    <div>
      <h2>InfoMng</h2>
    </div>
  );
}
function Statistics() {
  return (
    <div>
      <h2>Statistics</h2>
    </div>
  );
}
function Log() {
  return (
    <div>
      <h2>Log</h2>
    </div>
  );
}

