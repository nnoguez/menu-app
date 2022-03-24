import './App.css'
import React, { useState} from "react"
import MenuApp from './components/MenuApp'
// import Menu from "./components/Menu"

// menu choices for each food section
function MenuChoices(props) {
  let isChoice = props.isChoice;
  let appData = props.data1;
  let entrData = props.data2;
  let desData = props.data3;
  let bevData = props.data4;
  if (isChoice === 1) {
    return(<MenuApp data={appData}/>);
  }
  else if (isChoice === 2) {
    return(<MenuApp data={entrData}/>);

  }
  else if (isChoice === 3) {
    return(<MenuApp data={desData}/>);
  }
  else if (isChoice === 4) {
    return(<MenuApp data={bevData}/>);
  }
}

export function Greet(props) {
  const [greet, setGreet] = useState(false);
  let isChoice = props.isChoice;
  let appData = props.data1;
  let entrData = props.data2;
  let desData = props.data3;
  let bevData = props.data4;
  return(
    <div className="Greet">
    {
      (greet
        ?
        <>
        <Total/>
        </>
        :
        <>
        <MenuChoices isChoice={choice} data1={appData} data2={entrData} data3={desData} data4={bevData}/>
        </>
      )
    }
    </div>
  );
}

// overall function encloses data and sets layout
export default function App() {
  const [menu, setMenu] = useState(true);
  const [choice, setChoice] = useState(0);
  const [total, setTotal] = useState(false);

  let appData = [
    {
      menuName: "Appetizer",
      menuItems: [
        {
          itemId: 1,
          itemPrice: "8",
          itemName: "Chopped Italian Salad",
          itemDescription: "Antipasto ingredients are sliced and mixed with the dressing ingredients in a bowl to make a tasty chopped salad."
        },
        {
          itemId: 2,
          itemPrice: "10",
          itemName: "Bruschetta",
          itemDescription: "Thick slices of bread grilled, rubbed with garlic, drizzled with olive oil, topped with tomatoes and herbs."
        },
        {
          itemId: 3,
          itemPrice: "8",
          itemName: "Fresh Mozarella",
          itemDescription: "Balsamic vinegar drenched mozarella cheese accompanied by baby tomatoes and oregano."
        }
      ]
    }
    ]
 let entrData = [
    {
      menuName: "Entrée",
      menuItems: [
        {
          itemId: 11,
          itemPrice: "17",
          itemName: "Lasagne",
          itemDescription: "Meat and cheese layered between house-made pasta with bell peppers and onions."
        },
        {
          itemId: 12,
          itemPrice: "13",
          itemName: "Cheese Ravioli",
          itemDescription: "Mozarella-stuffed thinly sliced sqaures of dough enveloped by a rich red sauce."
        },
        {
          itemId: 13,
          itemPrice: "16",
          itemName: "Chicken Parmesan",
          itemDescription: "Breaded chicken topped with marinara sauce and lots of cheese served over house made spaghetti."
        }
      ]
    }
  ]

  let desData = [
    {
      menuName: "Dessert",
      menuItems: [
        {
          itemId: 20,
          itemPrice: "12",
          itemName: "Chocolate Lava Cake",
          itemDescription: "Rich dark chocolate molten cake filled with dulce de leche and topped with a vanilla scoop of gelato."
        },
        {
          itemId: 21,
          itemPrice: "10",
          itemName: "Tiramisu",
          itemDescription: "Layers of espresso-soaked ladyfingers and marscarpone cream topped with cocoa and espresso powder."
        },
        {
          itemId: 22,
          itemPrice: "7",
          itemName: "Cannolis",
          itemDescription: "Three flaky pastries enclosing a rich, ricotta filling dotted with decadent chocolate chips."
        }
      ]
    }
    ]
  let bevData = [
    {
      menuName: "Beverage",
      menuItems: [
        {
          itemId: 30,
          itemPrice: "15",
          itemName: "Barolo",
          itemDescription: "A burst of flavor from northern Italian region of Piedmont. Rose petals, licorice, and cherries compose this drink."
        },
        {
          itemId: 30,
          itemPrice: "7",
          itemName: "Chinotto",
          itemDescription: "Refreshing yet bittersweet blend of herbal extracts and juice from the Chinotto fruit."
        },
        {
          itemId: 30,
          itemPrice: "5",
          itemName: "Cappuccino",
          itemDescription: "Steamed milk with two ristretto shots of espresso."
        }
      ]
    }
  ]

  return (
    <div className="App">
      {
        ( menu
          ?
            <>
              <h1>Menu</h1>
              <h3>━━━ Mario's Magnifico Ristorante ━━━</h3>
              <p>Please select a category to view our options:</p>
              <button onClick={() => {setMenu(false); setChoice(1); setTotal(false)}}> Appetizers </button>
              <br></br>
              <br></br>
              <button onClick={() => {setMenu(false); setChoice(2); setTotal(false)}}> Entrées </button>
              <br></br>
              <br></br>
              <button onClick={() => {setMenu(false); setChoice(3); setTotal(false)}}> Desserts </button>
              <br></br>
              <br></br>
              <button onClick={() => {setMenu(false); setChoice(4); setTotal(false)}}> Beverages </button>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
 
              <button onClick={() => {setMenu(false); setTotal(true)}}> Total </button>
            </>
          :
            <>
              {
                ( total
                  ?
                    <Total/>
                  :
                    <MenuChoices isChoice={choice} data1={appData} data2={entrData} data3={desData} data4={bevData}/>
                )
              }
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <button onClick={() => {setMenu(true)}}><b>Return</b></button> 
            </>
        )
      }
    </div>
  );
}


// total page
export function Total(props) {
  return (
    <ul class="receipt">
      Mario's Magnifico Ristorante
      <br></br>
      2222 Piazza Azzurro 
      <br></br>
      Tuscany, Italy 56010
      <br></br>
      222-222-2222
      <br></br>         
      --------------------------------------
      {/* call in user on click items here to display on receipt*/}

      
      {/* {props.menuItems.map(price => {
        return (
          <p key={price.appData.menuItems}> 
          {price.appData.menuItems} - {price.appData.menuItems} 
          </p>
        )  
      })} */}
      --------------------------------------
      <br></br>
      Total:
      {/* price here, find way to run math and count all number values */}
    </ul>
  );
}


// export function Profile() {
//   return (
//     <div class="j">
//     <form>
//     <label for="fname">First name:</label>
//     <input type="text" id="fname" name="fname" value="John">
//     <label for="lname">Last name:</label>
//     <input type="text" id="lname" name="lname" value="Doe">
//     <input type="submit" value="Submit">
//   </form> 
//   </div>
//   );
// }
