import { NavLink } from 'react-router-dom';

export default function AdminAuth() {
    return <div className="AdminAuth">
        <form action="https://mrunkn.000webhostapp.com/PHP/Stud_Reg/StoreData.php" method="POST">
            <label>  Usrename  </label>  <input name='username' type="text"></input>
            <label>  Password  </label>  <input name='password' type="text"></input>
            <input name='action' value="fetchData" type="hidden"></input>
            <button type="submit">Submit </button>
            <NavLink exact to="/User" className="AdminButtom">User Form </NavLink>
        </form>
    </div>
}