import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/821735271049768960/jJZXlJwZ_400x400.jpg'}} />
                  <Body>
                    <Text>Mozilla</Text>
                    <Text note>@mozilla</Text>
                  </Body>
                </Left>
              </CardItem>
              <Body>
                <Text>
                  Mozilla Open Leader learn how to apply
                  open-source practices to coding,
                  research, and data science...
                </Text>
              </Body>
              <CardItem cardBody>
                <Image source={{uri: 'https://pbs.twimg.com/card_img/936219520875732997/bjWPKdHF?format=jpg&name=600x314'}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    <Icon active name="ios-chatbubbles-outline" />
                    <Text>8</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                    <Icon active name="ios-git-compare" />
                    <Text>45</Text>
                  </Button>
                </Body>
                <Right>
                  <Button transparent>
                    <Icon active name="ios-heart-outline" />
                    <Text>23</Text>
                  </Button>
                </Right>
                <Right>
                  <Button transparent>
                    <Icon active name="ios-mail-outline" />
                    <Text>1</Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
          </Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://pbs.twimg.com/profile_images/870544694643572736/pQ6apV_1_400x400.jpg'}} />
              <Body>
                <Text>Rajesh</Text>
                <Text note>@rajeshhacker023</Text>
              </Body>
            </Left>
          </CardItem>
          <Body>
            <Text>
              #gdgmadurai @gdgmadurai #devfest17
              @sentenwin @seshankasin
              @prasanthp96
            </Text>
          </Body>
          <CardItem cardBody>
            <Image source={{uri: 'https://pbs.twimg.com/media/DN4flkTVQAE9T3r.jpg'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>

          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="ios-chatbubbles-outline" />
                <Text>8 </Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="ios-git-compare" />
                <Text>9</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon active name="ios-heart-outline" />
                <Text>4</Text>
              </Button>
            </Right>
            <Right>
              <Button transparent>
                <Icon active name="ios-mail-outline" />
                <Text>1</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
        <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://pbs.twimg.com/profile_images/925271406593556480/47sTEs1k_400x400.jpg'}} />
              <Body>
                <Text>Google Devs India</Text>
                <Text note>@GoogleDevsIN</Text>
              </Body>
            </Left>
          </CardItem>
          <Body>
            <Text>
              In this live stream at #GDDIndia,
              we Deep dive into the new Cloud
              Firestore database:goo.gl/ZMF7AT
            </Text>
          </Body>
          <CardItem cardBody>
            <Image source={{uri: 'https://pbs.twimg.com/media/DQCYaVaV4AI62SC.jpg'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="ios-chatbubbles-outline" />
                <Text>8</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="ios-git-compare" />
                <Text>22</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon active name="ios-heart-outline" />
                <Text>4</Text>
              </Button>
            </Right>
            <Right>
              <Button transparent>
                <Icon active name="ios-mail-outline" />
                <Text>1</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: 'https://pbs.twimg.com/profile_images/697705718372130816/nAb4KOVJ_400x400.jpg'}} />
              <Body>
                <Text>10,000 Startups</Text>
                <Text note>@NASSCOMStartUps</Text>
              </Body>
            </Left>
          </CardItem>
          <Body>
            <Text>
              check out the dempgraphic analysis of
              #indian #entrepreneur by "Indian
              Startup Ecosystem- Traversing the
              maturity cycle" in the latest NASSCOM
              report..
            </Text>
          </Body>
          <CardItem cardBody>
            <Image source={{uri: 'https://pbs.twimg.com/media/DP-tAVyUMAAaP7-.jpg'}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="ios-chatbubbles-outline" />
                <Text>25</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent>
                <Icon active name="ios-git-compare" />
                <Text>48</Text>
              </Button>
            </Body>
            <Right>
              <Button transparent>
                <Icon active name="ios-heart-outline" />
                <Text>13</Text>
              </Button>
            </Right>
            <Right>
              <Button transparent>
                <Icon active name="ios-mail-outline" />
                <Text>0</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    </Content>
      </Container>
    );
  }
}
