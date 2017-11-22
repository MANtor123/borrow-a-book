define(['ojs/ojcore','knockout', 'jquery', 'jet-composites/book-details/loader'],
    function(oj, ko, $) {
        function model() {
            var self = this;


            self.listOfBooks = ko.observableArray([{
              Image : "https://images-na.ssl-images-amazon.com/images/I/51ZGPDFAZCL._SX302_BO1,204,203,200_.jpg",
              Genre : "Tragedy Drama",
              Title : "Othello",
              Author: "William Shakespeare",
              Description:
            },
            {
              Image : "https://images-na.ssl-images-amazon.com/images/I/514UJKuVmdL._SX305_BO1,204,203,200_.jpg",
              Genre : "Tragedy Drama",
              Title : "To Kill A Mockingbird",
              Author: "Harper Lee",
              Description:
            },
            {
              Image : "https://images-na.ssl-images-amazon.com/images/I/51DUJ9xNG0L._SX307_BO1,204,203,200_.jpg",
              Genre : "Fantasy",
              Title : "Breaking Dawn" ,
              Author: "Stephenie Meyers" ,
              Description:
            },
            {
              Image : "https://cdn.vox-cdn.com/uploads/chorus_asset/file/8456431/The_Gunslinger__1988_trade_paperback_.jpg",
              Genre : "Adventure",
              Title : "The Dark Tower" ,
              Author: "Stephen  King",
              Description:
            },
            {
              Image : "https://hpmedia.bloomsbury.com/rep/s/978%201408855928_309033.jpeg",
              Genre : "Adventure",
              Title : "Harry Potter And The Cursed Child",
              Author: " J.K Rowling",
              Description:
            },])
            }

        }
        return model;
    }
);
