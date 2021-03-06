import React, { useState } from "react";
import "./Custom.css";
import Card from "./Card";
import faker from "faker";

function App() {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "By Hil",
      title: "React native Developer",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: "2",
      name: "Miku Chan",
      title: "Idol",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: "3",
      name: "John Doe",
      title: "Example",
      avatar: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: "4",
      name: "Bla Bla",
      title: "Dev",
      avatar: "https://i.pravatar.cc/150?img=31",
    },
  ]);
  const [showCard, setShowCard] = useState(true);
  const toggleShowCard = () => setShowCard(!showCard);
  const deleteCardHandler = (cardIndex) => {
    const cards_copy = [...cards];
    cards_copy.splice(cardIndex, 1);
    setCards(cards_copy);
  };
  const changeNameHandler = (event, id) => {
    //1. which card
    const cardIndex = cards.findIndex((card) => card.id == id);
    //2. make a copy of the cards
    const cards_copy = [...cards];
    //3. vahnge the name of the specific card
    cards_copy[cardIndex].name = event.target.value;
    //4. set the with the latest versiom of card copy
    setCards(cards_copy);
  };
  const buttonStyle = {
    backgroundColor: null,
  };
  if (cards.length < 3) buttonStyle.backgroundColor = "lightpink";
  if (cards.length < 2) buttonStyle.backgroundColor = "red";
  const cardMarkup =
    showCard &&
    cards.map((card, index) => (
      <Card
        avatar={card.avatar}
        name={card.name}
        title={card.title}
        key={card.id}
        onDelete={() => deleteCardHandler(index)}
        onChangeName={(event) => changeNameHandler(event, card.id)}
      />
    ));
  return (
    <div className="App">
      <button className="button" style={buttonStyle} onClick={toggleShowCard}>
        Toggle Show/hide
      </button>
      {cardMarkup}
    </div>
  );
}
export default App;
