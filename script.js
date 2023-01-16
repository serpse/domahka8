



//                       12                            //


let users = [
    {
    "index": 0,
    "isActive": true,
    "balance": "$2,226.60",
    "name": "Eugenia Sawyer",
    "gender": "female",
    "phone": "+1 (840) 583-3207",
    "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
    "index": 1,
    "isActive": true,
    "balance": "$2,613.77",
    "name": "Pauline Gallegos",
    "gender": "female",
    "phone": "+1 (985) 593-3328",
    "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
    "index": 2,
    "isActive": false,
    "balance": "$3,976.41",
    "name": "Middleton Chaney",
    "gender": "male",
    "phone": "+1 (995) 591-2478",
    "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
    "index": 3,
    "isActive": true,
    "balance": "$1,934.58",
    "name": "Burns Poole",
    "gender": "male",
    "phone": "+1 (885) 559-3422",
    "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
    "index": 4,
    "isActive": true,
    "balance": "$3,261.65",
    "name": "Mcfadden Horne",
    "gender": "male",
    "phone": "+1 (942) 565-3988",
    "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
    "index": 5,
    "isActive": false,
    "balance": "$1,790.56",
    "name": "Suzette Lewis",
    "gender": "female",
    "phone": "+1 (837) 586-3283",
    "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
    ]
   


function balanMax(users) {
  let usersDollars = [];

  for (let user of users) {
    let dolCol = +user["balance"].replace(/[^0-9.]/g, '');
    if (dolCol > 2000) {
      usersDollars.push(user);
    }
  }
  return usersDollars;
}
    



function sumBalan(coristuv) {
  let sum = 0;

  for (let user of coristuv) {
    let dolCol = +user["balance"].replace(/[^0-9.]/g, '');
    sum += dolCol;
  }
  return sum ;
}



let usersResult = usersCheck(users);

console.log('Пользователи у которых баланс больше $2000');
for (user of usersResult) {
  console.log(user['name']);
}

console.log(`сумма балансов баланс больше $2000: ${sumBalan(usersResult)}`);

console.log(` сумма балансов : ${sumBalan(users)}`);



//                             13                              //




function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
console.log();( pow(2,1)); 





//              __________               //
/*
function closur (number1) {
  
  console.log(`sum(${number1}) = ${number1}`);
  
  return function (number2) {
      const result = number1 + number2
      
  console.log(`sum(${number2}) = ${result}`);
     
  return function (number3) {
         
       const ResultNumber3 = result + number3;
         
  console.log(`sum(${number3}) = ${ResultNumber3}`)
      }
  }
}
closur(3)(5)(20);
*/
//_____________



//                             14                                 //


let sam = 0;

function sum(x) {
     sam += x;
    return  sam;
}

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));






//                             15                    //

let ladder = {
  step: 0,
  up() {
    this.step++;
     return this;
  },
  
  down() {
    this.step--;
  return this;
  },
  
  showStep() {
    alert( this.step );
     return this;
  }
};

ladder.up().up().down().showStep().down().showStep();


