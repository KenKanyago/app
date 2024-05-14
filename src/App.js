import './App.css';
//import Header from './components/header';
import Nav from './components/nav';
import Card from './components/card';
import FinacialSummery from './components/financialSummery';
import RecentTransactions from './components/Recent Transactions';

function App() {
  return (
    <>
      
      <Nav />
      <FinacialSummery />
      <RecentTransactions />
    </>
  );
}

export default App;
