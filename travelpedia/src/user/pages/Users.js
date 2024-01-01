import React from "react";

import UsersList from "../components/UsersList";

function Users(){
    const Users = [
        {
           id: "u1",
           name: "Hitesh Bani",
           image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
           places: 3 
        }
    ]
    return (
       <UsersList items={Users} /> // Users.js --> UsersList.js --> UsersItem.js
    )
}

export default Users;