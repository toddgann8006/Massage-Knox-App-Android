import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, Linking, TouchableOpacity, Modal, Button, TextInput, Alert } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { postEmail } from "../redux/ActionCreators";

const mapStateToProps = state => {
    return {
        email: state.email
    };
};

const mapDispatchToProps = {
    postEmail: (email) => (postEmail(email))
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: true,
            email: ""
        }
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    handleEmail() {
        const email = this.state.email
        this.props.postEmail(email)
        this.toggleModal()
    }

    render() {
        return (
            <ScrollView style={styles.container}
                keyboardShouldPersistTaps='handled'
            >
                <Image
                    source={require('./images/logo.png')}
                    resizeMode='contain'
                    style={styles.image} />
                <Text
                    style={{ fontSize: 25, color: 'white', textAlign: 'center' }}
                >
                    located inside Nourish Skin Studio
                </Text>
                <Text style={styles.address}>
                    110 Westfield Road Suite 1
                </Text>
                <Text style={styles.address}>
                    Knoxville, TN 37919
                </Text>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('./images/headshot.jpg')}
                        style={styles.headshot}
                    />
                </View>
                <Text style={styles.lmt}>
                    Shannon Cox, Licensed Massage Therapist
                </Text>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('mailto:shannoncox@massageknox.com')}
                        style={styles.button}
                    >
                        <Text>Email</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.covid}>
                    <Text>
                        Due to Covid 19 the lobby is closed and we are open by appointment only.
                    </Text>
                    <Text>
                        Upon arrival, please wait in your vehicle.
                    </Text>
                </Text>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.facebook.com/massageknox/?ref=py_c')}
                        style={styles.button}
                    >
                        <Text>Find Me On Facebook</Text>
                    </TouchableOpacity>
                </View>
                <Text
                    style={{ fontSize: 20, color: 'yellow', marginTop: 25 }}>
                    Hours of availability:
                </Text>
                <Text style={styles.hours}>
                    Tuesday: 10-2
                </Text>
                <Text style={styles.hours}>
                    Wednesday: 10-5
                </Text>
                <Text style={styles.hours}>
                    Thursday: 10-6
                </Text>
                <Text style={styles.hours}>
                    Friday: 10-6
                </Text>
                <Text style={styles.hours}>
                    Saturday: 10-6
                </Text>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.showModal}
                    onRequestClose={() => this.toggleModal()}
                >
                    <View style={styles.modal}>
                        <Text>Hello World!</Text>
                        <TextInput
                            style={{ height: 80, fontSize: 20 }}
                            value={this.state.email}
                            onChangeText={(email) =>
                                this.setState({ email: email })
                            }
                            ref={input => { this.textInput = input }}
                            returnKeyType="go"
                        />
                        <Button
                            onPress={() => {
                                Alert.alert(
                                    "Thanks For Registering",
                                    "Start Earning Rewards Now",
                                    [
                                        {
                                            text: 'OK',
                                            onPress: () => this.handleEmail()
                                        },
                                    ],
                                    { cancelable: false }
                                );
                            }}
                            color='#5637DD'
                            title='Register'
                        />
                    </View>
                </Modal>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: 0
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    headshot: {
        width: '50%',
        height: undefined,
        aspectRatio: 1,
        marginTop: 50
    },
    address: {
        color: 'white',
        textAlign: 'center',
        marginTop: 25,
        fontSize: 15
    },
    hours: {
        color: 'yellow',
        marginTop: 25,
        fontSize: 15
    },
    button: {
        backgroundColor: 'yellow',
        color: 'black',
        width: '50%',
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    lmt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 10,
        marginTop: 10
    },
    covid: {
        color: 'white',
        fontSize: 12,
        marginVertical: 30
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#5637DD',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);