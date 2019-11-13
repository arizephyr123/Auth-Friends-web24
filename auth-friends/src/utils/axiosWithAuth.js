
import axios from 'axios';

export const axiosWithAuth = () => {
 const token = sessionStorage.getItem('token');

 return axios.create({
     baseURL: 'http://localhost:5000',
     headers: {
         Authorization: token
     }
 });
};




// import axios from "axios";

//  export const axiosWithAuth = () => {
//   const token = localStorage.getItem("token");

//   //written as fn instead of singleton instance so calling axiosWithAuth will return new instance each time, can be re-used 
//   return axios.create({
//        baseURL: 'http://localhost:5000',
//     headers: {
//       'Authorization': token
//     }
//   });
// };
