import React, { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";

const options = ["good", "neutral", "bad"];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    const data = e.target.dataset.feedback;
    this.setState((prevState) => ({
      [data]: prevState[data] + 1,
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
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
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
