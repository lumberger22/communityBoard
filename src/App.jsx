import Card from './components/Card';
import './App.css'

function App() {

  const tournaments = [
    {
      name: 'Dubai Open',
      weight: 'ATP 500',
      date: 'Feb 26 - Mar 2',
      image: 'images/dubai.jpg',
      link: 'https://dubaidutyfreetennischampionships.com/'
    },
    {
      name: 'Mexican Open',
      weight: 'ATP 500',
      date: 'Feb 26 - Mar 2',
      image: 'images/mexican.jpg',
      link: 'https://abiertomexicanodetenis.com/en/'
    },
    {
      name: 'Movistar Chile Open',
      weight: 'ATP 250',
      date: 'Feb 26 - Mar 3',
      image: 'images/movistar.jpg',
      link: 'https://www.chileopen.cl/'
    },
    {
      name: 'BNP Paribas Open',
      weight: 'Masters 1000',
      date: 'Mar 6 - Mar 17',
      image: 'images/bnpParibas.jpg',
      link: 'https://bnpparibasopen.com/'
    },
    {
      name: 'Miami Open',
      weight: 'Masters 1000',
      date: 'Mar 10 - Mar 31',
      image: 'images/miami.jpg',
      link: 'https://www.miamiopen.com/'
    },
    {
      name: 'Houston Clay Court Open',
      weight: 'ATP 250',
      date: 'Apr 1 - Apr 7',
      image: 'images/houston.jpg',
      link: 'https://www.mensclaycourt.com/'
    },
    {
      name: 'Grand Prix Hassan II',
      weight: 'ATP 250',
      date: 'Apr 1 - Apr 7',
      image: 'images/grandPrix.jpg',
      link: 'https://www.frmt.ma/'
    },
    {
      name: 'Millenium Estoril Open',
      weight: 'ATP 250',
      date: 'Apr 1 - Apr 7',
      image: 'images/estoril.jpg',
      link: 'https://www.millenniumestorilopen.com/'
    },
    {
      name: 'Monte-Carlo Masters',
      weight: 'Masters 1000',
      date: 'Apr 7 - Apr 14',
      image: 'images/monteCarlo.jpg',
      link: 'https://montecarlotennismasters.com/en'
    },
    {
      name: 'Barcelona Open',
      weight: 'ATP 500',
      date: 'Apr 15 - Apr 21',
      image: 'images/barcelona.jpg',
      link: 'https://www.barcelonaopenbancsabadell.com/en/home/'
    }
  ]

  return (
    <>
      <h1>Upcoming ATP Tennis Events</h1>
      <h2>Check below for the current and upcoming tournaments!</h2>
      <h2>Click on the Names below for more informaion</h2>
      <div className="card-container">
        {
          tournaments.map((tournament, i) => {
            return (<Card 
              name={tournament.name} 
              key={i}
              weight={tournament.weight} 
              date={tournament.date}
              image={tournament.image}
              link={tournament.link} />)
          })
        }
      </div>
    </>
  )
}

export default App
