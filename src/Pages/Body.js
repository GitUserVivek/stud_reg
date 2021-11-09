import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import Users from './Users';
import Adminpanel from './Adminpanel';
import AdminAuth from './AdminAuth';
import '../Css/Body.css';
import { useState } from 'react';
export default function Body() {
    const [access, setAccess] = useState(false);
    return <div className="Body">
        <Router>
            <Route exact path="/User" > <Users /> </Route>
            <Route exact path="/AdminAuth" > <AdminAuth setAccess={setAccess} /> </Route>
            <Route exact path="/Adminpanel" > {access ? <Adminpanel /> : <NavLink exact to="/AdminAuth" className="AdminButtom">Try Again </NavLink>}</Route>
        </Router >
    </div >
}

