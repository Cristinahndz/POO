import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from './firebase';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = ({ setActiveUser }) => {
  const emailRef = useRef(null);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [newEmail, setNewEmail] = useState(true);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, [emailRef]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = password.length >= 8 && password.length <= 24;
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  const registerUser = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Guardar la información adicional del usuario en Firestore
      await addDoc(collection(db, "usuarios"), {
        userId: user.uid,
        email: email,
        
      });

      // Mostrar mensaje de éxito y activar al usuario
      Swal.fire({
        icon: "Exitoso",
        title: "Exitoso!",
        text: "Confirma la creacion de la cuenta?",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          setActiveUser(email);
        }
      });
    } catch (error) {
      console.error("Error al agregar el documento: ", error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "No se pudo crear la cuenta.",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  return (
    <section className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-indigo-400 to-indigo-800">
      <h1 className="ml-5 mr-5 text-3xl sm:text-4xl lg:text-5xl text-gray-100 font-extrabold text-center">
        Bienvenido a Nuestro Restaurante!
      </h1>
      <div className="mt-1 bg-gradient-to-l from-indigo-600 to-indigo-200 rounded-lg w-1/2 h-2 sm:h-3 md:max-w-md lg:max-w-lg lg:h-4"></div>

      <div className="mt-7 w-9/12 max-w-lg px-6 py-3 bg-white border-2 rounded-lg shadow-lg hover:border-indigo-500 transition-all duration-300">
        <div className="text-center border-b-2 sm:border-b-4">
          <h3 className="p-1 font-extrabold text-xl text-gray-700 sm:text-2xl lg:text-3xl sm:mb-1">
            Registro
          </h3>
        </div>

        <h1 className="mt-3 text-gray-700 sm:text-lg">Registrate para ordenar.</h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-3 sm:text-lg transition-all duration-300"
        >
          <label
            htmlFor="email"
            className="flex items-center mt-1 text-lg font-bold text-gray-700"
          >
            Correo electronico:
            <span className={validEmail && newEmail ? "" : "hidden"}>
              <FontAwesomeIcon
                icon={faCheck}
                className="block ml-1 h-6 w-6 text-green-600"
              />
            </span>
            <span
              className={!email || (newEmail && validEmail) ? "hidden" : ""}
            >
              <FontAwesomeIcon
                icon={faTimes}
                className="block ml-1 h-6 w-6 text-red-600"
              />
            </span>
          </label>

          <input
            type="text"
            id="email"
            ref={emailRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-invalid={validEmail ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
            className="mt-1 input-indigo"
          />

          <div
            className={
              emailFocus && email && (!validEmail || !newEmail)
                ? "flex items-center mt-1"
                : "sr-only"
            }
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-indigo-500 h-5 w-5"
            />
            <p className="ml-2 font-semibold text-gray-800">
              {!validEmail
                ? "Escribe una direccion de correo electronico valida."
                : "Esta cuenta ya existe."}
            </p>
          </div>

          <label
            htmlFor="Contraseña"
            className="flex items-center mt-2 text-lg font-bold text-gray-700"
          >
            Contraseña:
            <span className={validPassword ? "" : "hidden"}>
              <FontAwesomeIcon
                icon={faCheck}
                className="block ml-1 h-6 w-6 text-green-600"
              />
            </span>
            <span className={validPassword || !password ? "hidden" : ""}>
              <FontAwesomeIcon
                icon={faTimes}
                className="block ml-1 h-6 w-6 text-red-600"
              />
            </span>
          </label>

          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            aria-invalid={validPassword ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPasswordFocus(true)}
            onBlur={() => setPasswordFocus(false)}
            className="mt-1 input-indigo"
          />

          <div
            className={
              passwordFocus && !validPassword
                ? "flex items-center mt-1"
                : "sr-only"
            }
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-indigo-500 h-5 w-5"
            />
            <p className="ml-2 font-semibold text-gray-800">
              8 a 24 caracteres .
            </p>
          </div>

          <label
            htmlFor="Confirma Contraseña"
            className="flex items-center mt-2 text-lg font-bold text-gray-700"
          >
            Confirma Contraseña:
            <span className={validMatch && matchPassword ? "" : "hidden"}>
              <FontAwesomeIcon
                icon={faCheck}
                className="block ml-1 h-6 w-6 text-green-600"
              />
            </span>
            <span className={validMatch || !matchPassword ? "hidden" : ""}>
              <FontAwesomeIcon
                icon={faTimes}
                className="block ml-1 h-6 w-6 text-red-600"
              />
            </span>
          </label>

          <input
            type="password"
            id="confirm_password"
            onChange={(e) => setMatchPassword(e.target.value)}
            value={matchPassword}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            className="mt-1 input-indigo"
          />

          <div
            className={
              matchFocus && !validMatch ? "flex items-center mt-1" : "sr-only"
            }
          >
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-indigo-500 h-5 w-5"
            />
            <p className="ml-2 font-semibold text-gray-800">
              Debe coincidir con la primera contraseña.
            </p>
          </div>

          <button
            disabled={
              !validEmail || !validPassword || !validMatch || !newEmail
            }
            className="mt-4 py-2 rounded-lg shadow-xl bg-indigo-500 text-gray-100 hover:bg-indigo-600 hover:text-white disabled:opacity-60 disabled:pointer-events-none font-bold disabled:shadow-none text-xl sm:text-2xl"
          >
            Registrarse
          </button>
        </form>
        <div className="mt-3 flex text-gray-700 font-semibold sm:text-lg">
          <p>
            Ya estas registrado?{" "}
            <Link
              to="/login"
              className="text-indigo-500 text-lg sm:text-xl font-bold hover:text-indigo-700"
            >
              Iniciar Sesion
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
