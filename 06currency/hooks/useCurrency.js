import {useState ,useEffect} from "react"

import React from 'react'

function useCurrencyInfo(currency) {
const [data,setData] =useState({});
useEffect((e)=>{
  fetch(`https://v6.exchangerate-api.com/v6/e444c9c92f77393e1529561d/latest/${currency}`)
  .then((res)=>{res.json()})
  .then((res)=>setData(res[currency]))
}
,[currency])
console.log(data);
return data
}

export default useCurrencyInfo;