import { Suspense } from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import { ReactComponent as Logo } from 'common/svg/logo-full.svg'

const { Content, Header } = Layout;

function ProtectedRoutes() {

  return (
    <Layout>
      <Header className="site-header" ><Logo/> </Header>
      <Layout>
        <Content className="site-content">
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              {routes.map(({component: Component, path, exact}, index) => (
                <Route path={`/${path}`} key={index} exact={exact}>
                  <Component/>
                </Route>
              ))}
            </Suspense>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

export default ProtectedRoutes;
