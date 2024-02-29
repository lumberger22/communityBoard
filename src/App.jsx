import Card from './components/Card';
import './App.css'

function App() {

  const tournaments = [
    {
      name: 'Dubai Open',
      weight: 'ATP 500',
      date: 'Feb 26 - Mar 2'
    },
    {
      name: 'Mexican Open',
      weight: 'ATP 500',
      date: 'Feb 26 - Mar 2'
    },
    {
      name: 'Movistar Chile Open',
      weight: 'ATP 250',
      date: 'Feb 26 - Mar 3'
    },
    {
      name: 'BNP Paribas Open',
      weight: 'Masters 1000',
      date: 'Mar 6 - Mar 17'
    },
    {
      name: 'Miami Open',
      weight: 'Masters 1000',
      date: 'Mar 10 - Mar 31'
    },
    {
      name: 'Houston Clay Court Open',
      weight: 'ATP 250',
      date: 'Apr 1 - Apr 7'
    },
    {
      name: 'Grand Prix Hassan II',
      weight: 'ATP 250',
      date: 'Apr 1 - Apr 7'
    },
    {
      name: 'Millenium Estoril Open',
      weight: 'ATP 250',
      date: 'Apr 1 - Apr 7'
    },
    {
      name: 'Rolex Monte-Carlo Masters',
      weight: 'Masters 1000',
      date: 'Apr 7 - Apr 14'
    },
    {
      name: 'Barcelona Open',
      weight: 'ATP 500',
      date: 'Apr 15 - Apr 21'
    }
  ]

  return (
    <>
      <h1>Upcoming ATP Tennis Events</h1>
      <h3>Check below for the current and upcoming tournaments!</h3>
      <h2>Click on the Names below for more informaion</h2>
      <div className="card-container">
        {
          tournaments.map((tournament, i) => {
            return (<Card 
              name={tournament.name} 
              key={i}
              weight={tournament.weight} 
              date={tournament.date} />)
          })
        }
      </div>
    </>
  )
}

export default App
