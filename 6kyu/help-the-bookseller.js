/* 
A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a cat c of 3, 4, 5 or more capitals letters. The 1st letter of a cat is the capital letter of the book category. In the bookseller's stocklist each cat c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this cat in stock.

For example an extract of one of the stocklists could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or

L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
You will be given a stocklist (art.g. : L) and a list of categories in capital letters art.g :

  M = {"A", "B", "C", "W"} 
or

  M = ["A", "B", "C", "W"] or ...
and your task is to find all the books of L with cats belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

  (A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no cat beginning with W.

If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).

Note:
In the result cats and their values are in the same order as in M.
*/

// const stockList = (listOfArt, listOfCat) => {
//   if (!listOfArt.length) return "";
//   const dictionary = {};
//   const resultsObj = {}
//   let resultsString = "";

//   listOfCat.map(cat => {
//     return resultsObj[cat] = 0
//   });

//   listOfArt.map(art => {
//     const cat = art.split(" ")[0]
//     const quantity = Number(art.split(" ")[1])
//     dictionary[cat] = quantity
//   })
//   for (cat in dictionary) {
//     for (cat in resultsObj) {
//       if (cat[0] === cat) {
//         resultsObj[cat] += dictionary[cat]
//       }
//     }
//   }

//  for (cat in resultsObj) {
//     resultsString += ` - (${cat} : ${resultsObj[cat]})`
//   }
//   return resultsString.substring(3);
// }

const stockList = (listOfArt, listOfCat) => {
  if (!listOfArt.length) return "";
  const stock = {}

  listOfArt.map(art => {
    const cat = art.split(" ")[0][0]
    const quantity = Number(art.split(" ")[1])
    stock[cat] = (stock[cat] | 0) + quantity
  })

  const results = listOfCat.map(e => {
    return `(${e} : ${stock[e] | 0})`
  })

  return results.join(' - ')
}

const b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"];
const c = ["A", "B", "Z"]
const res = "(A : 200) - (B : 1140)"
// stockList(b, c)
console.log(stockList(b, c))
