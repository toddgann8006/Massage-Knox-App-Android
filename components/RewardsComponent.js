import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        reward: state.reward,
        newuser: state.newuser
    };
};

class Rewards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        const newuser = this.props.newuser.newuser.map(newuser => {
            return (

                <Icon
                    name='heart'
                    type='font-awesome'
                    color='#5637DD'
                    raised
                    reverse
                    key={this.props.newuser.newuser.indexOf(newuser)}
                />

            )
        })
        const reward = this.props.reward.rewards.map(reward => {
            return (

                <Icon
                    name='heart'
                    type='font-awesome'
                    color='#5637DD'
                    raised
                    reverse
                    key={this.props.reward.rewards.indexOf(reward)}
                />

            )
        })
        let view
        if (newuser.length < 1) {
            view =
                <View style={styles.container}>
                    <Image
                        source={require('./images/logo.png')}
                        resizeMode='contain'
                        style={styles.image} />
                    <Text style={styles.text}>
                        Thanks for downloading the app. Enjoy 20% off of your visit today.
                    </Text>
                    <View style={styles.icon}>
                        {newuser}
                    </View>
                    <View style={styles.bottomView}>
                        <TouchableOpacity
                            onPress={() => navigate('Scanner')}
                        >
                            <Text>Redeem Reward</Text>
                        </TouchableOpacity>
                    </View>
                </View>


        } else {
            view = <View style={styles.container}>
                <Image
                    source={require('./images/logo.png')}
                    resizeMode='contain'
                    style={styles.image} />
                <Text style={styles.text}>
                    Thanks for downloading the app. Enjoy 20% off of your visit today.
                </Text>
                <View style={styles.icon}>
                    {newuser}
                </View>
            </View>
        }
        return (
            <Swiper>
                {view}
                <View style={styles.container}>
                    <Image
                        source={require('./images/logo.png')}
                        resizeMode='contain'
                        style={styles.image} />
                    <Text style={styles.text}>
                        Your Rewards
                    </Text>
                    <View style={styles.icon}>
                        {reward}
                    </View>
                    <View style={styles.bottomView}>
                        <TouchableOpacity
                            onPress={() => navigate('Scanner')}
                        >
                            <Text>Stamp Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Swiper>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40
    },

    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
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
    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        fontSize: 40
    },
    text: {
        color: 'yellow',
        textAlign: 'center',
        fontSize: 20
    }
});

export default connect(mapStateToProps)(Rewards);