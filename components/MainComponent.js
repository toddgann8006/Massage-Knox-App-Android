import React, { Component } from "react";
import { View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import Home from "./HomeComponent";
import More from "./MoreComponent";
import Contact from "./ContactComponent";
import Services from "./ServicesComponent";
import Appointments from "./AppointmentsComponent";
import Giftcards from "./GiftcardsComponent";
import Rewards from "./RewardsComponent";
import Register from "./RegisterComponent";
import Scanner from "./ScannerComponent";
import { fetchNewuser, fetchRewards } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        email: state.email
    };
};

const mapDispatchToProps = {
    fetchNewuser,
    fetchRewards
};

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#000000'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                }
            }}
        >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};

const RewardsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Rewards"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#000000'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                }
            }}
        >
            <Stack.Screen name="Rewards" component={Rewards} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Scanner" component={Scanner} />
        </Stack.Navigator>
    );
};

const AppointmentsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Appointments"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#000000'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                }
            }}
        >
            <Stack.Screen name="Appointments" component={Appointments} />
        </Stack.Navigator>
    );
};

const MoreNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="More"
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#000000'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                }
            }}
        >
            <Stack.Screen name="More" component={More} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Services" component={Services} />
            <Stack.Screen name="Giftcards" component={Giftcards} />
        </Stack.Navigator>
    );
};

class Main extends Component {
    componentDidMount() {
        const email = this.props.email.email;
        if (email.length) {
            this.props.fetchNewuser();
            this.props.fetchRewards();
        }
    }

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = focused ? 'md-home' : 'md-home-outline';
                            } else if (route.name === 'Rewards') {
                                iconName = focused ? 'md-cash' : 'md-cash-outline';
                            } else if (route.name === 'Appointments') {
                                iconName = focused ? 'md-calendar' : 'md-calendar-outline';
                            } else if (route.name === 'More') {
                                iconName = focused ? 'md-reorder-four' : 'md-reorder-four-outline';
                            }

                            return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: 'black',
                        inactiveTintColor: 'gray',
                        style: {
                            backgroundColor: 'yellow',
                        },
                    }}
                >
                    <Tab.Screen name="Home" component={HomeNavigator} />
                    <Tab.Screen name="Rewards" component={RewardsNavigator} />
                    <Tab.Screen name="Appointments" component={AppointmentsNavigator} />
                    <Tab.Screen name="More" component={MoreNavigator} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);