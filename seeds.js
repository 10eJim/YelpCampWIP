var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {   name: "Cloud's Rest", 
        image: "https://farm3.staticflickr.com/2580/3942698066_9157ac5123.jpg",
        description: "Beautiful ridgeline camping ground"
    },
    {   name: "Stoner's Heaven", 
        image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg",
        description: "Welcoming area and easy access"
    },
    {   name: "Scary Creek", 
        image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg",
        description: "Nope.  Nope.  Just... no."
    }
    ]

function seedDB(){
   
   //Remove all campgrounds
   
    Campground.remove({}, function (err){
        if (err){
            console.log(err);
        } else {
        console.log("Removed Campgrounds");
    }
    });
}
    //      // add a few campgrounds
    //     data.forEach(function(seed){
    //     Campground.create(seed, function(err, campground){
    //         if (err){
    //             console.log(err);
    //         } else {
    //             console.log("added a campground");
    //             Comment.create(
    //                 {
    //                     text: "This place is great, but no wifi.",
    //                     author: "Homer"
    //                 }, function (err, comment){
    //                     if (err){
    //                         console.log(err);
    //                     } else {
    //                     campground.comments.push(comment);
    //                     campground.save();
    //                     console.log("Created new comment.");
    //                     }
    //                 });
    //         }
    //     });
    //   }); 
    // });
    
    // //add a few comments
    
    // }

module.exports = seedDB;