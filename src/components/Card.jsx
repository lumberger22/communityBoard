function Card({ name, weight, date })  {

    return (
      <section style={{ border: '3px solid white', marginBottom: '8px' }}>
          <h3>{name}</h3>
          <h4>{weight}</h4>
          <p>{date}</p>
      </section>
    )
  }
  
    export default Card