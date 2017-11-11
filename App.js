import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Radio, Text, Right, Button, ListItem } from 'native-base';
export default class FixedLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Last Name</Label>
              <Input />
            </Item>
          </Form>
          <ListItem>
            <Text> Remember Me </Text>
            <Right>
                <Radio selected={true}/>
            </Right>
          </ListItem>
          <Button block primary><Text>Sign In</Text></Button>
        </Content>
      </Container>
    );
  }
}
//const styles = StyleSheet.create({
//  theme: {
//    backgroundColor: 'red',
//  },
//  container: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center',
//    backgroundColor: '#F5FCFF',
//  },
//  welcome: {
//    fontSize: 20,
//    textAlign: 'center',
//    margin: 10,
//  },
//  instructions: {
//    textAlign: 'center',
//    color: '#333333',
//    marginBottom: 5,
//  },
//});
//
