"use client"
import { useEffect, useState } from "react"
export function Card(props) {
    
    const [data, setData] = useState(0)
    var flag=false

    useEffect(() => { const iv = setInterval(() => {
     if (flag==true){ console.log("leall");return}
     if (data == props.list.length - 1) { setData(0) } else { setData(data + 1) } 
    }, 2000); return () => clearInterval(iv) }, [data])

    function Move(){
        if (data==props.list.length-1){setData(0)} else {setData(data+1)}
        console.log(data)
    }

    function True(){
        flag=true
    }
    function False(){
        flag=false
    }

    
    return (
        
        <>
        <div className="flex items-center h-[100%] justify-evenly ">

            <div className="w-[33%]" >
            <svg width="100%" height="40" onClick={Move} onMouseEnter={True} onMouseLeave={False}>
            <circle cx={"50%"} cy={"50%"} r="20" fill="blue"/>
            </svg>
            </div>

            <div className="w-[33%]">
            <p className={`opacity-70 transition-opacity duration-500 ease-in-out hover:opacity-100 left-[33%]`}>{props.list[data]}</p>
            </div>

            <div className="w-[33%]">
            <svg width="100%" height="40" onClick={Move} onMouseEnter={True} onMouseLeave={False}>
            <circle cx={"50%"} cy={"50%"} r="20" fill="blue"/>
            </svg>
            </div>
            

        </div>
        </>
    )
}