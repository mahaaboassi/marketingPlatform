"use client"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Errorcomponent = ()=>{
    const [ open, setOpen ] = useState(false)
    const openRedux = useSelector(state => state.message)
    useEffect(()=>{
        
    },[openRedux])
    return <div>
        <h1>Error </h1>
    </div>

}

export default Errorcomponent