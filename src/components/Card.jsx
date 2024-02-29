function Card({ name, weight, date })  {

    return (
      <section className="card">
          <img className="card-image" src="#"/>
          <div className="content">
            <h3><a href="#">{name}</a></h3>
            <h4>{weight}</h4>
            <p>{date}</p>
          </div>
      </section>
    )
  }
  
    export default Card