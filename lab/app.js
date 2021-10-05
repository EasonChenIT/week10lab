const express = require('express');
const mongoose = require('mongoose');

const actors = require('./routers/actor');
const movies = require('./routers/movie');

const app = express();
let path = require('path');
app.use("/", express.static(path.join(__dirname, "dist/lab")));

app.listen(8080);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/movies', function (err) {
    if (err) {
        return console.log('Mongoose - connection error:', err);
    }
    console.log('Connect Successfully');

});

//Configuring Endpoints
//Actor RESTFul endpoionts 
app.get('/actors', actors.getAll);
app.post('/actors', actors.createOne);
app.get('/actors/:id', actors.getOne);
app.put('/actors/:id', actors.updateOne);
app.post('/actors/:id/movies', actors.addMovie);
app.delete('/actors/:aid/:mid',actors.removeMovie);
app.delete('/actors/:id', actors.deleteOne);
app.delete('/actors/:id' ,actors.deleteAllMovies);
app.get('/actors/get/movies', actors.getMovies);



//Movie RESTFul  endpoints
app.get('/movies', movies.getAll);
app.get('/movies/:id', movies.getOne);
app.get('/movies/list/byyear',movies.getByYear);

app.post('/movies', movies.createOne);
app.post('/movies/:mid/:aid', movies.addActor);

app.put('/movies/:id', movies.updateOne);

app.delete('/movies/deletebytitle/:title',movies.deleteByTitle);//task2
app.delete('/movies/:id',movies.deleteOne);
app.delete('/movies/:mid/:aid', movies.removeActor);
app.delete('/movies/deletebetweenyears/:year1/:year2',movies.deleteByYear)



