import "./App.css";
import AppHeader from "./components/AppHeader";
import AppMain from "./components/AppMain";
import AppFooter from "./components/AppFooter";

function App() {
  return (
    <div className="App">
      {/* 여기에 header, main, footer 영역 작성하기 */}
      <AppHeader></AppHeader>

      <AppMain></AppMain>
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
