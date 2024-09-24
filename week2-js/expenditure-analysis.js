/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const allTransactions = [
     {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	},
     {
		id: 2,
		timestamp: 1656076800000,
		price: 154,
		category: 'Cloths',
		itemName: 'Shirt',
	},
     {
		id:3,
		timestamp: 1652076800000,
		price: 5000,
		category: 'Shoes',
		itemName: 'Jorden',
	},
     {
		id: 4,
		timestamp: 1656976800000,
		price: 10,
		category: 'Cloths',
		itemName: 'Jeans',
	},
     {
		id: 5,
		timestamp: 1256076800034,
		price: 199,
		category: 'Food',
		itemName: 'Burgers',
	},
     {
		id: 6,
		timestamp: 1956076800000,
		price: 699999,
		category: 'Watch',
		itemName: 'Rardo',
	}
]

function calculateTotalSpentByCategory(transactions) {
     console.log(transactions.length);

     const results = []
     let map = new Map();
     for(let i = 0 ; i<transactions.length;i++){
         
          if(map.has(transactions[i].category)){
               let totalExpanse = transactions[i].price+map.get(transactions[i].category);
               map.set(transactions[i].category, totalExpanse);
          }else{
               map.set(transactions[i].category, transactions[i].price);
          }
          // console.log(transactions[i].price);
          
     }
     
     console.log(map);
     
     map.forEach(function (value,key){
          const obj = {
               "category" : key,
               "totalSpent" : value
          }
          results.push(obj);
     })
     return results;
   }
   
//    module.exports = calculateTotalSpentByCategory;
const allCatgTran = calculateTotalSpentByCategory(allTransactions);
console.log(allCatgTran);
