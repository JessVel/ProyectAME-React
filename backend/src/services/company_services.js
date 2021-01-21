const express = require("express");
const sequelize = require("sequelize");
const { connection } = require("../db/connection");
require("dotenv").config({ path: ".env" });

//Funcion para mostrar todas las compañias
async function mostrarCompanies() {
  try {
    const resultado = await connection.query("SELECT * FROM companies ORDER BY name", {
      type: sequelize.QueryTypes.SELECT,
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
}

//Funcion para crear una compañia
async function crearCompany(id_citie, address, name, email, tel) {
  try {
    const resultado = await connection.query("INSERT INTO companies VALUES (NULL, ?, ?, ?, ?, ?)", {
      replacements: [id_citie, address, name, email, tel],
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
}

//Funcion para eliminar una compañia
async function borrarCompany(id) {
  try {
    const resultado = await connection.query("DELETE FROM companies WHERE id_company = :id", {
      type: sequelize.QueryTypes.DELETE,
      replacements: { id: id },
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
}

//Funcion para actualizar una compañia
async function actualizarCompany(id, nuevoId_citie, nuevoAddress, nuevoName, nuevoEmail, nuevoTel) {
  try {
    const resultado = await connection.query("UPDATE companies SET id_citie = :nuevoId_citie, adress = :nuevoAddress, name = :nuevoName, tel = :nuevoTel  WHERE contacts.id_contacts = :id", {
      type: sequelize.QueryTypes.PUT,
      replacements: {
        id: id,
        nuevoId_citie: nuevoId_citie,
        nuevoAddress: nuevoAddress,
        nuevoName: nuevoName,
        nuevoEmail: nuevoEmail,
        nuevoTel: nuevoTel,
      },
    });
    console.log(resultado);
  } catch (err) {
    return err;
  }
}

module.exports = {
  mostrarCompanies: mostrarCompanies,
  crearCompany: crearCompany,
  borrarCompany: borrarCompany,
  actualizarCompany: actualizarCompany,
};
