import React from 'react';
import './App.css';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <h2>List users from Firebase</h2>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th><span>Name</span></th>
                      <th><span>Email</span></th>
                      <th><span>Phone</span></th>
                    </tr>
                  </thead>
                  <User />
                  
                </table>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
