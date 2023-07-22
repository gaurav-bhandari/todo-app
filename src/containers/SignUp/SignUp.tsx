import React, {useEffect, useState} from 'react';
import {ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';

import {styles} from '@src/containers/SignUp/styles';
import {AuthStackParamList} from '@src/navigation/types';
import {Text16, Text36} from '@src/components/CustomText';
import CustomTextInput from '@src/components/CustomTextInput';
import CustomButton from '@src/components/CustomButton';
import {colors, commonStyles, translation} from '@src/config';
import {useAppSelector, useAppDispatch} from '@src/redux/hooks';
import {clearPhoneState, phoneVerify} from '@src/redux/features/phoneSlice';

import SignUpBgImg from '@src/assets/images/sign-up-bg.png';

type NavigationProps = NativeStackNavigationProp<AuthStackParamList, 'SignUp'>;

const SignUp = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation<NavigationProps>();
  const dispatch = useAppDispatch();
  const phoneState = useAppSelector(state => state.phone);

  useEffect(() => {
    if (phoneState.isPhoneVerified) {
      navigation.navigate('Otp', {
        phoneNumber,
      });
      dispatch(clearPhoneState());
    }
  }, [dispatch, phoneNumber, phoneState, navigation]);

  return (
    <SafeAreaView style={commonStyles.flex1}>
      <LinearGradient
        colors={[colors.violetsAreBlue, colors.white]}
        locations={[0, 0.6198]}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={[commonStyles.flex1, commonStyles.jcfe]}>
        <Text36 type="B" color={colors.white} style={[commonStyles.ml36]}>
          {translation.signUp}
        </Text36>

        <ImageBackground
          source={SignUpBgImg}
          resizeMode="stretch"
          style={styles.signUpBg}>
          <CustomTextInput
            label={translation.phone}
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />

          <CustomButton
            title={translation.getOtp}
            onPress={() => {
              dispatch(phoneVerify({phoneNumber}));
            }}
            btnStyle={commonStyles.mt15}
            isLoading={phoneState.loading}
          />

          {phoneState?.error && <Text16>{phoneState.error}</Text16>}

          <Text16
            color={colors.lavenderBlue}
            type="SB"
            style={[commonStyles.mt34, commonStyles.textAlignCenter]}>
            {translation.termsAndConditions1}
            <Text16 color={colors.maximumBluePurple} type="B">
              {translation.termsAndConditions}
            </Text16>
            {translation.termsAndConditions2}
          </Text16>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignUp;
