const FeedbackOptions = ({
  onIncreaseGood,
  onIncreaseNeutral,
  onIncreaseBad,
}) => {
  return (
    <div>
      <button onClick={onIncreaseGood}>Good</button>
      <button onClick={onIncreaseNeutral}>Neutral</button>
      <button onClick={onIncreaseBad}>Bad</button>
    </div>
  );
};

export default FeedbackOptions;
