import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsRunning = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  function resetTimer() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.showModal();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        result={'Lost'}
        targetTime={targetTime}
        timeRemaining={timeRemaining}
        resetTimer={resetTimer}
      />
      <div className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} sec{targetTime > 1 ? 's' : ''}
        </p>
        <div>
          <button onClick={timerIsRunning ? handleStop : handleStart}>
            {timerIsRunning ? 'Stop' : 'Start'} Challenge
          </button>
        </div>
        <p>{timerIsRunning ? 'Timer is running...' : 'Timer inactive'}</p>
      </div>
    </>
  );
};

export default TimerChallenge;
