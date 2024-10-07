import { Button, Form } from "react-bootstrap";
import styles from "./Login.module.css";
import { FormEvent, useState } from "react";
import { useForm } from "../../../hooks/useform";
import { useAppDispatch } from "../../../hooks/redux";
import { setLogin } from "../../../redux/slices/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
   const [showPassword, setShowPassword] = useState(false);

   const { values, handleChange } = useForm({
      user: "",
      password: "",
   });
   const { user, password } = values;
   const dispatch = useAppDispatch()
   const navigate = useNavigate();


   const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const response = await fetch("/user.json");
      const userData = await response.json()
      const userFound = userData.users.find(
         (u:{username: string; password:string }) => u.username === user && u.password === password
      )
      if(userFound){
         console.log(user)
         dispatch(setLogin(user));
         navigate("/home")
      } else {
         alert("Usuario o Contraseña incorrecto")
      }
   };
   

   return (
      <div className={styles.containerLogin}>
         <div className={styles.containerForm}>
            <div>
               <span
                  style={{ fontSize: "10vh" }}
                  className="material-symbols-outlined"
               >
                  group
               </span>
            </div>
            <Form onSubmit={handleSubmitForm}>
               <Form.Group
                  className="mb-3"
               >
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                     onChange={handleChange}
                     type="text"
                     name="user"
                     value={user}
                     placeholder="Usuario"
                  />
               </Form.Group>
               <Form.Group
                  className="mb-3"
               >
                  <Form.Label>Contraseña</Form.Label>
                  <Form.Control
                     name="password"
                     value={password}
                     onChange={handleChange}
                     type={showPassword ? "text" : "password"}
                     placeholder="Contraseña"
                  />
               </Form.Group>
               <Form.Check
                  onChange={() => {
                     setShowPassword(!showPassword);
                  }}
                  type="switch"
                  id="custom-switch"
                  label="Mostrar contraseña"
               />
               <div className="d-flex justify-content-center">
                  <Button type="submit" variant="primary">Iniciar sesion</Button>
               </div>
            </Form>
         </div>
      </div>
   );
};
