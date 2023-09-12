const express = require('express')

const server = express()

const planets = [
  {
    id: 1,
    name: 'mercury',
    moon_num: 0,
    mass: '0.33 x 10^24 kg',
    diameter: '4,880 km',
    dist_from_earth: '91.7 million km',
    gravity: 3.7,
    image_url: 'https://imgs.search.brave.com/sH_THUBBYTgoU1t1Md6w6A7XYevGRPlRym-qXI4_XtI/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzRhL01l/cmN1cnlfaW5fdHJ1/ZV9jb2xvci5qcGcv/NTEycHgtTWVyY3Vy/eV9pbl90cnVlX2Nv/bG9yLmpwZw'
  },
  {
    id: 2,
    name: 'venus',
    moon_num: 0,
    mass: '4.87 x 10^24 kg',
    diameter: '12,104 km',
    dist_from_earth: '41.4 million km',
    gravity: 8.87,
    image_url: 'https://imgs.search.brave.com/tyUzlQRS1-cb--sdKNYGQUWMfB8PMYmn68ZIHrUC55Y/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9iL2IyL1Zl/bnVzXzJfQXBwcm9h/Y2hfSW1hZ2UuanBn/LzUxMnB4LVZlbnVz/XzJfQXBwcm9hY2hf/SW1hZ2UuanBn'
  },
  {
    id: 3,
    name: 'earth',
    moon_num: 1,
    mass: '5.97 x 10^24 kg',
    diameter: '12,742 km',
    dist_from_earth: '0 km',
    gravity: 9.81,
    image_url: 'https://imgs.search.brave.com/RA5q1IkdyGv615j767aNP48lbB67UtQfmhnMDTyNOdY/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9jL2NiL1Ro/ZV9CbHVlX01hcmJs/ZV8lMjhyZW1hc3Rl/cmVkJTI5LmpwZy81/MTJweC1UaGVfQmx1/ZV9NYXJibGVfJTI4/cmVtYXN0ZXJlZCUy/OS5qcGc'
  },
  {
    id: 4,
    name: 'mars',
    moon_num: 2,
    mass: '0.641 x 10^24 kg',
    diameter: '6,779 km',
    dist_from_earth: '54.6 million km',
    gravity: 3.721,
    image_url: 'https://imgs.search.brave.com/I2xCyxY8lYhE9D7DmA-bGG0ehVHujczR1IXFix_qIlU/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzBjL01h/cnNfLV9BdWd1c3Rf/MzBfMjAyMV8tX0Zs/aWNrcl8tX0tldmlu/X00uX0dpbGwucG5n/LzUxMnB4LU1hcnNf/LV9BdWd1c3RfMzBf/MjAyMV8tX0ZsaWNr/cl8tX0tldmluX00u/X0dpbGwucG5n'
  },
  {
    id: 5,
    name: 'jupiter',
    moon_num: 80,
    mass: '1.899 x 10^27 kg',
    diameter: '139,822 km',
    dist_from_earth: ' 365 million km',
    gravity: 24.79,
    image_url: 'https://imgs.search.brave.com/Oefn1dGUOd-WoA7vG8ceFwoxRywKK9zDFkrO2LIRKyA/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9jL2MxL0p1/cGl0ZXJfTmV3X0hv/cml6b25zLmpwZy81/MTJweC1KdXBpdGVy/X05ld19Ib3Jpem9u/cy5qcGc'
  },
  {
    id: 6,
    name: 'saturn',
    moon_num: 82,
    mass: '5.683 x 10^26 kg',
    diameter: '116,464 km',
    dist_from_earth: ' 1.2 billion km',
    gravity: 10.44,
    image_url: 'https://imgs.search.brave.com/msmmr6oE3r36R-6mAC6ItBCgaHHiq0VHHzfw67Cokts/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9jL2M3L1Nh/dHVybl9kdXJpbmdf/RXF1aW5veC5qcGcv/NTEycHgtU2F0dXJu/X2R1cmluZ19FcXVp/bm94LmpwZw'
  },
  {
    id: 7,
    name: 'uranus',
    moon_num: 27,
    mass: '8.681 x 10^25 kg',
    diameter: '50,724 km',
    dist_from_earth: '2.6 billion km',
    gravity: 8.69,
    image_url: 'https://imgs.search.brave.com/coMWJjLop9xPVIo_cVOEvMML0R8KplZWe72Q3OQwues/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9jL2M5L1Vy/YW51c19hc19zZWVu/X2J5X05BU0ElMjdz/X1ZveWFnZXJfMl8l/MjhyZW1hc3RlcmVk/JTI5Xy1fSlBFR19j/b252ZXJ0ZWQuanBn/LzUxMnB4LVVyYW51/c19hc19zZWVuX2J5/X05BU0ElMjdzX1Zv/eWFnZXJfMl8lMjhy/ZW1hc3RlcmVkJTI5/Xy1fSlBFR19jb252/ZXJ0ZWQuanBn'
  },
  {
    id: 8,
    name: 'neptune',
    moon_num: 14,
    mass: '1.024 x 10^26 kg',
    diameter: '49,244 km',
    dist_from_earth: '4.3 billion km',
    gravity: 11.15,
    image_url: 'https://imgs.search.brave.com/UDObrpSMS7bC3etavOFa489wt-chz3zv6dVZwwbbKL4/rs:fit:560:320:1/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi82LzYzL05l/cHR1bmVfLV9Wb3lh/Z2VyXzJfJTI4Mjkz/NDc5ODA4NDUlMjlf/ZmxhdHRlbl9jcm9w/LmpwZy81MTJweC1O/ZXB0dW5lXy1fVm95/YWdlcl8yXyUyODI5/MzQ3OTgwODQ1JTI5/X2ZsYXR0ZW5fY3Jv/cC5qcGc'
  }
]

server.use(express.json())

// GET all
server.get('/planets', function (req, res) {
  res.send(planets)
})

// GET one
server.get('/planets/:id', function (req, res) {
  const foundplanet = planets.find(x => x.id === Number(req.params.id))

  if (foundplanet) {
    res.send(foundplanet)
  } else {
    res.status(404).send('Not Found')
  }
})

// POST one through id
server.post('/planets', function (req, res) {
  const newPlanet = req.body

  newPlanet.id = Math.random()

  planets.push(newPlanet)
  res.status(201).send('planet added')
})

// DELETE one through id
server.delete('/planets/:id', function (req, res) {
  const foundPlanetIndex = planets.findIndex(a => a.id === Number(req.params.id))

  if (foundPlanetIndex > -1) {
    planets.splice(foundPlanetIndex, 1)
    res.send('Deleted planet')
  }
  else {
    res.status(404).send('Not found')
  }
})

// UPDATE one through id
server.patch('/planets/:id', function (req, res) {
  const id = req.params.id
  const data = req.body

  const foundPlanetIndex = planets.findIndex(y => y.id.toString() === id)

  if (foundPlanetIndex > -1) {
    const old_data = planets[foundPlanetIndex]
    planets[foundPlanetIndex] = {
      ...old_data,
      ...data,
      id: planets[foundPlanetIndex].id
    }
    res.send('Updated')
  }
  else {
    res.status(404).send('Not found')
  }
})

server.listen(6341)
