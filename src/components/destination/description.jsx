
const description = (props) => {
     return (
          <div className= {props.className}>
               <div className="planet-description">
                    <h1>{props.title}</h1>
                    <p>{props.paragraph}</p>
               </div>
               <div className="horizontal">
                    <hr />
               </div>
               <div className="physics-info">
                    <div className="distance">
                         <h2>AVG. DISTANCE</h2>
                         <p>{props.distance} KM</p>
                    </div>
                    <div className="time">
                         <h2>EST. TRAVEL TIME</h2>
                         <p>{props.time}</p>
                    </div>
               </div>
          </div>
     )
}

export default description
