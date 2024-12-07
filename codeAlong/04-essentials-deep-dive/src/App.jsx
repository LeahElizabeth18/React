import Header from "./components/header/header";
import CoreConcepts from "./components/core-concepts"
import Examples from "./components/examples"
import Section from "./components/section";


function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
