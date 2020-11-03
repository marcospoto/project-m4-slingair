"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid

const { v4: uuidv4 } = require("uuid");

//  Use this data. Changes will persist until the server (backend) restarts.
const { flights, reservations } = require("./data");

// console.log(flights);

const getFlights = (req, res) => {
  const flightNumber = Object.keys(flights);
  if (!flightNumber) {
    res.status(400).json({
      status: "error",
      message: "flight not found",
    });
  }
  res.status(200).json({
    status: 200,
    data: { flightNumber },
  });
};

const getFlight = (req, res) => {
  const { flightNumber } = req.params;
  const flightSeats = flights[flightNumber];
  console.log(flightNumber);
  if (!flightSeats) {
    res.status(400).json({
      status: "error",
      message: "flight not found",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: flightSeats,
    });
  }
};
const addReservations = (req, res) => {
  const newReservation = req.body;
  const { flightNumber, seat, givenName, surname, email } = newReservation;
  newReservation.id = uuidv4();
  newReservation.id = uuidv4();

  reservations.push(newReservation);
  res.status(201).json({
    status: 201,
    data: { newReservation },
  });
};

const getReservations = (req, res) => {
  res.status(200).json({
    status: 200,
    data: reservations,
  });
};

const getSingleReservation = (req, res) => {
  const { id } = req.params;
  const reservation = reservations.find((reservation) => reservation.id === id);
  if (!reservation) {
    res.status(400).json({
      status: "error",
      message: "flight not found",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: reservations,
    });
  }
};

const deleteReservation = (req, res) => {
  const { id } = req.params;
  const reservation = reservations.find((reservation) => reservation.id === id);
  if (!reservation) {
    res.status(400).json({
      status: "error",
      message: "Reservation not found",
    });
  } else {
    reservations.splice(reservation, 1);
    res.status(202).json({
      status: 202,
      message: "Reservation has been deleted",
    });
  }
};

const updateReservation = (req, res) => {
  const { id } = req.params;
  const updatedRes = reservations.some((reservation) => {
    if (reservation.id === id) {
      reservation = { ...req.body, id };
      return true;
    }
  });
  if (!updatedRes) {
    res.status(400).json({
      status: "error",
      message: "Reservation not found",
    });
  } else {
    res.status(200).json({
      status: 200,
      data: { reservation },
    });
  }
};

module.exports = {
  getFlights,
  getFlight,
  getReservations,
  addReservations,
  getSingleReservation,
  deleteReservation,
  updateReservation,
};
