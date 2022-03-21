import React, { useState} from "react"

 function MenuItem(props) {
    const [counter, setCounter] = useState(0);
    const [disable, setDisable] = useState(true);
        // classes require two things: render and constructors however we skip using constructors in this lab because we are not initializing any values or state or performing any set of actions
        // responsible for how the items are getting displayed on the screen
        return (
            <>
            <div class="menu-item" id={`menu-item-${props.itemId}`}>
                <h2>{props.itemName}</h2>
                <p>{props.itemDescription}</p>
                <p>| ${props.itemPrice} |</p>
                <button onClick={() => {setCounter(counter + 1); setDisable(false)}}>Add to Cart</button>
                {( disable 
                    ?
                    <button disabled = {true} onClick={() => {setCounter(counter - 1)}}>Remove from Cart</button>
                    :
                    <>
                    {( counter > 0
                        ?
                        <button onClick={() => {setCounter(counter - 1)}}>Remove from Cart</button>
                        :
                        <button disabled = {true} onClick={() => {setCounter(counter - 1)}}>Remove from Cart</button>
                    )}
                    </>
                )}
            </div>
            <p>Amount in cart: {counter}<br></br></p>
            </>
        )
    
}

export default MenuItem;
