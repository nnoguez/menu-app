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
import * as React from "react";
import { Card } from "react-native-elements";
import { View, Image } from "react-native";

export default () => {
  return (
    <Card containerStyle={{}} wrapperStyle={{}}>
      <Card.Title>CARD WITH DIVIDER</Card.Title>
      <Card.Divider />
      <View
        style={{
          position: "relative",
          alignItems: "center"
        }}
      >
        <Image
          style={{ width: "100%", height: 100 }}
          resizeMode="contain"
          source={{
            uri:
              "https://avatars0.githubusercontent.com/u/32242596?s=460&u=1ea285743fc4b083f95d6ee0be2e7bb8dcfc676e&v=4"
          }}
        />
        <Text>Pranshu Chittora</Text>
      </View>
    </Card>
  );
}

