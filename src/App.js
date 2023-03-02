import "./App.css";

import React from "react";

function App() {
  const [count5, setCount5] = React.useState(0);
  const [count4, setCount4] = React.useState(0);
  const [count3, setCount3] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [middle, setMiddle] = React.useState(0);
  const [impruve, setImpruve] = React.useState(0);

  let sumRating;
  let countRating;

  const clearInput = () => {
    setCount5(0);
    setCount4(0);
    setCount3(0);
    setCount2(0);
  };

  React.useEffect(() => {
    getMiddle();
  }, [count5, count4, count3, count2]);

  function getMiddle() {
    sumRating = count5 * 5 + count4 * 4 + count3 * 3 + count2 * 2;
    countRating = count5 + count4 + count3 + count2;
    if (countRating === 0) {
      setMiddle(0);
    } else {
      let middleValue = Number(sumRating / countRating);
      setMiddle(middleValue.toFixed(2));
    }
  }

  function toImpruve() {
    let currMiddle = middle;
    while (currMiddle < 4.6) {
      setImpruve(impruve + 1);
      countRating++;
      sumRating += 5;
      let middleValue = Number(sumRating / countRating);
      setMiddle(middleValue.toFixed(2));
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="wrapper_sections">
          <div className="section">
            <p>
              количество <br /> 5
            </p>
            <div className="button_wrapper">
              <button className="button" onClick={() => setCount5(+count5 + 1)}>
                {" "}
                +{" "}
              </button>
              <input
                onChange={(e) => setCount5(e.target.value)}
                value={count5}
              />
              <button className="button" onClick={() => setCount5(+count5 - 1)}>
                {" "}
                -{" "}
              </button>
            </div>
          </div>
          <div className="section">
            <p>
              количество <br /> 4
            </p>
            <div className="button_wrapper">
              <button className="button" onClick={() => setCount4(+count4 + 1)}>
                {" "}
                +{" "}
              </button>
              <input
                onChange={(e) => setCount4(e.target.value)}
                value={count4}
              />
              <button className="button" onClick={() => setCount4(+count4 - 1)}>
                {" "}
                -{" "}
              </button>
            </div>
          </div>
          <div className="section">
            <p>
              количество <br /> 3
            </p>
            <div className="button_wrapper">
              <button className="button" onClick={() => setCount3(+count3 + 1)}>
                {" "}
                +{" "}
              </button>
              <input
                onChange={(e) => setCount3(e.target.value)}
                value={count3}
              />
              <button className="button" onClick={() => setCount3(+count3 - 1)}>
                {" "}
                -{" "}
              </button>
            </div>
          </div>
          <div className="section">
            <p>
              количество <br /> 2
            </p>
            <div className="button_wrapper">
              <button className="button" onClick={() => setCount2(+count2 + 1)}>
                {" "}
                +{" "}
              </button>
              <input
                onChange={(e) => setCount2(e.target.value)}
                value={count2}
              />
              <button className="button" onClick={() => setCount2(+count2 - 1)}>
                {" "}
                -{" "}
              </button>
            </div>
          </div>
        </div>

        <button className="button button_reset" onClick={() => clearInput()}>
          сбросить все
        </button>

        <h2>средний балл {middle}</h2>
        <h3>
          {middle >= 4.6
            ? "Поздравляю, выходит итоговая 5!"
            : `...ну зачем тебе натянутая пятерка`}
        </h3>
      </div>
    </div>
  );
}

export default App;
