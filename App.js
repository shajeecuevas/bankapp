import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Radio, Text, Right, Button, ListItem } from 'native-base';
import { StackNavigator } from 'react-navigation';

//
//class HomeScreen extends React.Component {
//  static navigationOptions = {
//    title: 'Welcome',
//  };
//  render() {
//    const { navigate } = this.props.navigation;
//    return (
//      <View>
//        <Text>Hello, Chat App!</Text>
//        <Button
//          onPress={() => navigate('Chat')}
//        >
//            <Text>Chat with Lucy</Text>
//        </Button>
//      </View>
//    );
//  }
//}
//
//class ChatScreen extends React.Component {
//  static navigationOptions = {
//    title: 'Chat with Lucy',
//  };
//  render() {
//    return (
//      <View>
//        <Text>Chat with Lucy</Text>
//      </View>
//    );
//  }
//}
//
//const SimpleApp = StackNavigator({
//  Home: { screen: HomeScreen },
//  Chat: {screen: ChatScreen },
//});
//
//export default class App extends React.Component {
//  render() {
//    return <SimpleApp />;
//  }
//}
//export default class FixedLabelExample extends Component {
//  render() {
//    return (
//      <Container>
//        <Header />
//        <Content>
//          <Form>
//            <Item floatingLabel>
//              <Label>First Name</Label>
//              <Input />
//            </Item>
//            <Item floatingLabel last>
//              <Label>Last Name</Label>
//              <Input />
//            </Item>
//          </Form>
//          <ListItem>
//            <Text> Remember Me </Text>
//            <Right>
//                <Radio selected={true}/>
//            </Right>
//          </ListItem>
//          <Button block primary><Text>Sign In</Text></Button>
//        </Content>
//      </Container>
//    );
//  }
//}