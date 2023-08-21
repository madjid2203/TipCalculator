import { useState } from "react";
import Bill from "./Bill";
import Rating from "./Rating";
import FriendRating from "./FriendRating";
import Reset from "./Reset";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const totalTip = ((tip + friendTip) / 200) * bill;
  const pay = bill + totalTip;

  function billHandle(e) {
    let value = Number(e.target.value);
    setBill(value);
    console.log(tip);
  }

  function tipHandle(e) {
    let value = Number(e.target.value);
    setTip(value);
    console.log(tip);
  }

  function friendTipHandle(e) {
    let value = Number(e.target.value);
    console.log(value);
    setFriendTip(value);
  }

  function resetHandle() {
    setBill(0);
    setTip(0);
    setFriendTip(0);
  }

  return (
    <div className="App">
      <Bill bill={bill} billHandle={billHandle} />
      <Rating tip={tip} tipHandle={tipHandle} />
      <FriendRating friendTip={friendTip} friendTipHandle={friendTipHandle} />

      <p>
        <strong>{`You pay $${pay} ($${bill} + $${totalTip} tip)`}</strong>
      </p>

      <Reset resetHandle={resetHandle} />
    </div>
  );
}
