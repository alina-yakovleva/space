import Header from "./components/Header";
import Information from "./components/Information";
import Title from "./components/Title";

function App() {
  return (
    <div className="app">
      <div className="wrap">
        <Header />
        <div className="content">
          <Title />
          <Information />
        </div>
      </div>
    </div>
  );
}

export default App;
