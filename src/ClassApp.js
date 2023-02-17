import {Component} from 'react';
import Header from './class_components/Header/Header';
import Main from './class_components/Main/Main';
import Footer from './class_components/Footer/Footer';

export default class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
        )
    }
}