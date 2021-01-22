import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/app/app';


// class WhoAmI extends Component {
    
//     state = {
//         years: 26
//     }

//     nextYear = () => {
//         this.setState(state => ({
//             years: ++state.years
//         }))
//     }

//     render() {
//         const {name, surname, link} = this.props; 
//         const {years} = this.state;
//         return (
//             <>  
//                 <button onClick={this.nextYear}>++</button>
//                 <h1>My name is {name}, surname - {surname}, years = {years}</h1>
//                 <a href={link}>My profile</a>
//             </>
//         )
//     }
// }



ReactDOM.render(<App/>, document.getElementById('root'));

