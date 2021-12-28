import React, { Component } from "react";
import Constants from 'expo-constants';
import { View, Platform, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Services from "./ServicesComponent";
import Appointments from "./AppointmentsComponent";
import Giftcards from "./GiftcardsComponent";
import Rewards from "./RewardsComponent";
import Scanner from "./ScannerComponent";
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: 'white',
        fontSize: 24
    }
});

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='bars'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        initialRouteName: 'About',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='bars'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const ServicesNavigator = createStackNavigator(
    {
        Services: { screen: Services }
    },
    {
        initialRouteName: 'Services',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='bars'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const AppointmentsNavigator = createStackNavigator(
    {
        Appointments: { screen: Appointments }
    },
    {
        initialRouteName: 'Appointments',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='bars'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const GiftcardsNavigator = createStackNavigator(
    {
        Giftcards: { screen: Giftcards }
    },
    {
        initialRouteName: 'Giftcards',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='bars'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const RewardsNavigator = createStackNavigator(
    {
        Rewards: { screen: Rewards }
    },
    {
        initialRouteName: 'Rewards',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='bars'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        About: { screen: AboutNavigator },
        Services: { screen: ServicesNavigator },
        Appointments: { screen: AppointmentsNavigator },
        Giftcards: { screen: GiftcardsNavigator },
        Rewards: { screen: RewardsNavigator }
    },
    {
        drawerBackgroundColor: 'yellow'
    }
);

const AppNavigator = createAppContainer(MainNavigator);



class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                }}>
                <AppNavigator />
            </View>
        );
    }
}

export default connect()(Main);