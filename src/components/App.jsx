import { Component } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistic';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positivePercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };

  handFeedback = e => {
    const btn = e.target.textContent.toLowerCase();
    this.setState(prevState => ({
      ...prevState,
      [btn]: prevState[btn] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { countTotalFeedback, positivePercentage, handFeedback, state } =
      this;
    return (
      <div className={s.section}>
        <Section title="Please leave feedback">
          <Feedback options={Object.keys(state)} handFeedback={handFeedback} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={positivePercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
