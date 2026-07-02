import { View, Text, StyleSheet } from 'react-native';

export default function MainScreen () {
  return (
    <View style={style.tela}>

    <View style={style.title}>
      <View style={style.header}>
        <Text style={style.organStudy}>
          OrganStudy
        </Text>
        <View style={style.iconsHomeUp}>
        <Text>🔔</Text>
        <Text>⚙️</Text>
        </View>

        </View>
      <View>
      <Text style={style.salutation}>
      BEM VINDO
      </Text>
      <Text style={style.salutation2}>
      Bom dia, 
      </Text>
      </View>
      <Text style={style.subjects}>
        Matérias
      </Text>
      

    </View>

  
   



    </View>
  )
}

const style = StyleSheet.create({
  tela: {
    backgroundColor: '#5A5C70',
    flex: 1,
  },
  title: {
    paddingHorizontal: 20,
    paddingTop: 40,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  iconsHomeUp:{
    flexDirection: 'row',
    
  },
  salutation: {
    color: '#D1D1D6',
    fontFamily: 'sans-serif-medium',
    marginTop: 15,
    fontSize: 12,


  },
  salutation2: {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 20,

  },
  organStudy: {
    color: '#E05A5A',
    fontFamily: 'Poppins',
    fontSize: 20,
  },
  subjects: {
     color: '#E05A5A',
     fontFamily: 'sans-serif-medium',
     fontWeight: 'bold',
     marginTop: 5,

  },


}

)