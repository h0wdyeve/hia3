package entity

import "gorm.io/gorm"

type Airline struct {
	gorm.Model
	AirlineName		string

}