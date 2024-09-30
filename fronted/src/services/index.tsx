import { message } from "antd";
import axios from 'axios';
import {MemberInterface} from "../interfaces/BenefitsPackage"
const apiUrl = "http://localhost:8080";
const Authorization = localStorage.getItem("token");

const Bearer = localStorage.getItem("token_type");

const requestOptions = {

    headers: {

        "Content-Type": "application/json",

        Authorization: `${Bearer} ${Authorization}`,

    },

};

async function GetAllMember() {

    return await axios

        .get(`${apiUrl}/members/`, requestOptions)

        .then((res) => res)

        .catch((e) => e.response);

}

async function GetMemberByID(id: string) {

    return await axios

        .get(`${apiUrl}/members/${id}`, requestOptions)

        .then((res) => res)

        .catch((e) => e.response);

}

async function DeleteMember(id: Number | undefined) {
    const requestOptions = {
      method: "DELETE"
    };
  
    let res = await fetch(`${apiUrl}/Member/${id}`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return true;
        } else {
          return false;
        }
      });
  
    return res;
  }

  async function UpdatePoints(data: MemberInterface) {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    
    let res = await fetch(`${apiUrl}/Member`, requestOptions)
    .then((res) => {
    if (res.status == 200) {
      return res.json();
    } else {
      return false;
    }
  });

  return res;
}

/////////////////////////airline/////////////////////////

async function GetAllAirline(id: string) {

    return await axios

        .get(`${apiUrl}/Airline/${id}`, requestOptions)

        .then((res) => res)

        .catch((e) => e.response);

}

async function GetAirlineByID(id: string) {

    return await axios

        .get(`${apiUrl}/Airline/${id}`, requestOptions)

        .then((res) => res)

        .catch((e) => e.response);

}

async function DeleteAirline(id: Number | undefined) {
    const requestOptions = {
      method: "DELETE"
    };
  
    let res = await fetch(`${apiUrl}/Airline/${id}`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return true;
        } else {
          return false;
        }
      });
  
    return res;
  }

/////////////////////////benefits/////////////////////////

async function GetAllBenefits(id: string) {

    return await axios

        .get(`${apiUrl}/Benefits/${id}`, requestOptions)

        .then((res) => res)

        .catch((e) => e.response);

}

async function GetBenefitsByID(id: string) {

    return await axios

        .get(`${apiUrl}/Benefits/${id}`, requestOptions)

        .then((res) => res)

        .catch((e) => e.response);

}

async function DeleteBenefits(id: Number | undefined) {
    const requestOptions = {
      method: "DELETE"
    };
  
    let res = await fetch(`${apiUrl}/Benefits/${id}`, requestOptions)
      .then((res) => {
        if (res.status == 200) {
          return true;
        } else {
          return false;
        }
      });
  
    return res;
  }

export {
  GetAllMember, GetMemberByID, DeleteMember, UpdatePoints,

  GetAllAirline, GetAirlineByID, DeleteAirline,

  GetAllBenefits, GetBenefitsByID, DeleteBenefits,
};