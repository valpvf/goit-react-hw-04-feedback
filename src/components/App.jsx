import { Component } from 'react';
import { Statistics, FeedbackOptions, Section } from '../components';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage(sum) {
    return (Math.round((this.state.good / sum) * 100) || 0) + '%';
  }

  render() {
    const sum = this.countTotalFeedback();
    const persentGood = this.countPositiveFeedbackPercentage(sum);
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {sum === 0 ? (
            <p>There is no feedback</p>
          ) : (
            <Statistics
              Good={this.state.good}
              Neutral={this.state.neutral}
              Bad={this.state.bad}
              Total={sum}
              PositiveFeadback={persentGood}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
