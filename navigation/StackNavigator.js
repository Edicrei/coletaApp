import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Information from "../screens/Information";
import About from "../screens/About";
import Contact from "../screens/Contact";
import End from "../screens/EndScene";
import End1 from "../screens/EndScene1";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerLeft:()=>{
              return null;
            },
            headerTitle: () =>{
              return null
            },
            header:()=>{
              return null
            },

          }}
          
          />

    <Stack.Screen 
          name="Information" 
          component={Information} 
          options={{
            headerLeft:()=>{
              return null;
            },
            headerTitle: () =>{
              return null
            },
            header:()=>{
              return null
            },

          }}
          
          />

<Stack.Screen name="End1" 
      component={End1}
      options={{
        headerLeft:()=>{
          return null;
        },
        headerTitle: () =>{
          return null
        },
        header:()=>{
          return null
        },

      }}
      
      
      
      
      />
  
      
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Contact" 
      component={Contact}
      options={{
        headerLeft:()=>{
          return null;
        },
        headerTitle: () =>{
          return null
        },
        header:()=>{
          return null
        },
        

      }}
      
      
      
      
      />

<Stack.Screen name="End" 
      component={End}
      options={{
        headerLeft:()=>{
          return null;
        },
        headerTitle: () =>{
          return null
        },
        header:()=>{
          return null
        },

      }}
      
      
      
      
      />
    </Stack.Navigator>
  );
};

const RegisterStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="About" 
       component={About} 
       options={{
        headerLeft:()=>{
          return null;
        },
        headerTitle: () =>{
          return null
        },
        header:()=>{
          return null
        },

      }}
      
       
       />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ContactStackNavigator, RegisterStackNavigator};