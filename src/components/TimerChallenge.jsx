import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timeStart, setTimeStart] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimeStart(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} result={'Lost'} targetTime={targetTime} />
      <div className="challenge">
        <h2>{title}</h2>
        {/* {timeExpired && <p>You Lost</p>} */}
        <p className="challenge-time">
          {targetTime} sec{targetTime > 1 ? 's' : ''}
        </p>
        <div>
          <button onClick={timeStart ? handleStop : handleStart}>
            {timeStart ? 'Stop' : 'Start'} Challenge
          </button>
        </div>
        <p>{timeStart ? 'Timer is running...' : 'Timer inactive'}</p>
      </div>
    </>
  );
};

export default TimerChallenge;
