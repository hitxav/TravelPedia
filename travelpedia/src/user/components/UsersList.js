import React from "react";

import UsersItem from "./UserItem";

function UsersList(props){
    if(props.items.length === 0){
        return(
            <h2 align="center">No Users Found</h2>
        )
    }

    return (
        <ui>
            {props.items.map( user => (
                <UsersItem
                  key={user.id}
                  id={user.id}
                  image = {user.image}
                  name={user.name}
                  placeCount={user.places}
                />
            ))}
        </ui>
    )
}

export default UsersList;