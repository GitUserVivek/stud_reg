import { useEffect, useState } from "react";
// import { HashRouter as Router, NavLink, Route } from "react-router-dom";
import axios from "axios";
import '../Css/Body.css';
import '../Css/AdminPanel.css';

export default function Adminpanel() {
    const [Data, setData] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        async function get() {
            let raw = await axios.get("https://mrunkn.000webhostapp.com/PHP/Stud_Reg/Data.php");
            raw = raw.data;
            setData((raw))
        }
        get();
    }, []);
    return <div className="AdminPanel">
        <div className="Top">  <div className="heading">admin panel  </div>  <div className="search">search <input type="text" onChange={
            (target) => {
                setSearch(target.target.value)
            }
        }></input> </div> </div>
        <div className="content">
            <table>
                <tbody>
                    <tr className="columns"><td>SR</td><td>NAME</td><td>DEPARTMENT</td><td>COURSE</td></tr>
                    {
                        Data.map((index) => {
                            return search ? index["NAME"].includes(search) ? <tr key={index["SR"]}>
                                <td>{index["SR"]}</td><td>{index["NAME"]}</td><td>{index["DEPARTMENT"]}</td><td>{index["COURSE"]}</td>
                            </tr> : null : <tr key={index["SR"]}>
                                <td>{index["SR"]}</td><td>{index["NAME"]}</td><td>{index["DEPARTMENT"]}</td><td>{index["COURSE"]}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
}