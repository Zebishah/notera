import './App.css';
import NoteState from './context/notes/NoteState';
import About from './modules/About';
import Home from './modules/Home(MainPage)';
import Navbar from './modules/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './modules/signIn';
import SignUp from './modules/signUp';
import LogState from './context/notes/LogState'
import Contacts from './modules/Contacts';
import AllNotes from './modules/ShowingAllNotes';
import Help from './modules/Help';
import Links from './modules/Links';
function App() {
  return (
    <div className="App">

      <LogState>
        <NoteState>

          <Router>


            <Routes>

              <Route exact path="/" element={<Home key="Home" />} />
              <Route exact path="/about" element={<About key=" About" />} />
              <Route exact path="/SignIn" element={<SignIn key="signIn" />} />
              <Route exact path="/SignUp" element={<SignUp key=" signUp" />} />
              <Route exact path="/contact" element={<Contacts key="contacts" />} />
              <Route exact path="/AllNotes" element={<AllNotes key="notes" />} />
              <Route exact path="/help" element={<Help key="help" />} />
              <Route exact path="/links" element={<Links key="links" />} />

            </Routes>


          </Router>

        </NoteState>
      </LogState>

    </div>

  );
}

export default App;
