import React from 'react';

import Slide from './components/Slide';
import Products from './components/Products';
import Navigation from './components/Navigation';
import Cart from './components/Cart';



// eslint-disable-next-line no-sparse-arrays
const routes = [
    {
        path: '/practice-03/',
        exact: true,
        main: ({match}) => [<Slide/>,<Products match={match}/>,<Navigation/>]
    },
    {
        path: '/practice-03/phone',
        exact: false,
        main: ({match}) => [<Products match={match}/>,<Navigation/>]
    },
    {
        path: '/practice-03/tablet',
        exact: false,
        main: ({match}) => [<Products match={match}/>,<Navigation/>]
    },
    ,
    {
        path: '/practice-03/laptop',
        exact: false,
        main: ({match}) => [<Products match={match}/>,<Navigation/>]
    },
    ,
    {
        path: '/practice-03/phu-kien',
        exact: false,
        main: ({match}) => [<Products match={match}/>,<Navigation/>]
    },
    {
        path: '/practice-03/watch',
        exact: false,
        main: ({match}) => [<Products match={match}/>,<Navigation/>]
    },
    {
        path: '/practice-03/cart',
        exact: false,
        main: ({match}) => <Cart match={match}/>
    }
]

export default routes;