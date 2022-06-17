import axios from "axios";

export const addFurniture = (obj) => {
  return axios
    .post("/api/furniture", obj)
};

// export const editMail = (updateMail, id) => {
//   return axios
//     .put("/api/talent/template/" + id, updateMail)
// };

// export const deleteMail = (id) => {
//   return axios
//     .delete("/api/talent/template/" + id)
// };

