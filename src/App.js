import './App.css';

import screenShot from '../src/assets/images/project-structure.PNG';

function App() {
    return (
        <>
            <div className="App">
                <h2>-: Project-Structure :-</h2>
                <img src={screenShot} alt="logo" width={500} height={800} />

                {/* <img
                    src={screenShot}
                    className="App-logo"
                    alt="logo"
                   
                /> */}
            </div>
        </>
    );
}

export default App;
