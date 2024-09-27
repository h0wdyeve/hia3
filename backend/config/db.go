package config

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"github.com/h0wdyeve/hia/entity"
	"fmt"
)

var db *gorm.DB

func DB() *gorm.DB {
	return db
}

func ConnectionDB() {
	database, err := gorm.Open(sqlite.Open("Netfilm2.db?cache=shared"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}
	fmt.Println("connected database")
	db = database
}

func SetupDatabase() {
	database, err := gorm.Open(sqlite.Open("G11_PROJECT.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect database")
	}

	database.AutoMigrate(
		&entity.Admin{},
		&entity.Airline{},
		&entity.Benefits{},
		&entity.Member{},
		&entity.Point_Calculator{},
	)
	db = database

	Airlines := []entity.Airline{
		{AirlineName: "AirAsia"},
		{AirlineName: "Thai Airways"},
		{AirlineName: "NokAir"},
		{AirlineName: "Vietjet"},
	}
	for _, pkg := range Airlines {
		db.FirstOrCreate(&pkg,entity.Airline{AirlineName: pkg.AirlineName})
	}

	BenefitsDetails := []entity.Benefits{
		// {BenefitsName: "Bangkok (Suvarnabhumi) - Samui", FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Samui", PointRequired: 6500, Quantity: 10, Code: "sFlfg487", Class: "Business",Trip: "One Way", Img: ""},
		{BenefitsName: "Bangkok (Suvarnabhumi) - Samui", FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Samui", PointRequired: 4000, Quantity: 10, Code: "Agjyj201", Class: "Economy",Trip: "One Way", 
		Img1: "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4MpR4CLyh1p02j54vC6f1SHzCFBa86m8YSZtm0MOyGFOxDqJCop.webp", 
		Img2: "https://ik.imagekit.io/tvlk/blog/2022/01/%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%84%E0%B8%99%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%9A%E0%B9%88%E0%B8%AD%E0%B8%9C%E0%B8%B8%E0%B8%9401.jpg?tr=dpr-2,w-675", 
		Img3: "https://www.fairhousevillas.com/blog/wp-content/uploads/2023/01/%E0%B9%84%E0%B8%9B%E0%B9%80%E0%B8%81%E0%B8%B2%E0%B8%B0%E0%B8%AA%E0%B8%A1%E0%B8%B8%E0%B8%A2-2-2-1024x602.jpg"},
		// {BenefitsName: "Bangkok (Suvarnabhumi) - Maldives", FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Maldives", PointRequired: 14000, Quantity: 10, Code: "liuaq006", Class: "Business",Trip: "One Way"},
		{BenefitsName: "Bangkok (Suvarnabhumi) - Maldives", FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Maldives", PointRequired: 11500, Quantity: 10, Code: "jsoem493", Class: "Economy",Trip: "One Way", 
		Img1: "https://flyerbonus-official-store.bangkokair.com/uploads/temp/05bacab3-ac18-47cd-a567-7e7eba8a5bc8/file_dfx38jmx.jpg",
		Img2: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/180000/180680-Maldives-All.jpg", 
		Img3: "https://flyerbonus-official-store.bangkokair.com/uploads/temp/cf82f160-b364-4aef-a0e2-cc630c070d33/file_mvbx4j3q.png"},
		// {BenefitsName: "Bangkok (Suvarnabhumi) - Lampang", FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Lampang", PointRequired: 5000, Quantity: 10, Code: "Yoash039", Class: "Business",Trip: "One Way"},
		{BenefitsName: "Bangkok (Suvarnabhumi) - Lampang", FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Lampang", PointRequired: 2500, Quantity: 10, Code: "Hqpeo348", Class: "Economy",Trip: "One Way", 
		Img1: "https://blog.bangkokair.com/wp-content/uploads/2023/09/Lampang-rainy-seasons-scaled.jpeg",
		Img2: "https://www.checkinchill.com/wp-content/uploads/shutterstock_2216900917.jpg", 
		Img3: "https://www.ktc.co.th/pub/media/Article/08/ktc-KaoFu.webp"},
		// {BenefitsName: "Bangkok (Suvarnabhumi) - Phuket", FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Phuket", PointRequired: 5000, Quantity: 10, Code: "cnosd882", Class: "Business",Trip: "One Way"},
		{BenefitsName: "Bangkok (Suvarnabhumi) - Phuket", FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Phuket", PointRequired: 2500, Quantity: 10, Code: "Udcnn235", Class: "Economy",Trip: "One Way", 
		Img1: "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/05/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-2024-05-20T120256.309.png",
		Img2: "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/05/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-2024-05-20T131237.222.png", 
		Img3: "https://www.ananda.co.th/blog/thegenc/wp-content/uploads/2024/05/%E0%B8%94%E0%B8%B5%E0%B9%84%E0%B8%8B%E0%B8%99%E0%B9%8C%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD-2024-05-20T124256.553.png"},
		// {BenefitsName: "Bangkok (Suvarnabhumi) - Trat", FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Trat", PointRequired: 5000, Quantity: 10, Code: "Wewld398", Class: "Business",Trip: "One Way"},
		{BenefitsName: "Bangkok (Suvarnabhumi) - Trat", FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Trat", PointRequired: 2500, Quantity: 10, Code: "spdmk948", Class: "Economy",Trip: "One Way", 
		Img1: "https://ik.imagekit.io/tvlk/blog/2019/03/shutterstock_480954832-800x534.jpg?tr=dpr-2,w-675",
		Img2: "https://s359.kapook.com//pagebuilder/3f189b3c-c90c-4c86-8a5f-c48763345b83.jpg", 
		Img3: "https://cms.dmpcdn.com/travel/2020/03/09/03fee100-61e2-11ea-8884-dfd81909e81a_original.JPG"},
		// {BenefitsName: "Bangkok (Suvarnabhumi) - Chiang Mai", FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Chiang Mai", PointRequired: 5000, Quantity: 10, Code: "Vosdl455", Class: "Business",Trip: "One Way"},
		{BenefitsName: "Bangkok (Suvarnabhumi) - Chiang Mai", FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Chiang Mai", PointRequired: 2500, Quantity: 10, Code: "kdfai588", Class: "Economy",Trip: "One Way", 
		Img1: "https://v4i.rweb-images.com/www.maehongsongreentravel.com/images/editor/Chiang%20Mai/%e0%b9%80%e0%b8%8a%e0%b8%b5%e0%b8%a2%e0%b8%87%e0%b9%83%e0%b8%ab%e0%b8%a1%e0%b9%88.jpg",
		Img2: "https://www.checkinchill.com/wp-content/uploads/checkinchill-14-9-2023-161.jpg", 
		Img3: "https://www.checkinchill.com/wp-content/uploads/shutterstock_1895810143.jpg"},
		// {BenefitsName: "Bangkok (Suvarnabhumi) - Sukhothai", FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Sukhothai", PointRequired: 5000, Quantity: 10, Code: "Dsaop358", Class: "Business",Trip: "One Way"},
		{BenefitsName: "Bangkok (Suvarnabhumi) - Sukhothai", FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Sukhothai", PointRequired: 2500, Quantity: 10, Code: "akdpU482", Class: "Economy",Trip: "One Way", 
		Img1: "https://www.legendhasukhothai.com/image/39894277300SUKHOTHAI-HISTORICAL-PARK.jpg",
		Img2: "https://sundayz.me/wp-content/uploads/2020/03/kaoluang-sukhothai-21.jpg", 
		Img3: "https://travel.mthai.com/app/uploads/2014/06/20140623_3_1403514199_120767.jpg"},
		// {BenefitsName: "Chiang Mai - Krabi", FlyingFrom: "Chiang Mai", GoingTo: "Krabi", PointRequired: 9000, Quantity: 10, Code: "hyKrs329", Class: "Business",Trip: "One Way"},
		{BenefitsName: "Chiang Mai - Krabi", FlyingFrom: "Chiang Mai", GoingTo: "Krabi", PointRequired: 6500, Quantity: 10, Code: "sRpeo396", Class: "Economy",Trip: "One Way", 
		Img1: "https://s359.kapook.com//pagebuilder/3dc6d425-c9da-459b-bc46-1ede891bb45e.jpg",
		Img2: "https://roijang.com/wp-content/uploads/2022/12/shutterstock_2061926990.jpg", 
		Img3: "https://roijang.com/wp-content/uploads/2022/12/shutterstock_289362893.jpg"},
	}
	for _, pkg := range BenefitsDetails {
		db.FirstOrCreate(&pkg,entity.Benefits{Code: pkg.Code})
	}

	PointCal := []entity.Point_Calculator{
		{FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Samui", Point: 750, Class: "Business"},
		{FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Samui", Point: 500, Class: "Economy"},
		{FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Maldives", Point: 750, Class: "Business"},
		{FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Maldives", Point: 500, Class: "Economy"},
		{FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Lampang", Point: 750, Class: "Business"},
		{FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Lampang", Point: 500, Class: "Economy"},
		{FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Phuket", Point: 750, Class: "Business"},
		{FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Phuket", Point: 500, Class: "Economy"},
		{FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Trat", Point: 750, Class: "Business"},
		{FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Trat", Point: 500, Class: "Economy"},
		{FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Chiang Mai", Point: 750, Class: "Business"},
		{FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Chiang Mai", Point: 500, Class: "Economy"},
		{FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Sukhothai", Point: 750, Class: "Business"},
		{FlyingFrom: "Bangkok (Suvarnabhum)", GoingTo: "Sukhothai", Point: 500, Class: "Economy"},
		{FlyingFrom: "Chiang Mai", GoingTo: "Krabi", Point: 750, Class: "Business"},
		{FlyingFrom: "Chiang Mai", GoingTo: "Krabi", Point: 500, Class: "Economy"},
	}
	for _, pcloop := range PointCal {
		db.FirstOrCreate(&pcloop,entity.Point_Calculator{GoingTo: pcloop.GoingTo, Point: pcloop.Point})
	}

	hashedPassword, _ := HashPassword("123456")

	Member := []entity.Member{
		{Email: "B6506407@g.sut.ac.th",Password:    hashedPassword , FirstName: "Nobpasin" , LastName: "Tumdee" ,BirthDay: "2003-06-26" , Gender: "Male", TotalPoint: 0},
	}
	for _, pkg := range Member {
		db.FirstOrCreate(&pkg,entity.Member{Email: pkg.Email})
	}
}

