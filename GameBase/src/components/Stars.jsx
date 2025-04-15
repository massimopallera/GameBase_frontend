export default function Stars({rating}) {
  
    const score = Math.floor(Number(rating / 2)) 
    // console.log(score);
           
    const stars = Array(score).fill('bi-star-fill')
    // console.log(stars);

    const noFillStars =  stars.length < 5 ? Array(5 - score).fill('bi-star') : null
    // console.log(noFillStars);


    
  
    return (
      <>
        <div className="score">
          {stars.map((star,index) => <i key={index} className={`bi ${star} text-warning`}></i>)} {/* for filled stars */}
          {noFillStars?.map((star,index) => <i key={index} className={`bi ${star} text-warning`}></i>)} {/* for non filled stars */}
        </div>
      </>
    )
  
  }