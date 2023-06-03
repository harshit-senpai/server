const express = require('express');
const docuser = require('../controller/doctor/doctor');
const login = require('../controller/doctor/login');
const Posthos = require('../controller/doctor/post');
const getpatient = require('../controller/doctor/Getpatientambulace');
const getapoinment = require('../controller/doctor/Getampoinement');
const getall = require('../controller/doctor/getalldoctor');
const singledoctor = require('../controller/doctor/singledoctor');
const Updatedoctorbook = require('../controller/doctor/updatebook');
const updateambu = require('../controller/doctor/updateambubook');
const getambu = require('../controller/doctor/getambulanceid');


const route = express.Router();

route.post('/signup', docuser);
route.post('/login', login);
route.put('/posthos', Posthos);
route.get('/book/ambulance/:id', getpatient);
route.get('/book/apoinment/:id', getapoinment);
route.get('/allhos', getall);
route.get('/single/:id', singledoctor);
route.put('/book/update', Updatedoctorbook);
route.put('/book/updateamb', updateambu);
route.get('/book/get/:id',getambu);


module.exports = route;