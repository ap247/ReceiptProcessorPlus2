import Process from './Process';
import Points from './Points';
import './Main.css';

function Main(props) {
    return (
      <div className="Main">
          <Process resultId={props.resultId} 
                    receiptData={props.receiptData} 
                    handleChange={props.handleChange} 
                    handleAPICall={props.handleAPICall}/>
          <Points checkId={props.checkId} 
                    setCheckId={props.setCheckId} 
                    handleIdChange={props.handleIdChange}
                    handleIdAPICall={props.handleIdAPICall}
                    points={props.points}/>
      </div>
    );
  }
  
  export default Main;