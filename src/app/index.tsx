import React from 'react';
import { Container, Head, HeadImage, MidTitle, MiddleText } from '../styles/HomeStyles';
import HomeImageHeader from '../../assets/images/notebook-1.jpg'
import { GetStartedButton } from '../components/button';
import { router } from 'expo-router';
import { useFonts } from 'expo-font';




const Index = () => {

  const [fontsLoaded] = useFonts({
    'Inter-Regular': require('../../assets/font/Inter_18pt-Regular.ttf'),
    'Inter-Bold': require('../../assets/font/Inter_18pt-Bold.ttf'),
    'Inter-SemiBold': require('../../assets/font/Inter_18pt-SemiBold.ttf'),
    'Inter-ExtraBold': require('../../assets/font/Inter_18pt-ExtraBold.ttf'),
    'Inter-Medium': require('../../assets/font/Inter_18pt-Medium.ttf'),
    'Inter-Light': require('../../assets/font/Inter_18pt-Light.ttf'),
    'Inter-ExtraLight': require('../../assets/font/Inter_18pt-ExtraLight.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

    function handleGetStarted() {
        router.navigate('/mainScreen')
    }
  return (
    <Container>
      <Head>
        <HeadImage source={HomeImageHeader} />
      </Head>

      <MidTitle>
        <MiddleText marginTop={-60} fontFamily="Inter-Bold" color="#fff">Shopping</MiddleText>
        <MiddleText marginTop={10} color="#000" fontFamily="Inter-SemiBold">Royal</MiddleText>
        <MiddleText marginTop={1} color="#000" fontSize={20} fontFamily="Inter-Regular">
          The best shopping for your electronics
        </MiddleText>
      </MidTitle>

      <MiddleText color="#000" fontSize={16} fontFamily="Inter-Regular">
        Hi there! Welcome to our shopping app! We're excited to have you here.
        Whether you're looking for the latest trends or the perfect gift, we've got you covered.
        Happy shopping!
      </MiddleText>

      <GetStartedButton style={{ marginTop: 100, width: 300 }} title="Get Start!"
        onPress={handleGetStarted}
/>

    </Container>
  );
};

export default Index;