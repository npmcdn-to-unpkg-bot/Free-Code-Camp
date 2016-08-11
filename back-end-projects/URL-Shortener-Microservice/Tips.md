# shorten url
Base 58

[link](https://coligo.io/create-url-shortener-with-node-express-mongo)

## HOw to crate a schema

Redirecting the visitor
When someone visits a URL shortened by our service such as coligo.io/3Ys, we want to:
Take the 3Ys from the URL
Decode it to get the unique _id of our document in the urls collection
Redirect them to the associated long_url in that document
Thankfully Express makes dynamic URL parameters really easy:
app.get('/:encoded_id', function(req, res){

});


Express will take the base58 encoded ID at the end of our URL and assign it to a variable called encoded_id for us to use in our callback. For example, if a user visits coligo.io/3Ys, the variable encoded_id will hold the value 3Ys.
We will decode the base58 ID to get it's base10 equivalent and look it up in the database using the findOne method. If we manage to find that _id in the database, we will then redirect the visitor to their actual destination with Express's res.redirectmethod with a 301 redirect status. However, if we don't find anything in the database with that _id we can simply redirect them to the homepages (or potentially a 404 page).
app.get('/:encoded_id', function(req, res){
  var base58Id = req.params.encoded_id;
  var id = base58.decode(base58Id);

  // check if url already exists in database
  Url.findOne({_id: id}, function (err, doc){
    if (doc) {
      // found an entry in the DB, redirect the user to their destination
      res.redirect(doc.long_url);
    } else {
      // nothing found, take 'em home
      res.redirect(config.webhost);
    }
  });

});


