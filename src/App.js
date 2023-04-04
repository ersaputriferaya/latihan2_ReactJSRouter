import React from 'react';
import Utama from './Components/utama';
import "./App.css";
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2 className="h2"> &nbsp; Stiker.co</h2>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Beranda</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/tentangsaya">Tentang Saya</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/karya">Karya</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/kontak">Kontak</Link>
          </li>
        </ul>
        <br />
        <p><Utama /></p>
      </div>
    );
  }
}

export default App;