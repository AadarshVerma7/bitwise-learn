import { hash } from "bcrypt";
import { hashPassword } from "../utils/password";
async function main(name) {
    const pass = await hashPassword(name);
    console.log(pass);
}
// const data = {
//   name:"Superadmin",
//   email:"superadmin@gmail.com" ,              
//   password:"$2b$10$SN8ebHRaH7AoTYW8NkQsRO/Qk7dZ4E53cw6EgGyOS61g6OpQ8/glm",
//   ROLE:"SUPERADMIN",
//   createdAt: "2026-02-01T10:30:00.000Z",
//   updatedAt: "2026-02-01T10:30:00.000Z"    
// }
main("superadmin");