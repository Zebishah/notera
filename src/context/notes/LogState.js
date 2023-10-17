import { useState } from "react";
import LogContext from "./LogContext";

const LogContexts = (props) => {
    let [Users, setUsers] = useState(null);
    let [email, setEmail] = useState(null);
    let [pass, setPass] = useState(null);

    let [token, setToken] = useState(null);

    let host = process.env.REACT_APP_API_HOST;
    let fetchLogs = async () => {
        const response = await fetch(`${host}/api/auth/fetchUser`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },

        });
        const data = await response.json();
        setUsers(data)


    }

    let sign_up = async (name, Email, Password) => {
        const response = await fetch(`${host}/api/auth/signUp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, Email, Password }),
        });
        const data = await response.json();
        console.log(data);
        if (data.success === false) {

            setEmail(false)

        }
        else {

            setEmail(true)
        }


    }
    let sign_in = async (Email, Password) => {


        const response = await fetch(`${host}/api/auth/signIn`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ Email, Password }),
        });
        let Data = await response.json();
        console.log(Data);
        setToken(Data.your_login_token)

        if (Data.success === false) {

            setEmail(false)
        }
        else {

            setEmail(true)
        }
        if (Data.p_success === false) {

            setPass(false)
        } else {

            setPass(true)
        }


    }


    return (

        <LogContext.Provider value={{ sign_up, sign_in, fetchLogs, email, pass, token, Users }}>
            {props.children}
        </LogContext.Provider>
    )
}

export default LogContexts