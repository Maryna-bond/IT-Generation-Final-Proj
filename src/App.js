import "./App.scss"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import ScrollIndicator from "./components/scrollIndicator/ScrollIndicator";
import WhatWeDo from "./components/what_we_do/WhatWeDo"

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollIndicator />
      <Hero />
      <WhatWeDo />
    </div>
  );
}

export default App;
