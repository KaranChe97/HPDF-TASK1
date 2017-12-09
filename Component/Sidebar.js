import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Card, CardItem, Text, Icon, Right, Footer, FooterTab, Button, Left, Thumbnail, Body } from 'native-base';

export default class Side extends Component {
  render() {
    return (
      <Container>
         <Card>
           <CardItem cardBody>
              <Image source={{ uri: 'https://nodeassets.nbcnews.com/images/non-rev/footer-logo-xfinity.svg' }} style={{ height: 16, width: null, flex: 1 }} />
           </CardItem>
           <CardItem>
              <Left>
                <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/922791299354206208/LrvqOcI7_400x400.jpg' }} />
              </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Karan</Text>
              <Text note>@karan_murugan</Text>
            </Body>
            <Right>
              <Icon active name="ios-arrow-down" />
            </Right>
          </CardItem>
          <CardItem>
            <Left>
              <Text>274</Text>
              <Text note>Following</Text>
            </Left>
            <Left>
              <Text>79</Text>
              <Text note>Followers</Text>
            </Left>
          </CardItem>
          <CardItem>
              <Icon name="ios-person-outline" />
              <Text>Profile</Text>
          </CardItem>
          <CardItem>
               <Icon name="ios-list-box-outline" />
               <Text>Lists</Text>
          </CardItem>
          <CardItem>
                <Icon name="ios-flash-outline" />
                <Text>Moments</Text>
          </CardItem>
          <CardItem>
                 <Icon name="ios-browsers-outline" />
                 <Text>Highlights</Text>
          </CardItem>
          <CardItem>
                  <Icon name="ios-open-outline" />
                  <Text>Twitter Ads</Text>
          </CardItem>
          <CardItem>
                   <Text>Settings and privacy</Text>
          </CardItem>
          <CardItem>
                   <Text>Help Centre</Text>
          </CardItem>
        </Card>
        <Footer>
          <FooterTab>
            <Left>
              <Button>
                <Icon name="ios-moon-outline" />
              </Button>
            </Left>
            <Right>
              <Button>
                <Icon name="ios-qr-scanner-outline" />
              </Button>
            </Right>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

//<Image source={{ uri: 'https://nodeassets.nbcnews.com/images/non-rev/footer-logo-xfinity.svg' }} style={{ height: null, width: 1 }} />
