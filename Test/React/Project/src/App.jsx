import { useState,useEffect } from 'react'
import axios from "axios";
import './App.css'
import useNetworkStatus from './useNetwork';
function App() {
  const [data, setdata] = useState([]);
  const { online, downlink, effectiveType, rtt, measuredSpeed, measuredLatency , speedUnit} = useNetworkStatus();

useEffect(()=>{
  console.log(measuredLatency,measuredSpeed)
getdata();
},[]);

const getdata=async()=>{
await axios.get("https://dummyjson.com/products").then(res=>{console.log(res.data);setdata(res.data.products)}).catch(err=>console.log(err))
}

const postdata=async()=>{
await axios.post("",{},{headers:{"content-type":'application/json'}}).then(res=>{console.log(res)}).catch(err=>console.log(err));
}
  return (
    <>
    {/* {data.map((val,index)=>(
<li key={index}>{val.title}</li>
    ))} */}

<div style={{ textAlign: "center", padding: "20px" }}>
      <h2>📡 Real-Time Network Status</h2>
      <p><strong>Status:</strong> {online ? "🟢 Online" : "🔴 Offline"}</p>
      <p><strong>Estimated Speed:</strong> {downlink} Mbps (from browser)</p>
      <p><strong>Estimated Network Type:</strong> {effectiveType}</p>
      <p><strong>Estimated Latency (RTT):</strong> {rtt} ms</p>
      <hr />
      <h3>📊 Measured Real-Time Data</h3>
      <p><strong>Actual Speed:</strong> {measuredSpeed} {speedUnit}</p>
      <p><strong>Actual Latency:</strong> {measuredLatency} ms</p>
    </div>
    </>
  )
}

export default App
