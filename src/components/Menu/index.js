import React from 'react'
import MenuItem from "../MenuItem"

// Classical Component
// accepts the individual menu object in the array (Dinner, Dessert). The menuItems property will be assigned an array of menu items
export default class Menu extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.menuName}s</h1>
                {this.props.menuItems.map((elem) =>{
                    return (
                        <MenuItem {...elem}></MenuItem>
                    )
                })}

            </div>
        )
    }
}


