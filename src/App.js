import './css/App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About Us" contact="Contact Us" />
        <TextForm heading="Enter the text below to analyse" />
    </>
  );
}
export default App;
