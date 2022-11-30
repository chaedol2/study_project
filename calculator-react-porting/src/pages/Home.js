import Calculator from "../components/calculator/Calculator";
import History from "../components/history/History";

const Home = () => {
  return (
    <div className="calculator-container">
      <Calculator />
      <History />
    </div>
  );
};

export default Home;
