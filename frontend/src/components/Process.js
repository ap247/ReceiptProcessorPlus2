import './Parts.css';

function Process(props) {
    return (
      <div className="Process">
          <textarea className='bigBox'
            type="text"
            placeholder="Enter Receipt Here"
            value={props.receiptData}
            onChange={props.handleChange}
          />
          <button onClick={props.handleAPICall} className='submit'>Submit</button>
          <input className='smallBox'
            type="text"
            readOnly={true}
            value={"result id: " + props.resultId}
          />
      </div>
    );
  }
  
  export default Process;