// // import React, { useState } from 'react'
// // const API = () => {
// // const [data, setData] = useState(null)
// // const fetch_data = async () => {
// // let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Bangalore&appid=2dc7a486507de464c6aa30fce2a468b3")
// // let result = await response.json()
// // setData(result)
// //   }
// //   return (
// //     <div>
// //       <button onClick={fetch_data}>Bengaluru Weather </button>
// //      <h1>{data ? data.name : ""}</h1>
// //  <h2>{data ? new Date(data.sys.sunrise * 1000).toLocaleTimeString(): ""}</h2>
// // <h2>{data ? new Date(data.sys.sunset * 1000).toLocaleTimeString(): ""}</h2>
// // </div>
// //   )
// // }

// // export default API


// // import React, { useState } from 'react'
// // const API = () => {
// // const [city, setCity] = useState("")
// // const [data, setData] = useState(null)
// // const fetch_data = async (e) => {
// // e.preventDefault()

// //     let response = await fetch(
// //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2dc7a486507de464c6aa30fce2a468b3`
// //     )

// //     let result = await response.json()

// //     setData(result)
// //   }

// //   return (
// //     <div>

// //       <form onSubmit={fetch_data}>

// //         <input
// //           type="text"
// //           placeholder="Enter City Name"
// //           value={city}
// //           onChange={(e) => setCity(e.target.value)}
// //         />

// //         <button type="submit">
// //           Search
// //         </button>

// //       </form>

// //       <h1>{data ? data.name : ""}</h1>

// //       <h2>
// //         {data
// //           ? new Date(data.sys.sunrise * 1000).toLocaleTimeString()
// //           : ""}
// //       </h2>

// //       <h2>
// //         {data
// //           ? new Date(data.sys.sunset * 1000).toLocaleTimeString()
// //           : ""}
// //       </h2>

// //     </div>
// //   )
// // }

// // export default API












// import React, { useState } from 'react'

// const API = () => {

//     const [weather,setweather]=useState(null)
//     const[city,setCity]=useState("")
//     const fetch_data=async(e)=>{
//        e.preventDefault();
//         let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2dc7a486507de464c6aa30fce2a468b3`
//        let data=await fetch(url)
//        let fd=await data.json();
//        setweather(fd)
//     }
//   return (
//     <div>
//       <form onSubmit={fetch_data}>

//       <input type="text" placeholder='enter the city name' value={city} onChange={(e)=>setCity(e.target.value)}  />
//       <button>fetch_data</button>
//       </form>
//       <h1>{weather?weather.name:""}</h1>
//       <h1>{weather?new Date(weather.sys.sunset*1000).toLocaleTimeString():""}</h1>
//       <h1>{weather?new Date(weather.sys.sunrise*1000).toLocaleTimeString():""}</h1>
//     </div>
//   )
// }

// export default API





// import React, { useState } from 'react'

// const API = () => {
//     const[data,setdata]=useState("")
//     const[fd,setfd]=useState("")
//     const submit=(e)=>{
//       setdata(e.value);
//     }
//     const fda=()=>{
//         setfd(data)
//     }
//   return (
//     <div>
//       <input type="text" placeholder="enter the name"  onChange={(e)=>setdata(e.target.value)}/>
//       <button onClick={fda}>Submit</button>
//       <h1>{fd}</h1>
//     </div>
//   )
// }

// export default API


// import React, { useRef, useState } from 'react'

// const API = () => {
//     const[name,setname]=useState("")
//     let inp=useRef("")
//     const click=()=>{
//         setname(inp.current.value)
//     }
//   return (
//     <div>
//       <div className="container">
//         <div className="type">
//             <input ref={inp} type="text" placeholder='enter the name'  />
//             <button onClick={click}>submit</button>
//             <h1>{name}</h1>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default API

// import React, { useState } from 'react'
// import { useRef } from 'react'

// const API = () => {
//     let fn=useRef("")
//     let ln=useRef("")
//     let con=useRef("")
//     const[details,setdetails]=useState({})
//     const click=()=>{
//         setdetails({
//             f_n:fn.current.value,
//             l_n:ln.current.value,
//             c_n:con.current.value
//         })
//         fn.current.value=""
//         ln.current.value=""
//         con.current.value=""
//     }
//   return (
//     <div>
//         <div className="conta">
//             <div className="type">
//                 <input ref={fn} type="text" placeholder='enter the first name' /><br />
//                 <input ref={ln} type="text" placeholder='ente the second name' /><br />
//                 <input ref={con} type="text" placeholder='enter the contact number' /><br />
//                 <button onClick={click}>Submit</button>
//                 <h1>name:{details.f_n}{details.l_n}</h1>
//                 <h1>contact:{details.c_n}</h1>
                
//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default API







// import React, { useEffect, useState,useRef } from 'react'

// const API = () => {
//     let a=useRef(0)
//     const [count,setcount]=useState(0)
//     useEffect(()=>{
//         console.log(a.current+=1);
        
//     },[count])
//     const click=()=>{
//         setcount(count+1)
//     }
//   return (
//     <div>
//         <h1>{count}</h1>
//       <button onClick={click}>submit</button>
//     </div>
//   )
// }

// export default API




// import React, { useState } from 'react'

// const API = () => {
//     const[text,settext]=useState("");
//     const[qr,setqr]=useState("");
//     const click=(e)=>{
//       setqr(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${text}`);
//     }
//   return (
//     <div>
//       <input type="text" placeholder='enter anything' onChange={(e)=>{settext(e.target.value)}}/>
//       <button onClick={click}>submit</button>
//       <img src={qr} alt="image loading...." />
//     </div>
//   )
// }

// export default API















// import React, { useRef, useState } from 'react'
// import "./API.css"
// const API = () => {
//   const tt=useRef("")
//   const[text,settext]=useState("")
//   const[qr,setqr]=useState("")
  
//   const sub=()=>{
//     settext(
//       tt.current.value
//     )
//   setqr(
//     `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`
//   )
//   tt.current.value=""
//   }
//   return (
//     <div className='con'>
//       <div className="container">
//         <input ref={tt} type="text" placeholder=" enter anything" />
//         <button onClick={sub}>Submit:-</button>
//         <img src={qr} alt="" />
//       </div>
      
//     </div>
//   )
// }

// export default API


import React, { useRef, useState } from 'react'
import "./API.css"
const API = () => {
  const fetch=useRef("")
  const[text,settext]=useState("")
  const[qr,setqr]=useState("")
  const submit=()=>{
  settext(fetch.current.value)
  setqr(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`)
  fetch.current.value=""
  }
  return (
    <div>
      <div className="con">
        <div className="container">

      <input ref={fetch} type="text" placeholder='enter anything' />
      <button onClick={submit}>Submit</button>
      <img src={qr} alt="image loading" />

        </div>
      </div>
    </div>
  )
}

export default API
