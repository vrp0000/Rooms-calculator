import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import people from "./people.JPG";
import roomimg from "./Rooms.JPG";
import adultimg from "./adults.JPG";
import childrenimg from "./children.JPG";
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
    let total = adults + child;
    switch (event.target.id) {
      case "Rooms":
        //Enable room- if total < range and rooms>0
        if (rooms + 1 > 0 && total < 4 * (rooms + 1)) {
          setRminus(false);
        }
        if (rooms + 1 <= 5) {
          setRooms(rooms + 1);
          //Disable room+ , room limit
          if (rooms + 1 === 5) {
            setRplus(true);
          } //Enable  adult+ child+ as room is increased

          setAplus(false);
          setCplus(false);
        }

        //increase adults if total < rooms
        if (total < rooms + 1) {
          setAdults(adults + 1);
        }

        break;
      case "Adults":
        //enable Adult- if adult>1
        if (adults + 1 > 0) {
          setAminus(false);
        }

        //Increase adult if on range
        if (total + 1 <= rooms * 4) {
          setAdults(adults + 1);
        }
        //Disable adult+ and child+ as total === range
        //Enable adult- and child - as total === range
        if (total + 1 === rooms * 4) {
          setAplus(true);
          setCplus(true);
          setAminus(false);
          setCminus(false);
        }
        //disable room- as total exceeds previous room range
        if (total + 1 > (rooms - 1) * 4) setRminus(true);
        break;
      case "Child":
        //enable child- if child>0
        if (child + 1 > 0) {
          setCminus(false);
        }

        //increasing child if in range
        if (total + 1 <= rooms * 4) {
          setChild(child + 1);
        }
        //disable child+ and adult+ if total === range
        if (total + 1 === rooms * 4) {
          setAplus(true);
          setCplus(true);
        }
        //disable room- as total exceeds previous room range
        if (total + 1 > (rooms - 1) * 4) setRminus(true);
        //enable adult- as total > rooms and adults minimum 1
        if (total + 1 > rooms && adults > 1) {
          setAminus(false);
        }

        break;
      default:
        break;
    }
  };

  const decrement = (event) => {
    let total = adults + child;
    switch (event.target.id) {
      case "Rooms":
        if (rooms - 1 <= 5) {
          //disable room- if room =1
          if (rooms - 1 === 1) {
            setRminus(true);
          }
          //room in range 1-5
          setRplus(false);
        }

        //setting rooms if rooms in range
        if (total >= rooms - 1) {
          setRooms(rooms - 1);
        }

        if (total > rooms - 1) {
          adults > 1 ? setAminus(false) : setAminus(true);
          child > 0 ? setCminus(false) : setCminus(true);
          //deactivate room- if on room decrease total is greater than previous room max limit
          if (total > 4 * (rooms - 2)) {
            setRminus(true);
          }
        }
        //total is equal to range
        if (total === (rooms - 1) * 4) {
          setAplus(true);
          setCplus(true);
        }

        break;
      case "Adults":
        if (total - 1 >= rooms && adults > 1) {
          setAdults(adults - 1);
        }
        //activate adult-, adult+ if adult >1
        if (adults - 1 >= 1) {
          setAminus(false);
          setAplus(false);
          //deactivate adult- if adult is 1
          if (adults - 1 === 1) setAminus(true);
        }

        //activate child+ on adult count decrease

        if (total - 1 < 4 * rooms) {
          setCplus(false);
        }
        //total is same as rooms
        //Activate adult+, child+
        //deactivate adult- , child-
        if (total - 1 === rooms) {
          setAplus(false);
          setCplus(false);
          setAminus(true);
          setCminus(true);
        }
        //activating room- as total >=rooms
        if (total - 1 >= rooms && total - 1 === 4 * (rooms - 1)) {
          setRminus(false);
        }

        break;
      case "Child":
        if (total - 1 >= rooms && child >= 1) {
          setChild(child - 1);
        }
        //activate child-, child+ if child >=0
        if (child - 1 >= 0) {
          setCminus(false);
          setCplus(false);
          //deactivate adult- if child is 0
          if (child - 1 === 0) setCminus(true);
        }

        //activate adult+ on child count decrease

        if (total - 1 < 4 * rooms) {
          setAplus(false);
        }
        //total is same as rooms
        //Activate adult+, child+
        //deactivate adult- , child-
        if (total - 1 === rooms) {
          setAplus(false);
          setCplus(false);
          setAminus(true);
          setCminus(true);
        }
        //activating room- as total >=rooms
        if (total - 1 >= rooms && total - 1 === 4 * (rooms - 1)) {
          setRminus(false);
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
          pic={roomimg}
          label="Rooms"
          value={rooms}
          increment={increment}
          decrement={decrement}
          disableminus={rminus}
          disableplus={rplus}
        />
        <ButtonComponent
          pic={adultimg}
          label="Adults"
          value={adults}
          increment={increment}
          decrement={decrement}
          disableminus={aminus}
          disableplus={aplus}
        />
        <ButtonComponent
          pic={childrenimg}
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
