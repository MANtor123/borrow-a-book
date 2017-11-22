/**
  Copyright (c) 2015, 2017, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(
    ['ojs/ojcore', 'knockout', 'jquery'], function (oj, ko, $) {
    'use strict';

    function ExampleComponentModel(context) {
        var self = this;

        self.composite = context.element;
        self.visibleSection = ko.observable("");
        self.username = ko.observable("");

        self.borrowedBy = ko.observableArray([]);

        self.borrowBook = function(book){

            if (!book.borrowed()) {
              book.borrowed(true);
            }

        }

        self.returnBook = function(book){
          //find the book in the book list and set borrowed to false

          if (book.borrowed()) {
            book.borrowed(false);
          }

        }





        //borrow the book

        //


        //Example observable
        self.messageText = ko.observable('Hello from Example Component');

        context.props.then(function (propertyMap) {
            //Store a reference to the properties for any later use
            self.properties = propertyMap;

            //Parse your component properties here

        });
    };


    self.listOfBooks = ko.observableArray([{
      Image : "https://images-na.ssl-images-amazon.com/images/I/51ZGPDFAZCL._SX302_BO1,204,203,200_.jpg",
      Genre : "Tragedy Drama",
      Title : "Othello",
      Author: "William Shakespeare",
      Description: "no",
      borrowed : ko.observable(true)

          },
      {
        Image : "https://images-na.ssl-images-amazon.com/images/I/514UJKuVmdL._SX305_BO1,204,203,200_.jpg",
        Genre : "Tragedy Drama",
        Title : "To Kill A Mockingbird",
        Author: "Harper Lee",
        Description: "no",
        borrowed : ko.observable(true)
      },
      {
        Image : "https://images-na.ssl-images-amazon.com/images/I/51DUJ9xNG0L._SX307_BO1,204,203,200_.jpg",
        Genre : "Fantasy",
        Title : "Breaking Dawn" ,
        Author: "Stephenie Meyers" ,
        Description:"no",
        borrowed : ko.observable(false)
      },
      {
        Image : "https://cdn.vox-cdn.com/uploads/chorus_asset/file/8456431/The_Gunslinger__1988_trade_paperback_.jpg",
        Genre : "Adventure",
        Title : "The Dark Tower" ,
        Author: "Stephen  King",
        Description:"no",
        borrowed : ko.observable(false)
      },
      {
        Image : "https://hpmedia.bloomsbury.com/rep/s/978%201408855928_309033.jpeg",
        Genre : "Adventure",
        Title : "Harry Potter And The Cursed Child",
        Author: " J.K Rowling",
        Description:"no",
        borrowed : ko.observable(true)
      }])

    //Lifecycle methods - uncomment and implement if necessary
    //ExampleComponentModel.prototype.activated = function(context){
    //};

    //ExampleComponentModel.prototype.attached = function(context){
    //};

    //ExampleComponentModel.prototype.bindingsApplied = function(context){
    //};

    //ExampleComponentModel.prototype.detached = function(context){
    //};

    return ExampleComponentModel;
});
