
const Report = ({header, className, paragraph}) => {
     return (
          <div className={className}>
               <div className="rocket-description">
                    <h1>THE TERMINOLOGY...</h1>
                    <h2>{header}</h2>
                    <p>{paragraph}</p>
               </div>
          </div>
     )
}

export default Report
