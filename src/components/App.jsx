import React, { useState } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = option => {
    setFeedbacks(prevState => {
      return { ...prevState, [option]: prevState[option] + 1 };
    });
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbacks;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = feedbacks;
    const total = good + neutral + bad;

    return total ? Math.round((good / total) * 100) : 0;
};

  const totalFeedbackCount = countTotalFeedback();
  const totalPositiveFeedbackPercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave your feedback"></Section>
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={handleFeedback}
      />

      {totalFeedbackCount ? (
        <Section title="Statistics">
          <Statistics
            good={feedbacks.good}
            neutral={feedbacks.neutral}
            bad={feedbacks.bad}
            total={totalFeedbackCount}
            positivePercentage={totalPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback yet" />
      )}
    </>
  ); };

export default App;







// import React, { Component } from 'react';
// import Statistics from './Statistics';
// import FeedbackOptions from './FeedbackOptions';
// import Section from './Section';
// import Notification from './Notification';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = option => {
//     this.setState(prevState => {
//       return { [option]: prevState[option] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;

//     return total ? Math.round((good / total) * 100) : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <Section title="Please leave your feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.handleFeedback}
//           />
//         </Section>

//         {total ? (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           </Section>
//         ) : (
//           <Notification message="There is no feedback yet" />
//         )}
//       </>
//     );
//   }
// }

// export default App;