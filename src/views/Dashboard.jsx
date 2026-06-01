import React from 'react';
import ListaProyectos from './ListaProyectos';

const Dashboard = () => {
    return (
        <div className="dashboard-layout">
            <main className="dashboard-content">
                <ListaProyectos />
            </main>
        </div>
    );
};

export default Dashboard;