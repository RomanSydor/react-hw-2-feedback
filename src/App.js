import React, { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseGood = () => {
    this.setState((previousState) => ({
      good: previousState.good + 1,
    }));
  };

  increaseNeutral = () => {
    this.setState((previousState) => ({
      neutral: previousState.neutral + 1,
    }));
  };

  increaseBad = () => {
    this.setState((previousState) => ({
      bad: previousState.bad + 1,
    }));
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    const result = total !== 0 ? (good * 100) / total : 0;
    return Math.round(result * 100) / 100;
  };

  render() {
    const totalFeedbackCount = this.countTotalFeedback(
      this.state.good,
      this.state.neutral,
      this.state.bad
    );

    const positiveFeedbackPercentageCount =
      this.countPositiveFeedbackPercentage(this.state.good, totalFeedbackCount);

    return (
      <div className="App">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            onIncreaseGood={this.increaseGood}
            onIncreaseNeutral={this.increaseNeutral}
            onIncreaseBad={this.increaseBad}
          />
        </Section>
        <Section title={"Statistics"}>
          {totalFeedbackCount !== 0 ? (
            <Statistics
              goodCount={this.state.good}
              neutralCount={this.state.neutral}
              badCount={this.state.bad}
              total={totalFeedbackCount}
              positivePercentage={positiveFeedbackPercentageCount}
            />
          ) : (
            <Notification message={"There is no feedback"}></Notification>
          )}
        </Section>
      </div>
    );
  }
}

export default App;
