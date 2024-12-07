import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./tab-button";
import Section from "./section";
import Tabs from "./tabs";

function Examples() {
  const [selectedTopic, setTopic] = useState();
  function handleSelect(selectedButton) {
    setTopic(selectedButton);
  }

  return (
    <Section id="examples" title="Examples">
      <Tabs
      ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              selected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton
              selected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}>
              JSX
            </TabButton>
            <TabButton
              selected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}>
              Props
            </TabButton>
            <TabButton
              selected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}>
              State
            </TabButton>
          </>
        }>
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
      </Tabs>
    </Section>
  );
}

export default Examples;
