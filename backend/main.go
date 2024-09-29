package main

import (
	"github.com/h0wdyeve/hia/config"
	"github.com/h0wdyeve/hia/controller"
	"github.com/gin-gonic/gin"
)

const PORT = "8080"

func main() {
	// เริ่มต้นเชื่อมต่อกับฐานข้อมูล
	config.SetupDatabase()

	// สร้าง Gin engine ใหม่
	r := gin.Default()
	
	// ใช้ CORS middleware
	r.Use(CORSMiddleware())

	r.GET("/admin", controller.GetAllAdmin)
	r.GET("/admin/:id", controller.GetAdminByID)
	r.DELETE("/admin/:id", controller.DeleteAdmin)

	r.GET("/airlines", controller.GetAllAirline)
	r.GET("/airlines/:id", controller.GetAirlineByID)
	r.DELETE("/airlines/:id", controller.DeleteAirline)
	r.PUT("/airlines/:id" , controller.UpdateAirlineByid)

	r.GET("/benefits", controller.GetAllBenefits)
	r.GET("/benefits/:id", controller.GetBenefitsByID)
	r.DELETE("/benefits/:id", controller.DeleteBenefits)
	r.PUT("/benefits/:id" , controller.UpdateBenefitsByid)

	r.GET("/members", controller.GetAllMember)
	r.GET("/members/:id", controller.GetMemberByID)
	r.DELETE("/members/:id", controller.DeleteMember)
	r.PUT("/members/:id", controller.UpdatePoint)

	r.GET("/point", controller.GetAllPoint)
	r.GET("/point/:id", controller.GetPointByID)
	r.DELETE("/point/:id", controller.DeletePoint)

	r.Run("localhost:" + PORT)
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204) // หากเป็นคำขอ OPTIONS ให้ตอบกลับด้วย 204
			return
		}
		c.Next() // ดำเนินการต่อกับคำขอที่ไม่ใช่ OPTIONS
	}
}