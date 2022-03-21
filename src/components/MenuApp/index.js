// import MenuItem from '../MenuItem'
import Menu from "../Menu"
import React from "react"

function MenuApp(props) {

    let menuElements = props.data.map((mi) => <Menu {...mi}></Menu>)
    return (
        <div className="App">
            {menuElements}
        </div>
    )
}

export default MenuApp