function Card({ name, weight, date, image, link })  {

    return (
      <section className="card">
          <img className="card-image" src={image}/>
          <div className="content">
            <h3><a href={link} target="_blank">{name}</a></h3>
            <h4>{weight}</h4>
            <p>{date}</p>
          </div>
      </section>
    )
  }
  
    export default Card