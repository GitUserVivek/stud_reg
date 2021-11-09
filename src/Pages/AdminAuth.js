import { NavLink } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios';

function CheckAuth(username, password, Data, setAccess) {
    if (username === Data[0].USERNAME && password === Data[0].PASSWORD) {
        setAccess(true)
        return true;
    } else {
        setAccess(false)
        return false;
    }
}
export default function AdminAuth({ setAccess }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [Data, setData] = useState({});
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        async function get() {
            const raw = await axios.get("https://mrunkn.000webhostapp.com/PHP/Stud_Reg/Admin.php");
            setData(raw.data)
        }
        get();
    }, []);

    return <div className="AdminAuth">
        <div className="heading"> REGISTRATION FORM  </div>

        <form >
            <label>  Usrename  </label>  <input name='username' onChange={
                (target) => {
                    setUsername(target.target.value);
                }
            } type="text"></input>

            <label>  Password  </label>  <input name='password' onChange={
                (target) => {
                    setPassword(target.target.value);
                }
            } type="text"></input>

            <input name='action' value="fetchData" type="hidden"></input>

            <NavLink exact to={auth ? "/Adminpanel" : "/AdminAuth"} className="AdminButtom">
                <button type="button" onFocus={
                    () => setAuth(CheckAuth(username, password, Data, setAccess))
                }
                >
                    Submit
                </button>
            </NavLink>
            <NavLink exact to="/User" className="AdminButtom">User Form </NavLink>
        </form>
    </div >
}