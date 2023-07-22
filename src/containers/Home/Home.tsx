import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import {LineChart} from 'react-native-chart-kit';

import {styles} from '@src/containers/Home/styles';
import {useAppDispatch, useAppSelector} from '@src/redux/hooks';
import {Text32} from '@src/components/CustomText';
import {colors, commonStyles, normalize, translation} from '@src/config';
import {MainStackParamList} from '@src/navigation/types';
import CustomButton from '@src/components/CustomButton';
import CustomTaskCard from '@src/components/CustomTaskCard';
import {getAllTasks, updateTask} from '@src/redux/features/taskSlice';

import HomeBgImg from '@src/assets/images/home-bg.png';
import ProfilePicture from '@src/assets/images/profile-picture.png';

type NavigationProps = NativeStackNavigationProp<MainStackParamList, 'Home'>;

const Home = () => {
  const [openCardIndex, setOpenCardIndex] = useState<null | number>(null);
  const [bgColorStatus, setBgColorStatus] = useState<
    'completed' | 'pending' | 'active'
  >('pending');
  const dispatch = useAppDispatch();
  const taskState = useAppSelector(state => state.task);
  const navigation = useNavigation<NavigationProps>();

  useEffect(() => {
    dispatch(getAllTasks({phoneNumber: '919479789211'}));
  }, [dispatch]);

  useEffect(() => {
    if (
      taskState.taskList.length &&
      taskState.taskList.every(eachTask => eachTask.status === 'completed')
    ) {
      setBgColorStatus('completed');
    } else if (
      taskState.taskList.length &&
      taskState.taskList.every(eachTask => eachTask.status === 'active')
    ) {
      setBgColorStatus('active');
    }
  }, [taskState.taskList]);

  const onCompletePress = (uniqueLink: string, status: string) => {
    dispatch(updateTask({phoneNumber: '+919479789211', uniqueLink, status}));
  };

  return (
    <SafeAreaView style={commonStyles.flex1}>
      <LinearGradient
        colors={[
          bgColorStatus === 'completed'
            ? colors.persianGreen
            : bgColorStatus === 'pending'
            ? colors.beer
            : colors.redPigment,
          colors.white,
        ]}
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
            {translation.home}
          </Text32>
        </View>

        <ImageBackground
          source={HomeBgImg}
          resizeMode="stretch"
          style={styles.homeBg}>
          {/*TODO: Use Radiant Gradient Here */}
          <CustomButton
            title={translation.create}
            onPress={() => {
              navigation.navigate('CreateTask');
            }}
            btnStyle={{...commonStyles.mt34, ...styles.btnStyle}}
          />

          <LineChart
            data={{
              labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
              datasets: [
                {
                  data: [
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 100),
                    Math.ceil(Math.random() * 100),
                  ],
                },
              ],
            }}
            width={Dimensions.get('window').width - 44} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              backgroundColor: colors.white,
              backgroundGradientFrom: colors.white,
              backgroundGradientTo: colors.white,
              decimalPlaces: 2, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '6',
                strokeWidth: '2',
                stroke: '#ffa726',
              },
              propsForBackgroundLines: {
                color: '#0E9CFF',
              },
            }}
            bezier
            withDots={false}
            withVerticalLines={false}
            style={{
              marginTop: normalize(34),
              marginBottom: normalize(20),
              borderRadius: 16,
            }}
          />

          <FlatList
            style={styles.flatListStyle}
            extraData={taskState.taskList}
            data={taskState.taskList}
            keyExtractor={(item, index) => `${item.uniquelink}-${index}`}
            renderItem={({item, index}) => (
              <CustomTaskCard
                title={item.name}
                time={item.expiry_date}
                details={item.details}
                onCardPress={() => {
                  setOpenCardIndex(e => (e === index ? null : index));
                }}
                onCompletePress={() =>
                  onCompletePress(item.uniquelink, item.status)
                }
                isCardOpened={index === openCardIndex}
              />
            )}
          />
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;
