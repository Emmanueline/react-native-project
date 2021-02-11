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

      {/* Ne pas oublier d'importer Image en haut ;) */}
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://thealmanian.com/wp-content/uploads/2019/01/product_image_thumbnail_placeholder.png',
        }}
      />
      <View style={styles.helloContainer}>
        <Text style={styles.h1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text style={styles.h2}>by Sarah Town</Text>
        <Text style={styles.helloText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tortor in turpis sagittis molestie. Phasellus sagittis leo nisl, in maximus purus elementum vel. Vestibulum sodales metus dictum erat fringilla egestas. Nunc ex orci, placerat at posuere quis, hendrerit non libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sit amet massa leo. Aliquam sem ligula, porta in dolor sed, laoreet porttitor sapien. Etiam elit nisl, tempus non libero quis, aliquam rutrum sapien. Cras eu volutpat velit. Integer aliquam tincidunt sagittis. </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 360,
    height: 360,
  },
  helloContainer: {
    margin: 20,
  },
  h1: {
    fontWeight: 'bold',
    paddingBottom: 10
  }
});