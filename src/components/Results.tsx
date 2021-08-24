
type ResultsStateType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  }
}

const Results = (props: ResultsStateType) => {
  const { results } = props;
  return (
    <div>
      { results.cityName && <div className="results-city">{props.results.cityName}</div> }
      { results.country && <div className="results-country">{props.results.country}</div> }
      { results.temperature && <div className="results-temp">{props.results.temperature}<span>℃</span></div> }
      { results.conditionText && 
        <div className="results-condition">
          <img src={props.results.icon} alt="{props.results.conditionText}"/>
          <span >{props.results.conditionText}</span>
        </div> 
      }
    </div>
  );
};

export default Results;
