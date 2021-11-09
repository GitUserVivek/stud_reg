import { NavLink } from 'react-router-dom';
import '../Css/Body.css';

export default function Users() {
    return <>
        <div className="heading"> REGISTRATION FORM  </div>

        <form action="https://mrunkn.000webhostapp.com/PHP/Stud_Reg/StoreData.php" method="POST">
            <label>name        </label>  <input name='name' type="text"></input>
            <label>dob         </label>  <input name='dob' type="date"></input>
            <label>gender      </label>  <input name='gender' type="text"></input>
            <label>email       </label>  <input name='email' type="text"></input>
            <label>address     </label>  <input name='address' type="text"></input>
            <label>department  </label>  <input name='department' type="text"></input>
            <label>course      </label>  <input name='course' type="text"></input>
            <label>mobile      </label>  <input name='mobile' type="number"></input>
            <input name='action' value="AddData" type="hidden"></input>
            <button type="submit">Submit </button>
            <NavLink exact to="/AdminAuth" className="AdminButtom">Admin Login </NavLink>
        </form>
    </>
}