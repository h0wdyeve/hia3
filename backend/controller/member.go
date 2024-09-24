package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/h0wdyeve/hia/config"
	"github.com/h0wdyeve/hia/entity"
)

func GetAllMember(c *gin.Context) {
	var Member []entity.Member
	db := config.DB()

	results := db.Select("id, Email, Password, FirstName, LastName, BirthDay, Gender, TotalPoint").Find(&Member)  //อีฟแก้เอานะเราไม่รู้ต้องเอาไรบ้าง

	if results.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": results.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, Member)
}

func GetMemberByID(c *gin.Context) {
	var Member entity.Member
	id := c.Param("id")

	// ดึงข้อมูลจากฐานข้อมูลตาม ID
	if err := config.DB().First(&Member, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Benefits not found"})
		return
	}

	// ส่งข้อมูลกลับไปในรูป JSON
	c.JSON(http.StatusOK, gin.H{"data": Member})
}

func DeleteMember(c *gin.Context) {

	id := c.Param("id")
	db := config.DB()
	if tx := db.Exec("DELETE FROM Member WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "id not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Deleted successful"})

}

func UpdatePoint(c *gin.Context) {
	var point entity.Member

	MemberID := c.Param("id")

	db := config.DB()
	result := db.First(&point, MemberID)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "id not found"})
		return
	}

	if err := c.ShouldBindJSON(&point); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request, unable to map payload"})
		return
	}

	result = db.Save(&point)
	if result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Updated successful"})
}


func UpdateMovieByid(c *gin.Context) {


	var movie entity.Movie
 
 
	MovieID := c.Param("id")
 
 
	db := config.DB()
 
	result := db.First(&movie, MovieID)
 
	if result.Error != nil {
 
		c.JSON(http.StatusNotFound, gin.H{"error": "NameMovie not found"})
 
		return
 
	}
 
 
	if err := c.ShouldBindJSON(&movie); err != nil {
 
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request, unable to map payload"})
 
		return
 
	}
 
 
	result = db.Save(&movie)
 
	if result.Error != nil {
 
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request"})
 
		return
 
	}
 
 
	c.JSON(http.StatusOK, gin.H{"message": "Updated successful"})
 
 }