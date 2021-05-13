import React, { useState } from 'react';

export default function App() {
  const [pesoValue, setPesoValue] = useState(0);
  const [alturaValue, setAlturaValue] = useState(0);
  const [resultado, setResultado] = useState(0);

  const tableIMC = () => {
    return (
      <table border="1" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Classificação</th>
            <th>IMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abaixo do Peso</td>
            <td>Abaixo do 18,5</td>
          </tr>
          <tr>
            <td>Peso Normal</td>
            <td>Entre 18,5 e 24,9</td>
          </tr>
          <tr>
            <td>Sobrepeso</td>
            <td>Entre 25 e 29,9</td>
          </tr>
          <tr>
            <td>Obesidade Grau I</td>
            <td>Entre 30 e 34,9</td>
          </tr>
          <tr>
            <td>Obesidade Grau II</td>
            <td>Entre 35 e 39,9</td>
          </tr>
          <tr>
            <td>Obesidade Grau III ou Mórbida</td>
            <td>Maior que 40</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const f_peso = (pesoValue, setPesoValue) => {
    return (
      <div>
        <label>
          Peso
          <input
            type="text"
            value={pesoValue}
            onChange={(e) => {
              setPesoValue(e.target.value);
            }}
          />
        </label>
      </div>
    );
  };

  const f_altura = (alturaValue, setAlturaValue) => {
    return (
      <div>
        <label>
          Altura
          <input
            type="text"
            value={alturaValue}
            onChange={(e) => {
              setAlturaValue(e.target.value);
            }}
          />
        </label>
      </div>
    );
  };

  const fcalcular = (pesoValue, alturaValue, setResultado) => {
    const calc = () => {
      setResultado(pesoValue / (alturaValue * alturaValue));
    };

    return (
      <div>
        <button onClick={calc}>Calcular</button>
      </div>
    );
  };

  const fresultado = (resultado) => {
    return (
      <div>
        <p>Resultado: {resultado.toFixed(2)}</p>
      </div>
    );
  };
  return (
    <>
      {f_peso(pesoValue, setPesoValue)}
      {f_altura(alturaValue, setAlturaValue)}
      {fcalcular(pesoValue, alturaValue, setResultado)}
      {fresultado(resultado)}
      {tableIMC()}
    </>
  );
}
