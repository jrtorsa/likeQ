import './index.css'

function App() {
  const width = window.innerWidth

  if(width > 540){
    return (
      <div className="App">
        <h1>please change to a mobile device</h1>
      </div>
    );
  } else {
    return (
      <>
      <h2>you are on a phone!</h2>
      </>
    )
  }

  
}

export default App;
