import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import CommentsScreen from "./CommentsScreen";
import MapScreen from "./MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
    <NestedScreen.Screen
        options={{
          headerShown: false,
        }}
      name="Home"
      component={Home}
    />
    <NestedScreen.Screen name="CommentsScreen" component={CommentsScreen} />
    <NestedScreen.Screen name="MapScreen" component={MapScreen} />
  </NestedScreen.Navigator>    
  );
};

export default PostsScreen;