import { Navbar } from "./components/Navbar";
import { Quiz } from "./components/Quiz";

function App() {
  return (
    <div className='App flex justify-center items-center flex-col'>
      <div className='sm:px-4 w-full md:px-10 xl:max-w-5xl'>
        <Navbar />
        <Quiz />
      </div>
    </div>
  );
}

export default App;
