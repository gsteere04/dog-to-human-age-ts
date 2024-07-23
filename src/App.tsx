import './App.css'
import Calculator from "./Calculator"
function App() {

  return (
    <>
      <header>
        <h1>Dog Age in Human Years Calculator</h1>
        <p>This app will calculate your dog's age using human years.</p>
      </header>
      <main>
        <Calculator />
      </main>
      <footer>
        Created by Grant Steere
      </footer>
    </>
  )
}

export default App
