import React from "react";

const SpecialOffer =()=>{
    return(
        <div>
           <div className="container">
                <h1 className="tc navy">Special Offers</h1>
                <div  className="row shadow-1">
                    <div className="col-sm-8 ph3 mv5">
                        <h4 className="navy tc-m">Zuma Restaurant</h4>
                        <p> 
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non 
                            quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio 
                            commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia 
                            quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio 
                            commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
                        </p>
                    </div>
                    <div className="col-sm-3 ph3 mv5 offset-1" ><img alt="Zuma Restaurant" src="https://res.cloudinary.com/undercover/image/upload/v1585698916/RecreationalApp/cities%20views/Zuma_Restaurant_xfxrxj.svg" /></div>
                </div>
            
            <div  className="row shadow-1 mt6-l">
                <div className="col-sm-8 ph3 mv5">
                    <h4 className="navy center-ns ">Omu Resort</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non 
                        quia quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio 
                        commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, quam modi quisquam eligendi non quia 
                        quaerat iusto perferendis earum quasi corrupti ullam sequi perspiciatis totam optio 
                        commodi qui at et quis ut! Accusamus obcaecati doloremque similique, placeat culpa tempore eum.
                    </p>
                </div>
              <div className="col-sm-3 ph3 mv5 offset-1" ><img alt="Omu resort" src="https://res.cloudinary.com/undercover/image/upload/v1585698959/RecreationalApp/cities%20views/Omu_resort_swsmhp.svg" /> </div>
            </div>
        </div>
            <div className="tc ma3"><button className="pa2">See More v</button></div>
        </div>
    )
}

export default SpecialOffer;