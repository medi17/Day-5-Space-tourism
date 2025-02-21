
const content = ({honor, name, biography, className}) => {
     return (
          <div className={className}>
               <div className="crew-description">
                    <div className="titles">
                         <h2>{honor}</h2>
                         <h3>{ name }</h3>
                    </div>
                    <p>{ biography }</p>
               </div>
          </div>
     )
}

export default content
