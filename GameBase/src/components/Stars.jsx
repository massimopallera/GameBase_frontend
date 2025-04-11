export default function Stars({rating}) {
  
    const score = Math.floor(Number(rating / 2))        
    const stars = Array(score).fill('bi-star-fill')
    const noFillStars = Array(5 - score).fill('bi-star')
    
  
    return (
      <>
        <div className="score">
          {stars.map((star,index) => <i key={index} className={`bi ${star} text-warning`}></i>)} {/* for filled stars */}
          {noFillStars.map((star,index) => <i key={index} className={`bi ${star} text-warning`}></i>)} {/* for non filled stars */}
        </div>
      </>
    )
  
  }