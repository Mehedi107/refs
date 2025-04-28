const ResultModal = ({
  result,
  targetTime,
  ref,
  timeRemaining,
  resetTimer,
}) => {
  const userLost = timeRemaining <= 0;
  const formattedTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);
  return (
    <dialog className="result-modal" ref={ref}>
      {userLost && <h2>You {result}</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} second.</strong>
      </p>
      <p>
        You stop the timer with <strong>{formattedTime} second left.</strong>
      </p>
      <form method="dialog" onSubmit={resetTimer}>
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
