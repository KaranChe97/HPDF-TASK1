import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
export default class Notify extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://pbs.twimg.com/profile_images/870544694643572736/pQ6apV_1_400x400.jpg'}} />
                <Body>
                  <Text>Rajesh
                    <Text note> retweeted</Text>
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text note>
                  #Sibslsunmit revolt| Will @ Kapilsj
                  Politics Down@Incn in gujarat?
                  @sanket is live now;
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://pbs.twimg.com/profile_images/925271406593556480/47sTEs1k_400x400.jpg'}} />
                <Body>
                  <Text>GoogleDevsIN
                    <Text note> started a broadcast</Text>
                  </Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text note>
                  Welcome #Android 8.1!
                  Optimizations for #AndroidOreo (Go
                  edition), the #NeuralNetworks API
                  and much more..
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
