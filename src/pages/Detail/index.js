import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as MailComposer from 'expo-mail-composer';


import logoImg from '../../assets/logo.png';

import styles from './styles'

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Hi APAD, I am contacting you because I would like to help with the incident "Dog run over" with a amount of £ 20.00 pounds.'

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Hero of the case: Dog run over',
            recipients: ['hi@mhayk.com'],
            body: message
        })
    }

    function sendWhatsapp() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
            <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>INCIDENT:</Text>
                <Text style={styles.incidentValue}>The dog has ben run over.</Text>

                <Text style={styles.incidentProperty}>VALUE:</Text>
                <Text style={styles.incidentValue}>£ 120.00</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Save the day!</Text>
                <Text style={styles.heroTitle}>Be the hero for this issue.</Text>

                <Text style={styles.heroDescription}>Contact us:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity
                    style={styles.action}
                    onPress={() => {}}
                    >
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.action}
                    onPress={sendMail}
                    >
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}