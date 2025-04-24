import { useRef, useState } from 'react';

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const [timeStart, setTimeStart] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);

    setTimeStart(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <div className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>You Lost</p>}
      <p className="challenge-time">
        {targetTime} sec{targetTime > 1 ? 's' : ''}
      </p>
      <div>
        <button onClick={timeStart ? handleStop : handleStart}>
          {timeStart ? 'Stop' : 'Start'} Challenge
        </button>
      </div>
      <p>{timeStart ? 'Time is running...' : 'Timer inactive'}</p>
    </div>
  );
};

export default TimerChallenge;
