import { useState } from "react";
import Header from "./components/header/header.jsx";
import CoreConcept from "./components/core-concept.jsx";
import TabButton from "./components/tab-button.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setTopic] = useState();
  function handleSelect(selectedButton) {
    setTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {...concept}/>)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton selected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton selected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton selected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton selected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].desc}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
