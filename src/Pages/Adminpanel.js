import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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

        <div className="Top">  <div className="heading">admin panel   <NavLink exact to="/AdminAuth" className="AdminButtom">LogOut </NavLink>  </div>
            <div className="search"> <input type="text" placeholder="search" onChange={
                (target) => {
                    setSearch(target.target.value)
                }
            }></input> </div> </div>
        <div className="content">
            <table>
                <tbody>
                    <tr className="columns"><td>SR</td><td>NAME</td><td>DEPARTMENT</td><td>COURSE</td><td>DELETE</td></tr>
                    {
                        Data.map((index) => {
                            return search ? index["NAME"].includes(search) ? <tr key={index["SR"]}>
                                <td>{index["SR"]}</td><td>{index["NAME"]}</td><td>{index["DEPARTMENT"]}</td><td>{index["COURSE"]}</td> <td className="operation"><form action="https://mrunkn.000webhostapp.com/PHP/Stud_Reg/StoreData.php" method="POST">
                                    <input name='action' defaultValue="DeleteData" type="hidden"></input>
                                    <input name='index' defaultValue={index["SR"]} type="hidden"></input>
                                    <input type="SUBMIT"></input>

                                </form></td>
                            </tr> : null : <tr key={index["SR"]}>
                                <td>{index["SR"]}</td><td>{index["NAME"]}</td><td>{index["DEPARTMENT"]}</td><td>{index["COURSE"]}</td>
                                <td className="operation"><form action="https://mrunkn.000webhostapp.com/PHP/Stud_Reg/StoreData.php" method="POST">
                                    <input name='action' defaultValue="DeleteData" type="hidden"></input>
                                    <input name='index' defaultValue={index["SR"]} type="hidden"></input>
                                    <input type="SUBMIT" defaultValue="DELETE"></input>

                                </form></td>
                            </tr>
                        })
                    }
                    <tr><td className="operation"><form action="https://mrunkn.000webhostapp.com/PHP/Stud_Reg/StoreData.php" method="POST">
                        <input name='action' defaultValue="TrunketTable" type="hidden"></input>
                        <input type="SUBMIT" defaultValue="TRUNCATE" ></input>

                    </form></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}