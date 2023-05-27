// routes/api/hotels.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require("path");

// Load Hotel model
const Hotel = require('../models/Hotel');

const upload = multer({ dest: path.join(__dirname, 'uploads/') }); // Set the destination folder for uploaded files

// Route to handle the image upload
router.post('/image', upload.single('file'), (req, res) => {
  // Access the uploaded file via req.file
  const filePath = req.file.path;

  // Process the file as needed (e.g., save to a database, generate a thumbnail, etc.)

  // Return the response
  res.status(200).json({ message: 'Image uploaded successfully', filePath });
});

// @route GET api/hotels/test
// @description tests hotels route
// @access Public
router.get('/test', (req, res) => res.send('hotel route testing!'));

// @route GET api/hotels
// @description Get all hotels
// @access Public
router.get('/', (req, res) => {
  Hotel.find()
    .then(hotels => res.json(hotels))
    .catch(err => res.status(404).json({ nohotelsfound: 'No hotels found' }));
});

// @route GET api/hotels/:id
// @description Get single hotel by id
// @access Public
router.get('/:id', (req, res) => {
  Hotel.findById(req.params.id)
    .then(hotel => res.json(hotel))
    .catch(err => res.status(404).json({ nohotelfound: 'No hotel found' }));
});

router.get('/location/:location', (req, res) => {
  const location = req.params.location;

  Hotel.find({ location })
    .then(hotels => {
      if (hotels.length === 0) {
        return res.status(404).json({ nohotelfound: 'No hotels found in the specified location' });
      }
      res.json(hotels);
    })
    .catch(err => res.status(500).json({ error: 'An error occurred while fetching hotels by location' }));
});

// @route POST api/hotels
// @description add/save hotel
// @access Public
// router.post('/', (req, res) => {
//   Hotel.create(req.body)
//     .then(hotel => res.json({ msg: 'Hotel added successfully' }))
//     .catch(err => res.status(400).json({ error: 'Unable to add this hotel' }));
// });
// POST /api/hotels
router.post('/', (req, res) => {
  const { image, name, location, mobileNo, roomDetails, description } = req.body;

  // Create a new hotel instance using the provided data
  const newHotel = new Hotel({
    image,
    name,
    location,
    mobileNo,
    roomDetails,
    description
  });

  // Save the new hotel to the database
  newHotel.save()
    .then(hotel => res.json({ msg: 'Hotel added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this hotel' }));
});

// @route PUT api/hotels/:id
// @description Update hotel
// @access Public
router.put('/:id', (req, res) => {
  Hotel.findByIdAndUpdate(req.params.id, req.body)
    .then(hotel => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route PATCH api/hotels/:id
// @description Update hotel
// @access Public
router.patch('/:id', (req, res) => {
  Hotel.findByIdAndUpdate(req.params.id, req.body)
    .then(hotel => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route DELETE api/hotels/:id
// @description Delete hotel by id
// @access Public
router.delete('/:id', (req, res) => {
  Hotel.findByIdAndRemove(req.params.id, req.body)
    .then(hotel => res.json({ msg: 'Hotel entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a hotel' }));
});

module.exports = router;