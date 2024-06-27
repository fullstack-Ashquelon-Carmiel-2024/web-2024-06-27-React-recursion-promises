// MISSION:
// 1. At CounterButton get "increment" prop 
//    and write the value on the button
// 2. Turn sum to state
// 3. Create function addIncrement that will get num 
//    and add it to the sum  (use setSum)
// 4. Pass addIncrement function to CounterButton 
//    as a prop
//    and use it at CounterButton onClick

// HW MISSION:
// 1. Create state "currentColor" for the component App
// 2. Create function changeColor that gets color 
//    and changes the state to this new color
// 3. Pass this function to each ColoredButton
// 4. Make ColoredButtons to run changeColor onClick
// 5. At App pass currentColor to each CounterButton
// 6. At CounterButton use the prop of the color 
//     as additional className
// 7. Now when you click some ColoredButton, all
//    the counter buttons become colored by it's color

// HW MISSION2:
// 1. Create state "order"(הזמנה) for the component App.
//    It's a string
// 2. The purpose of the next actions is to show
//    the order(הזמנה) at <p className="second result">{`ORDER:`}</p>
//    in the next way: when the user clicks the food name
//    is being added to the list. For example, if he clicked
//    "lemonade","lemonade","malawach","masbacha","lemonade","malawach",
//    we should see 
//    ORDER:
//    lemonade
//    lemonade
//    malawach
//    masbacha
//    lemonade
//    malawach

//   Try to perform this by yourself, without looking at the next steps

// 3. Use the state "order" to show the order at
//    <p className="second result">{`ORDER:`}</p>
// 4. Create function addFood() that gets food name 
//    and changes the state so this new food will be added
//    to the "order" after the new line "\n"
// 5. Pass this function to each MenuButton
// 6. Make MenuButtons to run addFood onClick

import { useState } from 'react';

function CounterButton({increment, add}) {

  return (
    <button className="btn " onClick={() => {add(increment)}} >
                +{increment}
    </button>
  )

}

function ColoredButton({myColor}) {

  return <button className={"btn size "+myColor}  >
                  {myColor}
        </button>
}

function MenuButton({food, handleClick}) {

  return <button className={"btn size"}
                 onClick={() => handleClick(food)}>
    {food}
  </button>
}


function App() {

  const [ sum, setSum ] = useState(0);
  const [ orderObj, setOrderObj ] = useState({});
  
  function addIncrement(num) {

    // sum += num; we should not do this,
    //    as we should not MUTATE the state
    setSum(sum + num);

  }

  /**
   * { limonana: 4,
   *   malawach: 3
   * }
   * let foodName = 'malawach'
   * orderObj.malawach
   * orderObj[foodName]
   */

  function orderFood(food) {

    setOrderObj({...orderObj, [food]: orderObj[food] ? orderObj[food]+1 : 1})
    console.log(`Inside the function "orderFood":\n`,orderObj);
    
  }
  
  console.log(`Before "return":\n`,orderObj);

  //console.log(Object.entries(orderObj))
  // elNum0 = ['majadra',6], elNum1 = ['limonana',4] 
  let showOrderObj = Object.entries(orderObj).map(el => `${el[0]}: ${el[1]}`)
                                  .join('\n');

  return (
    <div className="App">
    <div className="first">
        
        <CounterButton increment={1} add={addIncrement} />
        <CounterButton increment={10} add={addIncrement} />
        <CounterButton increment={100} add={addIncrement} />
        <CounterButton increment={1000} add={addIncrement} />
        <span className="result">{sum}</span>
        <div>
          <MenuButton food="limonana" handleClick={orderFood} />
          <MenuButton food="masbacha" handleClick={orderFood} />
          <MenuButton food="madjadra" handleClick={orderFood} />
          <MenuButton food="malawach" handleClick={orderFood} />
        </div>
        <div>
        
          <ColoredButton myColor="red" />
          <ColoredButton myColor="blue" />
          <ColoredButton myColor="green" />
          <ColoredButton myColor="orange" />
        </div>
      </div>
      <p className="second result">{`ORDER:`}</p>
      <p className="third result">
        {`CHALLENGE\nORDER:\n${showOrderObj}`}
      </p>
</div>
  );
}

export default App;
