import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
export default class Messages extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/870544694643572736/pQ6apV_1_400x400.jpg' }} />
                <Body>
                  <Text>Rajesh<Text note>@rajeshhacker023</Text> </Text>
                  <Text note>
                    I.instagram.com/?xmgf=IsraFdMx...
                    IsrFdGMxwN
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/925271406593556480/47sTEs1k_400x400.jpg' }} />
                <Body>
                  <Text>Google Devs India<Text note>@GoogleDevsIN</Text> </Text>
                  <Text note>
                  Sent you a link: Thanks for following
                  this account.....
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/697705718372130816/nAb4KOVJ_400x400.jpg' }} />
                <Body>
                  <Text>10,000 Startups<Text note>@NASSCOMStartUps</Text> </Text>
                  <Text note>
                      Thanks for the connection, it's
                      nice to tweet-meet you! Being on a p..
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
