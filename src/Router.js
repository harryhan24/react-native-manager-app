import React from 'react';
import {Scene, Router,Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    //init 이 안되있을 경우 순서대로 출력된다.
    //Scene이 다를경우 backbutton 이 생겨나지 않는다.
    return (
        <Router sceneStyle={{paddingTop: 65}}>

            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="로그인 해"/>
            </Scene>


            <Scene key="main">
                <Scene
                    onRight={()=>Actions.employeeCreate()}
                    rightTitle="add"
                    key="employeeList"
                    component={EmployeeList}
                    title="the list"
                    initial
                />
                <Scene title="create employee" component={EmployeeCreate} key="employeeCreate" />
                <Scene title="edit employee" component={EmployeeEdit} key="employeeEdit"/>
            </Scene>

        </Router>
    );
};

export default  RouterComponent;