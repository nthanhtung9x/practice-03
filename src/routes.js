import React from 'react';

import Slide from './components/Slide';
import Products from './components/Products';
import Cart from './components/Cart';



const routes = [
    {
        path: '/practice-03/',
        exact: true,
        main: ({match}) => [<Slide/>,<Products match={match}/>]
    },
    {
        path: '/practice-03/phone',
        exact: false,
        main: ({match}) => <Products match={match}/>
    },
    {
        path: '/practice-03/tablet',
        exact: false,
        main: ({match}) => <Products match={match}/>
    },
    ,
    {
        path: '/practice-03/laptop',
        exact: false,
        main: ({match}) => <Products match={match}/>
    },
    ,
    {
        path: '/practice-03/phu-kien',
        exact: false,
        main: ({match}) => <Products match={match}/>
    },
    {
        path: '/practice-03/watch',
        exact: false,
        main: ({match}) => <Products match={match}/>
    },
    {
        path: '/practice-03/cart',
        exact: false,
        main: ({match}) => <Cart match={match}/>
    }
]

export default routes;