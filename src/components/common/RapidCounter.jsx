const RapidCounter = ({ value, cn }) => {
  return (
    <div>
      <h1>
        <CountUp start={0} end={value} duration={2} separator="," />
      </h1>
    </div>
  );
};

export default RapidCounter;
