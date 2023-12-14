import './Parts.css';

function Points(props) {
    return (
      <div className="Points">
          <input className='smallBox'
            type="text"
            placeholder="Enter ID Here"
            value={props.checkId}
            onChange={props.handleIdChange}
          />
          <button onClick={props.handleIdAPICall}>Calculate Points</button>
          <input className='bigBox'
            type="text"
            readOnly={true}
            value={props.points}
          />
      </div>
    );
  }
  
  export default Points;