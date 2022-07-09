import "./App.css";
import Navigation from "./components/navigation/Navigation";
import Main from './components/main/Main'
import ThemeCustomize from "./components/theme/ThemeCustomize";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Main />
            <ThemeCustomize />
        </div>
    );
}

export default App;
