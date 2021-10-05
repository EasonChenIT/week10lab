var Actor = require('../models/actor');
var Movie = require('../models/movie');
const mongoose = require('mongoose');

module.exports = {

    getAll: function (req, res) {
        Movie.find().populate('actors').exec(function (err,movies) {
            if (err) return res.status(400).json(err);
                if (!movies) return res.status(404).json();
                res.json(movies);
        })
    },


    createOne: function (req, res) {
        let newMovieDetails = req.body;
        newMovieDetails._id = new mongoose.Types.ObjectId();
        Movie.create(newMovieDetails, function (err, movie) {
            if (err) return res.status(400).json(err);

            res.json(movie);
        });
    },


    getOne: function (req, res) {
        Movie.findOne({ _id: req.params.id })
            .populate('actors')
            .exec(function (err, movie) {
                if (err) return res.status(400).json(err);
                if (!movie) return res.status(404).json();

                res.json(movie);
            });
    },


    updateOne: function (req, res) {
        Movie.findOneAndUpdate({ _id: req.params.id }, req.body, function (err, movie) {
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();

            res.json(movie);
        });
    },

    deleteOne: function(req,res){
        Movie.deleteOne({_id : req.params.id},function (err) {
            if (err) return res.status(400).json(err);
            res.json();
        })
    },
    
    //task 4
    removeActor: function (req,res) {
        Movie.findOne({_id : req.params.mid},function (err,movie) {
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();

            Actor.findOne({_id : req.params.aid}, function (err,actor) {
                if (err) return res.status(400).json(err);
                if (!actor) return res.status(404).json();
                
                movie.actors.remove(actor._id);
                movie.save(function (err) {
                    if (err) return res.status(500).json(err);

                    res.json(actor);
                })
            })
        })
    },

    // task 5

    addActor: function (req,res) {
        Movie.findOne({ _id: req.params.mid }, function (err, movie) {
            if (err) return res.status(400).json(err);
            if (!movie) return res.status(404).json();

            Actor.findOne({ _id: req.params.aid }, function (err, actor) {
                if (err) return res.status(400).json(err);
                if (!actor) return res.status(404).json();

                movie.actors.push(actor._id);
                movie.save(function (err) {
                    if (err) return res.status(500).json(err);
                    res.json(movie);
                });
            })
        });
    },

    // task 6

    getByYear: function (req,res) {
        let query = {year : {$lte: req.query.year1 ,$gte : req.query.year2 }}
        Movie.find(query,function (err,movies) {
            if (err) return res.status(400).json(err);
            if (!movies) return res.status(404).json();
            res.json(movies);
        })
    },

    //task 9
    deleteByYear: function (req,res) {
        let query = {year : {$lte: req.params.year1 ,$gte : req.params.year2 }}
        Movie.deleteMany(query,function (err) {
            if (err) return res.status(400).json(err);
            res.json();
        });
    },

    deleteByTitle: function(req,res){
        let query = {title : req.params.title};
        Movie.deleteOne(query,function(err){
            if (err) return res.status(400).json(err);
            res.json();
        });
    }
};