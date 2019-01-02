import React, {Component} from 'react';
import Charts from './Charts'
class Dashboard extends Component {
    render() {
        return (
            <div>
               <h1>Dashboard</h1>
                {Charts}
            </div>
        );
    }
}

export default Dashboard;