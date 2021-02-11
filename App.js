/* Import de React */
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Image, Button, Alert, Text, View } from 'react-native';
/* Modules de ReactNavigation */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/* Pages */ 
import Rechercher from './pages/Rechercher';
import Accueil from './pages/Accueil';
import Bibliotheque from './pages/Bibliotheque';
/* Import d'icons */
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>                
                
                <Tab.Screen 
                name="Accueil" 
                component={Accueil} 
                options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={24} color="black" />
                    ),
                  }}/>                    
                <Tab.Screen 
                name="Rechercher" 
                component={Rechercher} 
                options={{
                    tabBarLabel: 'Rechercher',
                    tabBarIcon: ({ color, size }) => (
                        <EvilIcons name="search" size={24} color="black" />
                    ),
                  }}/>               
                <Tab.Screen 
                name="Bibliotheque" 
                component={Bibliotheque} 
                options={{
                    tabBarLabel: 'Bibliothèque',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="home" size={24} color="black" />
                    ),
                  }}/>
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}


const style = StyleSheet.create({
    home: {
      flexDirection: 'column'
    },

  });