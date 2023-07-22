import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {useNavigation} from '@react-navigation/native';
// import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from '@src/containers/CreateTask/styles';
//import {useAppDispatch, useAppSelector} from '@src/redux/hooks';
import {Text24, Text32} from '@src/components/CustomText';
import {colors, commonStyles, translation} from '@src/config';
//import {MainStackParamList} from '@src/navigation/types';
import CustomButton from '@src/components/CustomButton';

import HomeBgImg from '@src/assets/images/home-bg.png';
import ProfilePicture from '@src/assets/images/profile-picture.png';
import Peep from '@src/assets/images/peep.png';

//type NavigationProps = NativeStackNavigationProp<MainStackParamList, 'Home'>;

const CreateTask = () => {
  //const dispatch = useAppDispatch();
  //const taskState = useAppSelector(state => state.task);
  //const navigation = useNavigation<NavigationProps>();

  return (
    <SafeAreaView style={commonStyles.flex1}>
      <LinearGradient
        colors={[colors.violetsAreBlue, colors.white]}
        locations={[0, 0.4948]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={[commonStyles.flex1, commonStyles.jcfe]}>
        <View style={[commonStyles.row, commonStyles.mb40]}>
          <Image
            source={ProfilePicture}
            resizeMode="contain"
            style={styles.profilePicture}
          />

          <Text32 type="B" color={colors.white} style={[commonStyles.ml21]}>
            {translation.newTask}
          </Text32>
        </View>

        <ImageBackground
          source={HomeBgImg}
          resizeMode="stretch"
          style={styles.homeBg}>
          {/*TODO: Use Radiant Gradient Here */}
          <CustomButton
            title={translation.create}
            onPress={() => {}}
            btnStyle={{...commonStyles.mt34, ...styles.btnStyle}}
          />

          <Image source={Peep} resizeMode="contain" style={styles.peep} />

          <Text24
            type="SB"
            color={colors.lightSilver}
            style={commonStyles.textAlignCenter}>
            {translation.createATask}
          </Text24>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default CreateTask;
