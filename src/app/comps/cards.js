import { useEffect, useState } from "react"
export function Card(props) {
    const [data, setData] = useState(0)
    const [opacity,setOpacity] =useState(100)

    useEffect(() => { const iv = setInterval(() => {
     if (data == props.list.length - 1) { setData(0) } else { setData(data + 1) } 
    }, 2000); return () => clearInterval(iv) }, [data])

    return (
        <>
            <h1 className={`opacity-70 transition-opacity duration-500 ease-in-out hover:opacity-100`}>{props.list[data]}</h1>
        </>
    )
}