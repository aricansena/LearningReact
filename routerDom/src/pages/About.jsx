import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <h1>About</h1>
            <hr></hr>
            <Link to="employee">Çalışanlar Hakkında</Link>
            <hr />
            <Link to="company">Şirket Hakkında</Link>
            <Outlet></Outlet>
        </div>
    )
}

export default About