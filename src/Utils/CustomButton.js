import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./Styles";

const MashButton = (props) => {
    return (
        <Pressable
            onLongPress={props.onPressHandler}
            delayLongPress={500}
            hitSlop= {{bottom: 10, left: 10, right: 10, top: 10}}
            android_ripple={{color: '#00f'}}
            style = {({pressed}) => [
            {backgroundColor: pressed? '#ffff': props.color},
            styles.button,
            {...props.style}
            ]}
        >
            <Text style = {styles.text}>
            {props.title}
            </Text>
        </Pressable>

    );
}
export default MashButton;