import LetterForm from "./Components/LetterForm";
import LetterList from "./Components/LetterList";
import { LetterProvider } from "./Context/LetterContext";

function App() 
{
  return (
    <div className='bg-zinc-900 h-screen text-white flex items-center justify-center'>
      
      <div className='bg-gray-950 p-4 w-2/5'>
        <h1 className='text-3xl font-bold text-center block my-2'>Contáctame!</h1>
        <LetterProvider>
          <LetterForm/>
          <LetterList/>
        </LetterProvider>
      </div>
    </div>
  );
}
export default App
