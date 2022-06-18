import { Component } from 'react';
import Feedback from '../Feedback/Feedback';
import Statistics from '../Statistics/Statistic';
import s from './SectionFeedback.module.css';

class Section extends Component {
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
    return (
      <section className={s.section}>
        <Feedback
          options={Object.keys(this.state)}
          handFeedback={this.handFeedback}
        />
        <h2 className={s.title}>Statistics</h2>
        {this.countTotalFeedback() === 0 ? (
          ''
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.positivePercentage()}
          />
        )}
      </section>
    );
  }
}

export default Section;
