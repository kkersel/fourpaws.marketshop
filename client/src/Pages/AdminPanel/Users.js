import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import MyUrlField from './MyUrlField';

export const UserList = (props) => {
    return (
        <div>
            <List {...props}>
                <Datagrid rowClick="edit">
                    <TextField source="id" />
                    <TextField source="name" />
                    <EmailField source="email" />
                    <TextField source="phone" />
                    -           <UrlField source="website" />
                    +           <MyUrlField source="website" />
                    <TextField source="company.name" />
                </Datagrid>
            </List>
        </div>
    )
}

export default UserList;