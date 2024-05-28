import './App.css';
//import Header from './components/header';
import Nav from './components/nav';
import Card from './components/card';
import FinacialSummery from './components/financialSummery';
import RecentTransactions from './components/Recent Transactions';

function App() {
  return (
    <div class="lg:flex m-16 text-center lg:text-left justify-center items-center">
      
      <Nav />
      <FinacialSummery />
      <RecentTransactions />
    </div>
  );
}

export default App;
