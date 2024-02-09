import { useState } from "react";
import "./App.css";
import data from "./Data/data.js";

function App() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiElement, SetMultiElement] = useState([]);
  const handleSignleSelect = (id) => {
    console.log(id);
    setSelected((selected) => {
      if (selected == null) {
        return id;
      } else if (selected == id) {
        return null;
      } else {
        return id;
      }
    });
  };

  const handleMultiSelection = (id) => {
    console.log("inside multi", id);
    const array = [...multiElement];
    const index = array.indexOf(id);
    if (index == -1) {
      array.push(id);
    } else {
      array.splice(index, 1);
    }
    console.log(multiElement);
    SetMultiElement(array);
  };

  const enableDisableHandler = () => {
    SetMultiElement([]);
    setEnableMultiSelect(!enableMultiSelect);
  };

  console.log(enableMultiSelect);

  return (
    <>
      <main className="">
        <div className="parent">
          <h1 className="text-4xl">Accordian</h1>
          <div className="input-form">
            <label htmlFor="mutltiselect">
              <input
                type="checkbox"
                onChange={enableDisableHandler}
                className="btn"
                id="mutltiselect"
              />
              Check for multi-select
            </label>
          </div>

          <div className="wrapper">
            {data && data?.length ? (
              data?.map((d) => {
                return (
                  <>
                    <>
                      <div
                        className="wrapper-child"
                        key={d.id}
                        onClick={
                          enableMultiSelect
                            ? () => handleMultiSelection(d.id)
                            : () => handleSignleSelect(d.id)
                        }
                      >
                        {d.question}
                        <span className=" plus">+</span>
                      </div>
                      {enableMultiSelect
                        ? multiElement.indexOf(d.id) !== -1 && (
                            <p className="answer">-{d.answer}</p>
                          )
                        : selected == d.id && (
                            <p className="answer">-{d.answer}</p>
                          )}
                      {/* {d?.id == selected ||
                      multiElement.indexOf(d.id) !== -1 ? (
                        <p className="answer">-{d.answer}</p>
                      ) : null} */}
                    </>
                  </>
                );
              })
            ) : (
              <div>No Data</div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
