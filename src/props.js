import React from 'react'

// function Billings(props) {
//   return (
//     <div>
//         <h1>He is {props.name}</h1>
//         <h1>{props.age}</h1>
//         <h1>{props.education}</h1>
//         <h1>{props.city}</h1>
//     </div>
//   )
// }

// export default Billings


// -------------------Props destructuring-----------
// function Billings({name,age,education,city}) {
//     return (
//       <div>
//           <h1>He is {name}, {age}, {education}, {city}</h1>
//       </div>
//     )
//   }
  
//   export default Billings






// // ----------Result------------

// import React from 'react'
// import Billings from './billings'

// function Pharma() {
//   return (
//     <div>
//         <h2>
//             <Billings name="Suvendu" age="20" education="Bsc" city="Jharsugudas"/>
//             <Billings name="Tuna" age="20" education="Bsc" city="Jharsugudas"/>
//             <Billings name="Surya" age="20" education="Bsc" city="Jharsugudas"/>
//             <Billings name="Manas" age="20" education="Bsc" city="Jharsugudas" />
            
//         </h2>
//     </div>
//   )
// }

// export default Pharma;

// // -------------------------------------------Children---------------------------------------------------------------------------------------
// import React from 'react'

// function Billings(props) {
//   return (
//     <div>
//         <h1>He is {props.name}</h1>
//             {
//                 props.children  //predefined
//             }
//     </div>
//   )
// }

// export default Billings

// // ----------Result-----------------

// import React from 'react'
// import Billings from './billings'

// function Pharma() {
//   return (
//     <div>
//         <h2>
//             <Billings name="Suvendu">
//                 <h5>How is he</h5>
//             </Billings>

            
//         </h2>
//     </div>
//   )
// }

// export default Pharma

// -------------------------------------parent to chldren------------------------------------------------

// import React, { useState } from 'react'
// import Billings from './billings'

// function Pharma() {
//     const[name,setName]=useState("Suvendu");
//     const changename=(ssss)=>{
//         setName(ssss)
//     }
//   return (
//     <div>
//         <h2>{name}</h2>
//         <h2>
//             <Billings changename={changename}/>
//             {/* <Billings changename={ssss=>setName(ssss)}/> */}

            
//         </h2>
//     </div>
//   )
// }

// export default Pharma


// ----------------Result----------------------

// import React from 'react'

// function Billings(props) {
  
//   return (
//     <div>
//        <button onClick={()=>props.changename("Babul")}>Click Me</button>
//     </div>
//   )
// }

// export default Billings


