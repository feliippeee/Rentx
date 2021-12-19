import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar, useWindowDimensions } from 'react-native';
import { CarDTO } from '../../dtos/CarDTO';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import { ConfirmButton } from '../../components/ConfirmButton';

import { 
    Container,
    Content,
    Title,
    Message,
    Footer,
 } from './styles';

 interface Params {
    car: CarDTO;
}

export function SchedulingComplete() {
    const { width } = useWindowDimensions();
    const navigation = useNavigation();
    const route = useRoute();
    function handleConfirm() {
        navigation.navigate('Home')
    }
    return (
        <Container>
            <StatusBar 
                barStyle='light-content'
                translucent
                backgroundColor='transparent'
            />
            <LogoSvg width={width}/>

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Carro alugado</Title>

                <Message>
                    Agora você só precisa ir {'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar o seu automóvel.
                </Message>
            </Content>

            <Footer>
                <ConfirmButton title="Ok" 
                    onPress={handleConfirm}
                />
            </Footer>
        </Container>
    )
}