package entity

import "gorm.io/gorm"

type Benefits struct {
	gorm.Model
	BenefitsName	string
	FlyingFrom		string
	GoingTo			string
	PointRequired	uint
	Quantity		uint
	Code			string
	Class			string
	Trip			string
	Img1			string
	Img2			string
	Img3			string

	AirlineID *uint
	Airline Airline `gorm:"foreignKey:AirlineID"`

	AdminID *uint
	Admin Admin `gorm:"foreignKey:AdminID"`
}