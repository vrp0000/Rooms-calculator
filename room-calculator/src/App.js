import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
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

  let rooms_l = rooms,
    adults_l = adults,
    child_l = child;

  function valid(rooms_l, adults_l, child_l) {
    rooms_l > 1 ? setRminus(false) : setRminus(true);
    let total = adults_l + child_l;
    let allowed = rooms_l > 5 ? 20 : rooms_l > 1 ? rooms_l * 4 : 4;

    /*     if (rooms_l <= 5 && rooms_l >= 1) {
      if (total <= rooms * 4) {
        setRooms(rooms_l);
        setAdults(adults_l);
        setChild(child_l);
      }
    } */

    if (rooms_l <= 5 && rooms_l >= 1) {
      if (rooms_l > rooms) {
        if (rooms_l <= adults_l) {
          if (total <= allowed) {
            setRooms(rooms_l);
            setAdults(adults_l);
            setChild(child_l);
          }
        } else if (rooms_l > adults_l) {
          setRooms(rooms_l);
          setAdults(adults_l + 1);
        }
      }
    }

    console.log(
      "Total Rooms = ",
      rooms_l,
      "Child = ",
      child_l,
      "Adults = ",
      adults_l,
      "Allowed = ",
      allowed
    );
    /*  while (total !== allowed) {} */
  }

  /*     if (rooms < 5 && rooms >= 1) {
      if (rooms_l > rooms) {
        // if rooms are increased
        if (rooms_l * 4 <= adults_l) {
          //Increase only rooms till each room has 1 adult
          setRooms(rooms_l);
        } else if (rooms_l * 4 > adults_l) {
          //increase rooms and adult count if each room does not have 1 adult
          setRooms(rooms_l);
          setAdults(adults_l + 1);
        }
      }

      if (rooms_l < rooms) {
        console.log(rooms_l, rooms);
        if (rooms_l <= adults_l) {
          setRooms(rooms_l);
          if (adults_l > rooms_l * 4) setAdults(rooms_l * 4);
        }
      } 
    }
    
    setAdults(adults_l);
    setChild(child_l); 
  }
  */
  const increment = (event) => {
    console.log("Event Fired");

    switch (event.target.id) {
      case "Rooms":
        rooms_l = rooms + 1;
        if (rooms + 1 <= 5) {
          setRooms((prevState) => prevState + 1);
          if (adults < rooms_l) setAdults((prevState) => prevState + 1);
          setRminus(false);

          if (rooms_l * 4 >= adults) {
            setAplus(false);
            setCplus(false);
          }

          if (rooms_l === 5) setRplus(true);
          else if (rooms_l < 5) setRplus(false);
        }

        break;
      case "Adults":
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
        /* rooms_l = rooms - (rooms > 1 ? 1 : 0); */
        if (rooms - 1 > 0) {
          if (adults + child <= (rooms - 1) * 4)
            setRooms((prevState) => prevState - 1);
          if (adults + child > (rooms - 2) * 4) {
            console.log("here");
            setRminus(true);
          }
        }
        break;
      case "Adults":
        if (child - 1 + adults < rooms * 4) {
          setCplus(false);
          setAplus(false);
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
        break;
      default:
        break;
    }
    /*  valid(rooms_l, adults_l, child_l); */
  };

  return (
    <>
      <ButtonComponent
        label="Rooms"
        value={rooms}
        increment={increment}
        decrement={decrement}
        disableminus={rminus}
        disableplus={rplus}
      />
      <ButtonComponent
        label="Adults"
        value={adults}
        increment={increment}
        decrement={decrement}
        disableminus={aminus}
        disableplus={aplus}
      />
      <ButtonComponent
        label="Child"
        value={child}
        increment={increment}
        decrement={decrement}
        disableminus={cminus}
        disableplus={cplus}
      />
    </>
  );
}

export default App;
