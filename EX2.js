import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Image, Button, Alert, Text, View } from 'react-native';

export default function App() {

  function onPressLearnMore(){
    console.log('')
  }
    {/* La scrollview permet de rajouter un overflow scroll si le contenu dépasse de l'écran */}
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.h1}>Exercice 1</Text>

      <View style={styles.helloParent}>
        <View style={styles.helloContainer}>
          <Text style={styles.h2}>Mon Titre</Text>
          </View>
          <View style={styles.helloContainer}>
          <Text style={styles.helloText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tortor in turpis sagittis molestie. Phasellus sagittis leo nisl, in maximus purus elementum vel. Vestibulum sodales metus dictum erat fringilla egestas. Nunc ex orci, placerat at posuere quis, hendrerit non libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet massa leo. Aliquam sem ligula, porta in dolor sed, laoreet porttitor sapien. Etiam elit nisl, tempus non libero quis, aliquam rutrum sapien. Cras eu volutpat velit. Integer aliquam tincidunt sagittis. </Text>
        </View>
      </View>

      <View style={styles.helloParent}>
        <View style={styles.helloContainer}>
          <Text style={styles.h2}>Mon Titre</Text>
          </View>
          <View style={styles.helloContainer}>
          <Text style={styles.helloText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tortor in turpis sagittis molestie. Phasellus sagittis leo nisl, in maximus purus elementum vel. Vestibulum sodales metus dictum erat fringilla egestas. Nunc ex orci, placerat at posuere quis, hendrerit non libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet massa leo. Aliquam sem ligula, porta in dolor sed, laoreet porttitor sapien. Etiam elit nisl, tempus non libero quis, aliquam rutrum sapien. Cras eu volutpat velit. Integer aliquam tincidunt sagittis. </Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  h1 : {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  helloParent: {
    flexDirection: 'column'
  },
  helloContainer: {
    height: 120,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  h2 : {
    fontSize: 15,
    paddingTop: 40,
    marginLeft: -257,
  },
  helloText : {
    fontSize: 10,        
    borderTopColor: 'black',
    borderTopWidth: 1,
    paddingTop: 30,
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
});