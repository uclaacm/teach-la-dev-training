import React from "react";
//a thesis on why class-based components suck
//Class-based Way of thinking = WHEN do things happen?
export default class ClassLecturePage extends React.Component {
  //ALL our state logic has to be part of a single this.state object
  constructor(props) {
    super(props);
    this.state = {
      peopleVaccinated: 0,
      shouldGetVaccine: false,
      vaccinesLeft: 1000,
      peopleInterval: null,
      vaccineInterval: null,
    };
  }

  //Logic for people vaccinated interval
  componentDidMount() {
    let updatePeopleVaccinated = () => {
      this.setState((prevState) => ({
        peopleVaccinated: prevState.peopleVaccinated + 5,
      }));
    };
    this.setState({
      peopleInterval: setInterval(updatePeopleVaccinated, 1000),
    });
  }

  //ALL our component updating logic is mixed together in a single componentDidUpdate
  componentDidUpdate(prevState) {
    //
    if (this.state.peopleVaccinated >= 15 && !this.state.shouldGetVaccine) {
      this.setState({ shouldGetVaccine: true });
    }

    //
    if (this.state.shouldGetVaccine && !this.state.vaccineInterval) {
      let updateVaccinesLeft = () => {
        this.setState((prevState) => ({
          vaccinesLeft: prevState.vaccinesLeft - 5,
        }));
      };
      this.setState({ vaccineInterval: setInterval(updateVaccinesLeft, 1000) });
    }
  }

  //ALL function cleanup is part of the same componentWillUnmount
  componentWillUnmount() {
    //
    clearInterval(this.state.peopleInterval);
    if (this.state.vaccineInterval) clearInterval(this.state.vaccineInterval);
  }

  render() {
    return (
      <div>
        <div>
          There have been {this.state.peopleVaccinated} people vaccinated since
          you opened this page
        </div>
        {this.state.shouldGetVaccine && (
          <div>
            <div>You should get your vaccine before they run out!</div>
            <div>
              There are only {this.state.vaccinesLeft} vaccines left in stock!
            </div>
          </div>
        )}
        <div>This is our Class-Based Component</div>
      </div>
    );
  }
}
