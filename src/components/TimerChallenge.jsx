const TimerChallenge = ({ title, targetTime }) => {
  return (
    <div className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} sec{targetTime > 1 ? 's' : ''}
      </p>
      <div>
        <button>Start Challenge</button>
      </div>
      <p>Time is running.../ Timer inactive</p>
    </div>
  );
};

export default TimerChallenge;
