// import React, { useRef } from "react"
// import axios from "axios"
// import Layout from "../components/Layout"
// import SEO from "../components/seo"

// const SuccessPage = () => {
//   const trackingCodeRef = useRef()

//   async function handleTrackingCode() {
//     const trackingCode = trackingCodeRef.current.value
//     try {
//       const res = await axios.get(
//         `https://api-eu.dhl.com/track/shipments?trackingNumber=${trackingCode}&language=en`,
//         {
//           headers: {
//             "DHL-API-Key": "demo-key",
//           },
//         }
//       )

//       console.log(res.data)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <Layout currentPage="home">
//       <SEO title="Tracking Page" description="Welcome to Catto Joy" />
//       <main className="TrackingPage">
//         <input type="text" className="form-control" ref={trackingCodeRef} />
//         <button
//           className="btn btn-outline-secondary"
//           onClick={handleTrackingCode}
//         >
//           Track
//         </button>
//       </main>
//     </Layout>
//   )
// }

// export default SuccessPage
