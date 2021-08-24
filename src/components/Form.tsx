import React from 'react'

type FormPropType = {
  setCity: React.Dispatch<React.SetStateAction<string>>
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = (props: FormPropType) => {
  const { setCity, getWeather } = props;
  return (
    <form onSubmit={getWeather}>
      <input type="text" name="city" placeholder="都市名" onChange={ e => setCity(e.target.value)}/>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;