import React from 'react'
import Auth from '../pages/Auth'
import Home from '../pages/Home'
import { Routes, Route } from 'react-router-dom'

function RouterConfig() {
    return (
        <div>

            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/auth' element={<Auth />} />
            </Routes>

        </div>
    )
}

export default RouterConfig