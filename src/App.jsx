import Card from './components/Card';
import './App.css'

function App() {

  const tournaments = [
    {
      name: 'Aaa Bbb',
      weight: 'Lorem Ipsum',
      date: '19981'
    },
    {
      name: 'Aaa Bbb',
      weight: 'Lorem Ipsum',
      date: '19981'
    },
    {
      name: 'Aaa Bbb',
      weight: 'Lorem Ipsum',
      date: '19981'
    }
  ]

  return (
    <>
      <h1>Upcoming ATP Events</h1>
      <h2>Check below for the current and upcoming tournaments!</h2>
      {
        tournaments.map((tournament, i) => {
          return (<Card 
            name={tournament.name} 
            key={i}
            weight={tournament.weight} 
            date={tournamnet.date} />)

        })
      }

    </>
  )
}

export default App
