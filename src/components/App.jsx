import { useState } from 'react';
import { Statistics, FeedbackOptions, Section } from '../components';

const App = () => {
  const [form, setForm] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = e => {
    const { name } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: prevForm[name] + 1 }));
  };

  const countTotalFeedback = () => {
    return form.good + form.neutral + form.bad;
  };

  const countPositiveFeedbackPercentage = sum => {
    return (Math.round((form.good / sum) * 100) || 0) + '%';
  };

  const sum = countTotalFeedback();
  const persentGood = countPositiveFeedbackPercentage(sum);

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
        <FeedbackOptions options={form} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {sum === 0 ? (
          <p>There is no feedback</p>
        ) : (
          <Statistics
            Good={form.good}
            Neutral={form.neutral}
            Bad={form.bad}
            Total={sum}
            PositiveFeadback={persentGood}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
