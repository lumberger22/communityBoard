function Card({ name, weight, date })  {

    return (
      <section style={{ border: '3px solid white', marginBottom: '8px' }}>
          <h3>Name: {name}</h3>
          <h4>Level: {weight}</h4>
          <p>Dates: {date}</p>
      </section>
    )
  }
  
  export default Card