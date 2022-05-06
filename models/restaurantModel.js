const nedb = require('nedb');
class GuestBook {
    constructor(dbFilePath) {
        if (dbFilePath) {
        this.db = new nedb({ filename: dbFilePath, autoload: true });
        console.log('DB connected to ' + dbFilePath);
        } else {
        this.db = new nedb();
        }
        }
    //a function to seed the database
init() {

this.db.insert({
    _id: '1',
    Menutype: 'Lunch',
    mealType: 'Main',
    description: 'A hearty locally sourced breakfast to start your day right.',
    ingredients: 'Baked beans, gluten free pork sausage, frittata muffin, white potato, roast mushroom',
    allergens: 'mustard, eggs and soya bean',
    price: '9.00',
    dishName: 'The Après Organic English Breakfast',
    dishAvailability: 'available',
    });
    //for later debugging
    console.log('db entry inserted');
    
this.db.insert({
    _id:'2',
    Menutype: 'Lunch',
    mealType: 'Main',
    description: 'a healthy meal  high in protein and big on flavour',
    ingredients: '1tbsp tamari, curry powder, cumin, garlic, clear honey, chicken breast, peanut butter, sweet chilli sauce, lime juice, sunflower oil, Little Gem lettuce, cucumber, banana shallot, coriander, pomegranate',
    allergens: 'Peanut',
    price: '6.50',
    dishName: 'Chicken satay salad',
    dishAvailability: 'available',
    });
    //for later debugging
    console.log('db entry inserted');

this.db.insert({
    _id:'3',
    Menutype: 'Dinner',
    mealType: 'Main',
    description: 'A low-calorie vegan linguine which can also be served cold as a pasta salad. It delivers on flavour and its healthy.',
    ingredients:'wholemeal linguine, lime, avocado, tomatoes, chopped, coriander, red onion, red chilli',
    allergens: 'Gluten, Avocado',
    price: '5.50',
    dishName: 'Linguine with avocado, tomato & lime',
    dishAvailability: 'available',   
    });
    //for later debugging
    console.log('db entry inserted');
  

this.db.insert({
    _id:'4',
    Menutype: 'Dinner',
    mealType: 'Starter',
    description: 'A healthy vegetarian take on a classic dish.',
    ingredients: 'cauliflower puree, Beetroot fritters,  roast aubergine, parsley dressing.' ,
    allergens: 'None',
    price: '8.80',
    dishName: 'Organic Beetroot & Apple Fritters with Mint & Chilli Dressing',   
    dishAvailability: 'available',
    });
    //for later debugging
    console.log('db entry inserted');

this.db.insert({
    _id:'5',
    Menutype: 'Dinner',
    mealType: 'Main',
    description: 'the finest seafood sourced from the north sea',
    ingredients: 'salmon, prawns, crackers, rye bread, caperberries, smoked trout pâté, smoked trout, soft cheese, capersDijon, mustard, lemon, red onion, dill, soured cream, mayonnaise, hot sauce',
    allergens: 'Seafood, dairy, gluten, egg',
    price: '14',
    dishName: 'Seafood platter',  
    dishAvailability: 'available', 
    });
    //for later debugging
    console.log('db entry inserted');

this.db.insert({
    _id:'6',
    Menutype: 'Lunch',
    mealType: 'Main',
    description: 'Dunk flatbreads into these salsa verde baked eggs to soak up the lovely juices. Healthy and low in calories',
    ingredients: 'olive oil, smoked paprika, cumin seeds, cherry tomatoes, garlic cloves, parsley, basil, mint, capers, Dijon mustard, white wine vinegar, spinach, eggs, chilli flakes, flatbreads',
    allergens: 'eggs',
    price: '6',
    dishName: 'Salsa verde baked eggs',   
    dishAvailability: 'available',
    });
    //for later debugging
    console.log('db entry inserted');

this.db.insert({
    _id:'7',
    Menutype: 'Dinner',
    mealType: 'Main',
    description: 'healthy fish curry, with vibrant turmeric, ginger and coconut flavours',
    ingredients: 'olive oil, onions, ginger, turmeric, garam masalam, cayenne, coconut milk, cod loin, sugar snap peas, brown basmati rice, red chilli, 1 lime',
    allergens: 'none',
    price: '9.50',
    dishName: 'Turmeric, ginger & coconut fish curry',   
    dishAvailability: 'available',
    });
    //for later debugging
    console.log('db entry inserted');

this.db.insert({
    _id:'8',
    Menutype: 'Lunch',
    mealType: 'Starter',
    description: 'chunks of fresh pineapple to fried rice to transform it into something special',
    ingredients: 'vegetable oil, eggs , garlic cloves, spring onions, Chinese five-spice powder, long-grain ricepeas, sesame oil, soy sauce, pineapple',
    allergens: 'eggs',
    price: '4',
    dishName: 'Pineapple fried rice',   
    dishAvailability: 'available',
    });
    //for later debugging
    console.log('db entry inserted');

this.db.insert({
    _id:'9',
    Menutype: 'Dinner',
    mealType: 'Main',
    description: 'The perfect dinner for two',
    ingredients: 'broccoli, spaghetti, olive oil, garlic clove, cherry tomatoes, king prawns, rose harissa paste, lemon',
    allergens: 'gluten',
    price: '10',
    dishName: 'Prawn & harissa spaghetti',   
    dishAvailability: 'available',
    });
    //for later debugging
    console.log('db entry inserted');
}
//a function to return all entries from the database
getAllEntries() {
    //return a Promise object, which can be resolved or rejected
    return new Promise((resolve, reject) => {
    //use the find() function of the database to get the data,
    //error first callback function, err for error, entries for data
    this.db.find({}, function(err, entries) {
    //if error occurs reject Promise
    if (err) {
    reject(err);
    //if no error resolve the promise & return the data
    } else {
    resolve(entries);
    //to see what the returned data looks like
    console.log('function all() returns: ', entries);
    }
    })
    })
    }
    getLunchMenu() {
        //return a Promise object, which can be resolved or rejected
        return new Promise((resolve, reject) => {
        //find(Menutype:'Peter) retrieves the data,
        //with error first callback function, err=error, entries=data
        this.db.find({dishAvailability:'available', Menutype: 'Lunch' }, function(err, entries) {
        //if error occurs reject Promise
        if (err) {
        reject(err);
        //if no error resolve the promise and return the data
        } else {
        resolve(entries);
        //to see what the returned data looks like
        console.log('getPetersEntries() returns: ', entries);
        }
        })
        })
        }
        getDinnerMenu() {
            //return a Promise object, which can be resolved or rejected
            return new Promise((resolve, reject) => {
            //find(Menutype:'Peter) retrieves the data,
            //with error first callback function, err=error, entries=data
            this.db.find({dishAvailability:'available', Menutype: 'Dinner' }, function(err, entries) {
            //if error occurs reject Promise
            if (err) {
            reject(err);
            //if no error resolve the promise and return the data
            } else {
            resolve(entries);
            //to see what the returned data looks like
            console.log('getPetersEntries() returns: ', entries);
            }
            })
            })
            }

availibilitychanger(identification,available) {
        this.db.update({ _id: identification}, {  $set: { dishAvailability: available } }, {}, function (err, numReplaced) {
            // numReplaced = 3
            // Field 'system' on Mars, Earth, Jupiter now has value 'solar system'
          }) 
    }   
                
editEntry(identification, Menutype, dmealtype, ddescription,dingredients, dallergen, dprice, ddish, available) {
    var entry = {
        _id: identification,
        Menutype: Menutype,
        mealType: dmealtype,
        description: ddescription,
        ingredients: dingredients,
        allergens: dallergen,
        price: dprice,
        dishName: ddish,
        dishAvailability: available
        }
        this.db.update({ _id: identification }, { $set: entry }, { multi: true }, function (err, numReplaced) {
            // numReplaced = 3
            // Field 'system' on Mars, Earth, Jupiter now has value 'solar system'
          })
         
    }   
    
addEntry(identification, Menutype, dmealtype, ddescription, dingredients, dallergen, dprice, ddish, available) {
            var entry = {
            _id: identification,
            Menutype: Menutype,
            mealType: dmealtype,
            description: ddescription,
            ingredients: dingredients,
            allergens: dallergen,
            price: dprice,
            dishName: ddish,
            dishAvailability: available
            }
            console.log('entry created', entry);
            this.db.insert(entry, function(err, doc) {
            if (err) {
            console.log('Error inserting document', ddish);
            } else {
            console.log('document inserted into the database', doc);
            }
            }) 
        }  
         
getEntriesByUser(MenutypeName) {
            return new Promise((resolve, reject) => {
                this.db.find({ 'Menutype': MenutypeName }, function(err, entries) {
                if (err) {
                    reject(err);
                } else {
                    resolve(entries);
                console.log('getEntriesByUser returns: ', entries);
            }
        })
    })
 }

 
}
module.exports = GuestBook;