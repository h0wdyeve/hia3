package main

import (
	"github.com/hia3/backend/entity"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	db, err := gorm.Open(sqlite.Open("sa-entity.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	db.AutoMigrate(&entity.Admin{}, &entity.Airline{}, &entity.Benefits{}, 
&entity.Member{}, &entity.Point_Calculator{})
}

<div className="frame-flight-details" >
        {Array.isArray(Benefits) && Benefits.map((benefits) => (
          <div className="flight-details" key={benefits.ID} >
            <div className="img-benefits-details3_1_1">
              <img className="BKtoSM1" src={benefits.Img} alt="img" />
              <div className="img-benefits-details3_1_1_y">
                <img className="BKtoSM2" src={BKtoSM2} alt="img" />
                <img className="BKtoSM3" src={BKtoSM3} alt="img" />
              </div>
            </div>
            <div className="flight-info">
              <span className='ff-gt'>{benefits.BenefitsName}</span>
              <span className='airline-name'>{benefits.AirlineID}</span>
              <div className="a-points">
                <img className="p-icon" src={pointsicon} alt="icon" />
                <span className="points">{benefits.PointRequired} P</span>
            </div>

              <span className='class'>Class :{benefits.Class}</span>
              {/* <div className="class-class">
                <div className='eco-button'>{benefits.Class}</div> */}
                {/* <div className={`bu-button ${selectedClass === 'Business' ? 'selected' : ''}`}>
                  <button onClick={() => setSelectedClass('Business')}>Business</button>
                </div> */}
              {/* </div> */}

              <span className='trip'>Trip :{benefits.Trip}</span>
              {/* <div className="trip-class">
                <div className={`ow-button ${selectedTrip === 'One Way' ? 'selected' : ''}`}>
                  <button onClick={() => setSelectedTrip('One Way')}>One Way</button>
                </div>
              </div> */}
              <button className="redeem-button">Redeem benefits</button>
            </div>
          </div>
        ))}
      </div>