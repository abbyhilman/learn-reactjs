import React, { Component } from "react";
import "./Custom.css";
import Card from "./Card";
import { ThemeProvider } from "styled-components";
import Button from "./element/Button";

const theme = {
  primary: "#4caf50",
  mango: "yellow",
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
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
      ],
      showCard: true,
    };
  }
  toggleShowCard = () => this.setState({ showCard: !this.state.showCard });
  deleteCardHandler = (cardIndex) => {
    const cards_copy = [...this.state.cards];
    cards_copy.splice(cardIndex, 1);
    this.setState({ cards: cards_copy });
  };
  changeNameHandler = (event, id) => {
    //1. which card
    const cardIndex = this.state.cards.findIndex((card) => card.id === id);
    //2. make a copy of the cards
    const cards_copy = [...this.state.cards];
    //3. vahnge the name of the specific card
    cards_copy[cardIndex].name = event.target.value;
    //4. set the with the latest versiom of card copy
    this.setState({ cards: cards_copy });
  };

  render() {
    const classes = ["button"];
    if (this.state.cards.length < 3) classes.push("pink");
    if (this.state.cards.length < 2) classes.push("red");
    const cardMarkup =
      this.state.showCard &&
      this.state.cards.map((card, index) => (
        <Card
          avatar={card.avatar}
          name={card.name}
          title={card.title}
          key={card.id}
          onDelete={() => this.deleteCardHandler(index)}
          onChangeName={(event) => this.changeNameHandler(event, card.id)}
        />
      ));
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Button color="mango" length={this.state.cards.length}>
            {" "}
            Toggle
          </Button>
          <button className={classes.join(" ")} onClick={this.toggleShowCard}>
            Toggle Show/hide
          </button>
          {cardMarkup}
        </div>
      </ThemeProvider>
    );
  }
}
export default App;
