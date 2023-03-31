import {Header, MediaControl, QA} from "./components/index.js";
import {Wrapper} from "./assets/styles/index.js";
import {Toaster} from 'react-hot-toast'


const App = () => {
    return (

        <Wrapper>
            <Header/>
            <hr/>
            <MediaControl/>
            <QA/>
            <Toaster/>
        </Wrapper>


    );
};

export default App;