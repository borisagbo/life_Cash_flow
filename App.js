import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Pressable } from 'react-native';
import MoneyManager from './assets/images/Manage-money.svg'
import { useFonts, Poppins_100Thin,Poppins_500Medium, Poppins_800ExtraBold} from "@expo-google-fonts/poppins";
import AppLoading from 'expo-app-loading';
export default function App() {
    let [fontsLoaded] = useFonts({
        Poppins_100Thin,
        Poppins_500Medium,
        Poppins_800ExtraBold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
  return (
    <View style={styles.container}>
      <View style={styles.designContainer}>
           <Image style={styles.img} source={require('./assets/images/Manage.png')} />

      </View>
         <View style={styles.startContainer}>
               <View style={styles.startContent}>

              <View style={styles.titleContainer}>
              <Text style={styles.startTitle}>Manage your money,</Text>
              <Text style={styles.startTitle}>Manage your life</Text>
              </View>
               <Text style={styles.startDescription}>The more your money work for you, the less you work for money</Text>
                   <Pressable style={styles.startButton}>
                       <Text style={styles.startButtonText}>Start</Text>
                   </Pressable>
               </View>
          </ View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#B561FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  designContainer: {
      width: '100%',
      position: 'relative',
    flex: 1,

  },
  startContainer: {
     width: '100%',
    flex: 1,
  },
  img: {
      position: 'absolute',
      bottom:-50,
      height: "100%",
      width: "100%",
  },
    startContent: {
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: '#d81a1a',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        marginTop:5,
        paddingTop:10,
        paddingBottom:10,
        height: '100%',
        backgroundColor: '#ffffff',

    },
    titleContainer: {
        alignItems: 'center',
    },
    startTitle: {
/*
      fontWeight: 'bold',
*/
        fontSize: 30,
        fontFamily:'Poppins_800ExtraBold'

    },
    startDescription: {
      fontSize: 25,
        textAlign: 'center',
        fontFamily:'Poppins_100Thin'

    },
    startButton: {
        shadowColor: "#B561FB",
        shadowOffset: {
            width: 2,
            height: 7,
        },
        shadowOpacity: 0.9,
        shadowRadius: 4.65,

        elevation: 6,
        backgroundColor: '#B561FB',

        borderRadius:50,
       paddingVertical:10,
        paddingHorizontal:35


    },
    startButtonText: {
      color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18,
    },
    firstRounder:{
      position:'absolute',
      backgroundColor: '#ba1818',
        right: 10,
        top: 10,
        height: 100,
        width: 100,
        borderRadius:100,
    },
    firstRounder1:{
        position:'absolute',
        backgroundColor: '#ba1818',
        right: 20,
        top: 20,
        height: 50,
        width: 50,
        borderRadius:100,
    }
});
