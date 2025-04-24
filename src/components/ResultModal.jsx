const ResultModal = ({ result, targetTime, ref }) => {
  return (
    <dialog className="result-modal" ref={ref}>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} second.</strong>
      </p>
      <p>
        You stop the timer with <strong>{targetTime}X second left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
