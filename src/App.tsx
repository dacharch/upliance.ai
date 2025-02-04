import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import HomePage from "./components/HomePage"
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import RichTextEditor from "./components/RichTextEditor";

const App = () => {
  return (

    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/counter" element={<Counter/>} />
            <Route path="/form" element={<UserForm/>} />
            <Route path="/editor" element={<RichTextEditor/>} />

        </Routes>
    </Router>
    
     
  )
}

export default App