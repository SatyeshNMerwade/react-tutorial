import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
  return (
    // <Fragment>
    <>
      {/* {" alternate for Fragment "} */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      {/* </Fragment> */}
    </> //alternate for Fragment
  );
}

export default App;
