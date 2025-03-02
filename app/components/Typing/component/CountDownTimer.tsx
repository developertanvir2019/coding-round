const CountDownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return (
    <div>
      <h2 className="text-yellow-500 font-medium">time:{timeLeft}</h2>
    </div>
  );
};

export default CountDownTimer;
