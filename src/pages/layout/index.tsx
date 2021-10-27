import React, { FC } from "react";
import {
  HashRouter,
  Route,
  Switch,
  useHistory,
  useLocation,
  MemoryRouter as Router,
} from "react-router-dom";

import styles from "./index.module.less";

import { routerConfig } from "@/config/";
import { TabBar } from "antd-mobile";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";

const Bottom: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    history.push(value);
  };

  const tabs = [
    {
      key: "/home",
      title: "首页",
      icon: <AppOutline />,
    },
    {
      key: "/found",
      title: "发现",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/serial",
      title: "连载",
      icon: <MessageOutline />,
    },
    {
      key: "/me",
      title: "我的",
      icon: <UserOutline />,
    },
  ];
  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

function Layout() {
  return (
    <>
      <HashRouter>
        <Router initialEntries={["/home"]}>
          <div className={styles.main}>
            <Switch>
              {routerConfig.routes.map((route) => {
                return <Route key={route.path} {...route} />;
              })}
            </Switch>
          </div>
          <Bottom />
        </Router>
      </HashRouter>
    </>
  );
}

export default Layout;
