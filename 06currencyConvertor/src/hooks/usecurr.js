import {useEffect, useState} from "react"

function useCurrrencyInfo(currency)
{
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    },[])
}