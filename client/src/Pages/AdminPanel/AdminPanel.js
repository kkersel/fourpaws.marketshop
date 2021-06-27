import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
import Dashboard from "./Dashboard";
// Авторизация для админов
import authProvider from './authProvider';


import { PostList, PostEdit, PostCreate, PostIcon } from './post';

export const AdminPanel = () => {
    return (
        <div>
            <Admin authProvider={authProvider} dashboard={Dashboard} dataProvider={simpleRestProvider('http://localhost:3000')}>
                <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
                <Resource name="users" list={ListGuesser}/>
            </Admin>,
        </div>
    )
}

export default AdminPanel;