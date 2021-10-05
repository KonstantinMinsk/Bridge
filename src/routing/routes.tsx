import { ComponentType } from 'react';
import BridgePage from '../pages/BridgePage';
import LoginPage from '../pages/LoginPage';

interface RouteValue {
  path: string;
  name: string;
  component: ComponentType;
}

const Routes: { [key: string]: RouteValue } = {
  Home: { path: '/', name: 'Bridge', component: BridgePage },
  Login: {
    path: '/login',
    name: 'LOGIN',
    component: LoginPage,
  },
};

export default Routes;
