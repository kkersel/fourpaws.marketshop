// in src/Dashboard.js
import * as React from "react";
import { Card, CardContent, CardHeader } from '@material-ui/core';

export const  Dashboard= (props) => {
    return (
        <div>
            <Card>
                <CardHeader title="Добро пожаловать в панель администартора!" />
                <CardContent>Тут классно!</CardContent>
            </Card>
        </div>
    )
}

export default Dashboard;