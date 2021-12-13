import React from 'react';
import { Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerarionSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import { 
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Descriptions,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Acessories,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function SchedulingDetails() {
    const theme = useTheme();

    const navigation = useNavigation();

    function handleConfirmRental() {
        navigation.navigate('SchedulingComplete')
    }
    return (
        <Container>
            <Header>
                <BackButton onPress={() => {}} />
            </Header>
        <CarImages>
            <ImageSlider imagesUrl={['https://cdn.picpng.com/audi/audi-face-28582.png']} />
        </CarImages>

        <Content>
            <Details>
                <Descriptions>
                    <Brand>Lamborghini</Brand>
                    <Name>Muracan</Name>
                </Descriptions>

                <Rent>
                    <Period>Ao dia</Period>
                    <Price>R$ 500</Price>
                </Rent>
            </Details>
            <Acessories>
                <Accessory name="380km/h" icon={speedSvg} />
                <Accessory name="3.2s" icon={accelerarionSvg} />
                <Accessory name="DDD HP" icon={forceSvg} />
                <Accessory name="Gasoline" icon={gasolineSvg} />
                <Accessory name="Auto" icon={exchangeSvg} />
                <Accessory name="5 pessoas" icon={peopleSvg} />
            </Acessories>
        <RentalPeriod>
            <CalendarIcon>
                <Feather
                    name="calendar"
                    size={RFValue(24)}
                    color={theme.colors.shape}
                />
            </CalendarIcon>

            <DateInfo>
                <DateTitle>De</DateTitle>
                <DateValue>18/06/2021</DateValue>
            </DateInfo>
                <Feather
                    name="chevron-right"
                    size={RFValue(24)}
                    color={theme.colors.shape}
                />
            <DateInfo>
                <DateTitle>Até</DateTitle>
                <DateValue>18/06/2021</DateValue>
            </DateInfo>
        </RentalPeriod>
           <RentalPrice>
               <RentalPriceLabel>Total</RentalPriceLabel>
               <RentalPriceDetails>
                   <RentalPriceQuota>R$ 500 x 3 diárias</RentalPriceQuota>
                   <RentalPriceTotal>R$ 1.500</RentalPriceTotal>
               </RentalPriceDetails>
           </RentalPrice>
        </Content>
        <Footer>
            <Button 
                title="Alugar agora"
                color={theme.colors.success}
                onPress={handleConfirmRental} />
        </Footer>
        </Container>
    )
}