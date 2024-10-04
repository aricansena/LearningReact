import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

function Todo() {
    return (
        <div className='todos flex-space-between'>
            <div>
                ilk todo
            </div>
            <div>
                <CiCircleRemove className='icon' />
                <CiHeart className='icon' />
            </div>
        </div>
    )
}

export default Todo