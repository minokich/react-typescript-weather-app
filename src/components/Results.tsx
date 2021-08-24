
type ResultsStateType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  }
}

const Results = ({ results }: ResultsStateType) => {
  const { cityName, country, temperature, icon, conditionText } = results;
  return (
    <>
      { cityName && <div className="results-city">{cityName}</div> }
      { country && <div className="results-country">{country}</div> }
      { temperature && <div className="results-temp">{temperature}<span>℃</span></div> }
      { conditionText && 
        <div className="results-condition">
          <img src={icon} alt={conditionText}/>
          <span >{conditionText}</span>
        </div> 
      }
    </>
  );
};

export default Results;
