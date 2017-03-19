const controller = {};
const Roommate = require('../../models/roommate');

controller.createRM = (req, res) => {
  Roommate
  .createRM(req.body.roommate)
  .then((roommate) => {
    res
    .status(201)
    .json(roommate);
  })
  .catch((err) => {
    res
    .status(400)
    .json(err);
  });
};

controller.rmShow = (req, res) => {
  Roommate
  .findAll()
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.male = (req, res) => {
  Roommate
  .findByGender('Male')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.female = (req, res) => {
  Roommate
  .findByGender('Female')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmDishesEveryMeal = (req, res) => {
  Roommate
  .findByDishes('After every meal')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmDishesSinkFull = (req, res) => {
  Roommate
  .findByDishes('When the sink is full')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmDishesEveryDay = (req, res) => {
  Roommate
  .findByDishes('Everyday')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmWhatAreDishes = (req, res) => {
  Roommate
  .findByDishes('What are dishes?!')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.charmin = (req, res) => {
  Roommate
  .findByToiletPaper('Charmin')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.scotts = (req, res) => {
  Roommate
  .findByToiletPaper('Scotts')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.generic = (req, res) => {
  Roommate
  .findByToiletPaper('Generic')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.smoker = (req, res) => {
  Roommate
  .findBySmoker('Yes')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rent800to1000 = (req, res) => {
  Roommate
  .findByWallet('$800 - $1000')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rent1001to1500 = (req, res) => {
  Roommate
  .findByWallet('$1001 - $1500')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rent1501to2000 = (req, res) => {
  Roommate
  .findByWallet('$1501 - $2000')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rent2000Plus = (req, res) => {
  Roommate
  .findByWallet('$2000 +')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}


controller.rmDoesNotSmoke = (req, res) => {
  Roommate
  .findBySmoker('No')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmSleepsBefore10PM = (req, res) => {
  Roommate
  .findBySleep('Before 10pm')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmSleepAfterMidnight = (req, res) => {
  Roommate
  .findBySleep('After Midnight')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmSleepsAround10PM = (req, res) => {
  Roommate
  .findBySleep('Around 10pm')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmAge21to30 = (req, res) => {
  Roommate
  .findByAge('21 -30')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmAge31to40 = (req, res) => {
  Roommate
  .findByAge('31 - 40')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

controller.rmAge40plus = (req, res) => {
  Roommate
  .findByAge('41 +')
  .then((data) => {
    res.json(data)
  })
  .catch(err => console.log('ERROR:', err));
}

module.exports = controller;
