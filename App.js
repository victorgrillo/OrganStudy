import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, SIZES, FONTS  } from './theme';

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

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={style.addSubjectCards}>
        <Text>Nova Matéria</Text>
        </View>
        
      
      
      </ScrollView>
      

    </View>

  
   



    </View>
  )
}

const style = StyleSheet.create({
  tela: {
    backgroundColor: COLORS.background,
    flex: 1,
  },
  title: {
    paddingHorizontal: SIZES.padding,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconsHomeUp: {
    flexDirection: 'row',
  },
  salutation: {
    color: COLORS.textMuted,
    fontFamily: FONTS.body,
    marginTop: SIZES.base * 2, 
    fontSize: SIZES.small,
  },
  salutation2: {
    color: COLORS.textMain,
    fontFamily: FONTS.title,
    marginTop: SIZES.base / 2, 
    fontWeight: 'bold',
    fontSize: SIZES.fontTitle,
  },
  organStudy: {
    color: COLORS.primary,
    fontFamily: FONTS.title,
    fontSize: SIZES.fontTitle,
  },
  subjects: {
    color: COLORS.primary,
    fontFamily: FONTS.body,
    fontWeight: 'bold',
    marginTop: SIZES.base,
  },
  addSubjectCards: {
    height: 160,
    width: 140,
    marginTop: SIZES.base + 2, 
    borderRadius: SIZES.radiusCard,
    borderWidth: 2,
    borderStyle: 'dashed', 
    borderColor: COLORS.textMuted,
    justifyContent: 'center',
    alignItems: 'center',
  }
});