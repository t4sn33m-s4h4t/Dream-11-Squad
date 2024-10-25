import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div>
      <ToastContainer position="top-center"/>
      <MainComponent></MainComponent>
    </div>
  )
}

export default App
