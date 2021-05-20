import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
function App() {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [child, setChild] = useState(0);

  const increment = (event) => {
    let id = event.target.id;
    if (id === "Rooms") {
      if (rooms < 5 && rooms >= 1)
        setRooms((prevState) => {
          return prevState + 1;
        });
    } else if (id === "Adults") {
      setAdults((prevState) => {
        return prevState + 1;
      });
    } else if (id === "Child") {
      setChild((prevState) => {
        return prevState + 1;
      });
    }
  };

  const decrement = (event) => {
    let id = event.target.id;
    if (id === "Rooms") {
      if (rooms <= 5 && rooms >= 2)
        setRooms((prevState) => {
          return prevState - 1;
        });
    } else if (id === "Adults") {
      setAdults((prevState) => {
        return prevState + 1;
      });
    } else if (id === "Child") {
      setChild((prevState) => {
        return prevState + 1;
      });
    }
  };

  return (
    <>
      <ButtonComponent
        label="Rooms"
        value={rooms}
        increment={increment}
        decrement={decrement}
      />
      <ButtonComponent
        label="Adults"
        value={adults}
        increment={increment}
        decrement={decrement}
      />
      <ButtonComponent
        label="Child"
        value={child}
        increment={increment}
        decrement={decrement}
      />
    </>
  );
}

export default App;
