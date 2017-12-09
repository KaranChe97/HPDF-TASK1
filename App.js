import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Title, Drawer, Thumbnail, Left, Body, Button, Right, } from 'native-base';
import Home from './Component/Home';
import Search from './Component/Search';
import Messages from './Component/Messages';
import Notify from './Component/Notification';
import Side from './Component/Sidebar';

const Styles = {
  viewStyle: {
    // paddingTop: 25,
    backgroundColor: '#0084b4',
    paddingTop: 20
        },
        headerStyle: {
          paddingTop: 5
        },
        tcolor: {
          color: 'white'
        },
        tabc: {
          color: 'blue'
}
};
export default class App extends Component {
      closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Side navigator={this.navigator} />}
        onClose={() => this.closeDrawer()}>
              <Container>
                  <Header style={Styles.viewStyle}>
                    <Left>
                      <Button onPress={() => this.openDrawer()} transparent>
                        <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/922791299354206208/LrvqOcI7_400x400.jpg' }} style={{ width: 30, height: 30 }} />
                       </Button>
                    </Left>
                    <Body>
                      <Title>Home</Title>
                    </Body>
                    <Right />
                  </Header>

            <Tabs>
              <Tab heading={<TabHeading><Icon name="md-home" /></TabHeading>}>
                <Home />
              </Tab>
              <Tab heading={<TabHeading><Icon name="md-search" /></TabHeading>}>
                <Search />
              </Tab>
              <Tab heading={<TabHeading><Icon name="ios-notifications-outline" /></TabHeading>}>
                <Notify />
              </Tab>
              <Tab heading={<TabHeading><Icon name="md-mail-open" /></TabHeading>}>
                <Messages />
              </Tab>
            </Tabs>
          </Container>
      </Drawer>
    );
  }
}
