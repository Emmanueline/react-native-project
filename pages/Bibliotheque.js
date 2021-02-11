import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Image, Button, Alert, Text, View } from 'react-native';

export default function Bibliotheque () {

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
        source={require('../assets/couverture-album-nekfeu.png')}
      />
      <View style={styles.helloContainer}>
        <Text style={styles.h1}>Les étoiles vagabondes : expansion</Text>
        {/* Homemade Avatar ;) */}
            <Image
              style={styles.avatar}
              source={require('../assets/nekfeu.jpg')}
            />
        <Text style={styles.h1}>Nekfeu</Text>
        <Text style={styles.h1}>Album • Année</Text>

        <View style={styles.buttonsBloc}>
                <Image
                    style={styles.icon}
                    source={{uri:'https://www.flaticon.com/svg/vstatic/svg/3141/3141735.svg?token=exp=1612968947~hmac=62b0e6b6873fc8869aa02015e55a95f4',}}
                />
                <Image
                    style={styles.icon}
                    source={{uri:'https://www.flaticon.com/svg/vstatic/svg/159/159694.svg?token=exp=1612969150~hmac=e9a1cae44ec139f056a980047bf1f491',}}
                />
            <View style={styles.flex}>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
            </View>
            </View>

        {/*
       Pour la fonction onPress du bouton il faut ajouter 
        une fonction dans le code de App.js 
      */}
      <Button
        //onPress={() => Alert.alert('HELLO SPOTIFY')}
        onPress={onPressLearnMore}
        title="Lecture Aléatoire"
        color="#1DB954"
        accessibilityLabel="Lecture Aléatoire"
      />

        <View style={styles.buttonsPlay}>
                <Image
                    style={styles.icon}
                    source={{uri:'https://www.flaticon.com/svg/vstatic/svg/122/122341.svg?token=exp=1612973608~hmac=ac98fcfe29cc3113d9221a59a77a68ad',}}
                />
                <Image
                    style={styles.icon}
                    source={{uri:'https://www.flaticon.com/premium-icon/icons/svg/3168/3168015.svg',}}
                />
        </View>

        <View>
            <Text style={styles.h1}>Les étoiles vagabondes</Text>
            <Text style={styles.h2}>Nekfeu</Text>
            <Text style={styles.h1}>Alunissons</Text>
            <Text style={styles.h2}>Nekfeu</Text>
            <Text style={styles.h1}>Cheum</Text>
            <Text style={styles.h2}>Nekfeu</Text>
            <Text style={styles.h1}>Natsukashii</Text>
            <Text style={styles.h2}>Nekfeu</Text>
        </View>
       

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 230,
    height: 230,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: '50%'
  },
  helloContainer: {
    margin: 20,
  },
  h1: {
    fontWeight: 'bold',
    paddingBottom: 10
  },
  buttonsBloc: {
    display:'flex',
      flexDirection: 'row',
     padding: 16,
  },
  button: {
    paddingVertical: 5,
      paddingHorizontal:7,
      borderWidth:1,
      borderColor: '#818181',
      borderRadius:5,
      marginRight:10,
  },
  flex: {
    display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
  },
  dot: {
    backgroundColor: '#d8d8d8',
    width: 2,
    height: 2,
    borderRadius: 12,
    marginHorizontal: 4,
    marginVertical:8,
},
  icon: {
    width:20,
      height:20,
  }
});