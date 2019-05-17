import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Header from './container/header/Header';
import ReadyToShip from './container/ready-to-ship/ReadyToShip';
import DataTable from './shared/components/table/Table';
import Receving from './container/receving/Receving';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <Header />
        </header>
        <main className="container-fluid">
          <div className="routes-container">
            <Route path="/ready-to-ship" component={ReadyToShip} />
            <Route path="/receiving" component={Receving} />
          </div>
          <div className="table-container">
            <DataTable />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
