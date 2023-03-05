
import './App.css';
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";
import Todos from "./myComponents/Todos";
import PropTypes from 'prop-types'

function App() {
  let todovar = [
    {
      sno: 1,
      title: "go to 1",
      desc: "job 1"
    },
    {
      sno: 2,
      title: "go to 2",
      desc: "job 2"
    },
    {
      sno: 3,
      title: "go to 33333",
      desc: "job 333333"
    }
  ]
  const onDelete=(todo)=>{
    console.log("I am on delete of", todo);
  }
  return (
    <div>

      <Header />
      <Todos todovar={todovar}  onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
