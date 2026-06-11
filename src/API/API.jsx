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
















