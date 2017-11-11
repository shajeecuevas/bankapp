import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Header, Content, Form, Icon, Item, Input, Label, Radio, Text, Right, Button, ListItem, Body, Card, CardItem } from 'native-base';
import { StackNavigator } from 'react-navigation';

let customer = {
       id: "5a063c1da73e4942cdafe87b",
       first_name: "Rebecca",
       last_name: "Bruen",
          address: {
            street_number: "3303",
            street_name: "Mount Hope Road",
            city: "Titusville",
            state: "Pennsylvania",
            zip: "16354"
          }
       };
let balance = {
    balance: 33201,
    customer_id: "5a063c1da73e4942cdafe87b",
    nickname: "Aubree's Account",
    rewards: 27942,
    type: "Credit Card",
    id: "5a063c1ea73e4942cdafe87e"
    };

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'EZBanking',
  };
  render() {
  let style;
  const { navigate } = this.props.navigation;
    return (
      <Container style={styles.theme}>
        <Header />
        <Content>
          <Form style={styles.theme}>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Last Name</Label>
              <Input />
            </Item>
          </Form>
          <ListItem style={styles.loginPadding}>
            <Text> Remember Me </Text>
            <Right>
                <Radio selected={true}/>
            </Right>
          </ListItem>
          <Button block primary onPress={() => navigate('Home')}><Text>Sign In</Text></Button>
        </Content>
      </Container>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome, ' + customer.first_name,
  };
  render() {
    return (
        <Container>
                <Header>
                    <Text style={styles.cardHeader}>Banks and Cards</Text>
                </Header>
                <Content>
                  <Card style={styles.cardMaster}>
                    <CardItem style={styles.cardInfo}>
                      <Body>
                        <Text style={styles.cardBalance}>
                           ${balance.balance}
                        </Text>
                        <Text>
                           Card Type: {balance.type}
                        </Text>
                      </Body>
                    </CardItem >
                  </Card>
                </Content>
        </Container>
    );
  }
}

const BankApp = StackNavigator({
  Login: { screen: LoginScreen },
  Home: {screen: HomeScreen },
});

export default class App extends React.Component {
  render() {
    return <BankApp />;
  }
}

const styles = StyleSheet.create({
    theme: {
        backgroundColor: '#f1f1f1',
    },
    loginPadding: {
        marginTop: 20,
        marginBottom: 20
    },
    mic: {
        width: 55,
        height: 55,
        bottom: 0,
        right: 0
    },
    cardInfo: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
    },
    cardHeader: {
        marginTop: 15,
        fontSize: 20
    },
    cardBalance: {
        fontSize: 15,
        textAlign: 'center'

    },
    cardMaster: {
        borderRadius: 10
    }
});