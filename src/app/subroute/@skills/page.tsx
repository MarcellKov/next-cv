'use client'
import {Card} from "@/app/comps/cards"
export default function Page(){
    return(
        <>
            <Card list={["Backend","Frontend","Database","DevOps"]} />
        </>
    )
}