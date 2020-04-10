// import React from "react";
// import db from "firebase";
// // import { SpellInput } from "./SpellInput";

// function Admin() {
//   const [pedidos, setPedidos] = React.useState([]);
//   //   const [newQuantity, setNewQuantity] = React.useState();

//   //   React.useEffect(() => {
//   //     const fetchData = async () => {
//   //       const data = await db.collection("pedidos").get();
//   //       console.log(data);
//   //       //   setPedidos(data.docs.map((doc) => console.log("DB", doc.data())));
//   //     };
//   //     fetchData();
//   //   }, []);

//   //   const onCreate = () => {
//   //     const db = firebase.firestore();
//   //     db.collection("pedidos").add({ quantity: newQuantity });
//   //   };

//   db.collection("pedidos")
//     .get()
//     .then((data) => {
//       console.log(data);
//     });

//   return (
//     <ul>
//       hola
//       {/* <input
//         value={newQuantity}
//         onChange={(e) => setNewQuantity(e.target.value)}
//       />
//       <button onClick={onCreate}>Creat</button> */}
//       {/* {pedidos.map((pedido) => (
//         <li key={pedido.id}>{pedido.id}</li>
//       ))} */}
//     </ul>
//   );
// }

// export default Admin;
