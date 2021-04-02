var test_categories = [{
  "id": 81,
  "short_name": "L",
  "name": "Lunch",
  "special_instructions": "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.",
  "url": "https://davids-restaurant.herokuapp.com/categories/81.json"
}, {
  "id": 82,
  "short_name": "A",
  "name": "Soup",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/82.json"
}, {
  "id": 83,
  "short_name": "B",
  "name": "Appetizers",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/83.json"
}, {
  "id": 84,
  "short_name": "SP",
  "name": "Chef's Recommendations",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/84.json"
}, {
  "id": 85,
  "short_name": "C",
  "name": "Chicken",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/85.json"
}, {
  "id": 86,
  "short_name": "F",
  "name": "Beef",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/86.json"
}, {
  "id": 87,
  "short_name": "V",
  "name": "Veal",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/87.json"
}, {
  "id": 88,
  "short_name": "DK",
  "name": "Duck",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/88.json"
}, {
  "id": 89,
  "short_name": "VG",
  "name": "Vegetables",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/89.json"
}, {
  "id": 90,
  "short_name": "CU",
  "name": "Curry",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/90.json"
}, {
  "id": 91,
  "short_name": "NL",
  "name": "Noodles (Lo Mein)",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/91.json"
}, {
  "id": 92,
  "short_name": "NF",
  "name": "Mei Fan (Very Fine Noodles)",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/92.json"
}, {
  "id": 93,
  "short_name": "PF",
  "name": "Pan Fried Noodles",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/93.json"
}, {
  "id": 94,
  "short_name": "FR",
  "name": "Fried Rice",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/94.json"
}, {
  "id": 95,
  "short_name": "CM",
  "name": "Chow Mein",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/95.json"
}, {
  "id": 96,
  "short_name": "FY",
  "name": "Egg Foo Young",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/96.json"
}, {
  "id": 97,
  "short_name": "SO",
  "name": "Side Orders",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/97.json"
}, {
  "id": 98,
  "short_name": "DS",
  "name": "Desserts",
  "special_instructions": "",
  "url": "https://davids-restaurant.herokuapp.com/categories/98.json"
}, {
  "id": 99,
  "short_name": "D",
  "name": "Dinner Combo",
  "special_instructions": "Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot \u0026 Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll.",
  "url": "https://davids-restaurant.herokuapp.com/categories/99.json"
}, {
  "id": 100,
  "short_name": "SR",
  "name": "Sushi Menu",
  "special_instructions": "Contains raw ingredients. Consuming raw or undercooked meat, poultry, or seafood may increase your risk of food borne illness.",
  "url": "https://davids-restaurant.herokuapp.com/categories/100.json"
}];


function chooseRandomCategory(categories) {
  // Choose a random index into the array (from 0 inclusively until array length (exclusively))
  var randomArrayIndex = Math.floor(Math.random() * categories.length);

  // return category object with that randomArrayIndex
  return categories[randomArrayIndex];
};

var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  // console.log("propToReplace:",propToReplace);
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
};

var chosenCategory = chooseRandomCategory(test_categories).valueOf();
console.log("chosenCategory.short_name output:", chosenCategory.short_name);
// expected output - $dc.loadMenuItems({{'L'}});

var var2 = `<div class="jumbotron">
      <img src="images/jumbotron_768.jpg" alt="Picture of restaurant" class="img-responsive visible-xs">
    </div>

    <div id="home-tiles" class="row">
      <div class="col-md-4 col-sm-6 col-xs-12">
        <a href="#" onclick="$dc.loadMenuCategories();"><div id="menu-tile"><span>menu</span></div></a>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-12">
        <a href="#" onclick="$dc.loadMenuItems({{randomCategoryShortName}});">
          <div id="specials-tile"><span>specials</span></div>
        </a>
      </div>
      <div class="col-md-4 col-sm-12 col-xs-12">
        <a href="https://www.google.com/maps/place/David+Chu's+China+Bistro/@39.3635874,-76.7138622,17z/data=!4m6!1m3!3m2!1s0x89c81a14e7817803:0xab20a0e99daa17ea!2sDavid+Chu's+China+Bistro!3m1!1s0x89c81a14e7817803:0xab20a0e99daa17ea" target="_blank">
          <div id="map-tile">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.675372390488!2d-76.71386218529199!3d39.3635874269356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c81a14e7817803%3A0xab20a0e99daa17ea!2sDavid+Chu&#39;s+China+Bistro!5e0!3m2!1sen!2sus!4v1452824864156" width="100%" height="250" frameborder="0" style="border:0" allowfullscreen></iframe>
            <span>map</span>
          </div>
        </a>
      </div>
    </div>`
var var1 = insertProperty(var2,"randomCategoryShortName","'" + chosenCategory.short_name + "'");
console.log("var1 output:", var1);

//
// console.log("-----------------")
// console.log(chooseRandomCategory(test_categories))
// console.log("-----------------")
// console.log(chooseRandomCategory(test_categories))
// console.log("-----------------")
// console.log(chooseRandomCategory(test_categories))
// console.log("-----------------")
// console.log(chooseRandomCategory(test_categories))
// console.log("-----------------")
// console.log(chooseRandomCategory(test_categories))
// console.log("-----------------")
