import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import people from "./people.JPG";
import room from "./Rooms.JPG";
import adult from "./adults.JPG";
import children from "./children.JPG";
function App() {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [child, setChild] = useState(0);
  const [rminus, setRminus] = useState(true);
  const [aminus, setAminus] = useState(true);
  const [cminus, setCminus] = useState(true);
  const [rplus, setRplus] = useState(false);
  const [aplus, setAplus] = useState(false);
  const [cplus, setCplus] = useState(false);

  const increment = (event) => {
    switch (event.target.id) {
      case "Rooms":
        if (rooms + 1 <= 5) {
          setRooms((prevState) => prevState + 1);
          if (adults + child < (rooms + 1) * 4) {
            if (adults === rooms) {
              setAdults((prevState) => prevState + 1);
              setAminus(true);
            }
            setAminus(false);
            setCminus(false);
          }
          setRminus(false);

          if ((rooms + 1) * 4 >= adults) {
            setAplus(false);
            setCplus(false);
          }
          if (adults === rooms) {
            setAminus(true);
          }
          if (child === 0) {
            setCminus(true);
          }

          if (rooms + 1 === 5) setRplus(true);
          else if (rooms + 1 < 5) setRplus(false);
        }

        break;
      case "Adults":
        if (adults + 1 > 0) {
          setAminus(false);
        }

        if (adults + 1 + child === rooms * 4) {
          setAplus(true);
          setCplus(true);
        }
        if (adults + 1 + child <= rooms * 4) {
          setAdults((prevState) => prevState + 1);
        }

        if (adults + 1 + child > (rooms - 1) * 4) {
          setRminus(true);
        }
        break;
      case "Child":
        if (child + 1 > 0) {
          setCminus(false);
        }

        if (adults + 1 + child === rooms * 4) {
          setCplus(true);
          setAplus(true);
        }
        if (child + adults + 1 <= rooms * 4)
          setChild((prevState) => prevState + 1);

        if (adults + 1 + child > (rooms - 1) * 4) {
          setRminus(true);
        }

        break;
      default:
        break;
    }
  };

  const decrement = (event) => {
    switch (event.target.id) {
      case "Rooms":
        if (rooms - 1 > 0) {
          if (adults + child <= (rooms - 1) * 4)
            setRooms((prevState) => prevState - 1);
          if (adults + child > (rooms - 2) * 4) {
            setRminus(true);
          }
        }
        if (adults + child <= (rooms - 1) * 4) {
          if (adults > rooms - 1) setAminus(false);
          if (child > 0) setCminus(false);
        }
        break;
      case "Adults":
        if (adults - 1 > 0) {
          if (adults - 1 === rooms) {
            setAminus(true);
          }
          setAdults((prevState) => prevState - 1);
          if (child - 1 + adults === (rooms - 1) * 4) {
            setRminus(false);
          }
        }
        if (child - 1 + adults < rooms * 4) {
          setCplus(false);
          setAplus(false);
        }
        if (child === 0) {
          setCminus(true);
        }
        break;
      case "Child":
        if (child - 1 > 0) {
          setChild((prevState) => prevState - 1);
          if (child - 1 + adults === (rooms - 1) * 4) {
            setRminus(false);
          }
        }
        if (child - 1 === 0) {
          setChild(0);
          setCminus(true);
          setAminus(false);
          if (child - 1 + adults === (rooms - 1) * 4) {
            setRminus(false);
          }
        }
        if (child - 1 + adults < rooms * 4) {
          setCplus(false);
          setAplus(false);
        }
        if (adults === rooms) {
          setAminus(true);
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <p className="header">
        <img src={people} alt="ico" />
        Choose number of <b>people</b>
      </p>
      <div className="box">
        <ButtonComponent
          pic={room}
          label="Rooms"
          value={rooms}
          increment={increment}
          decrement={decrement}
          disableminus={rminus}
          disableplus={rplus}
        />
        <ButtonComponent
          pic={adult}
          label="Adults"
          value={adults}
          increment={increment}
          decrement={decrement}
          disableminus={aminus}
          disableplus={aplus}
        />
        <ButtonComponent
          pic={children}
          label="Child"
          value={child}
          increment={increment}
          decrement={decrement}
          disableminus={cminus}
          disableplus={cplus}
        />
      </div>
    </>
  );
}

export default App;
