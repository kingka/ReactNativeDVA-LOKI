import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

import Button from './../components/Button';

// const mapStateToProps = (state) => ({
//   users: _.get(state, 'userList.userList', []),
// });

// const mapDispatchToProps = (dispatch) => ({
//   GET_UserList: (payload, callback, loading) =>
//     dispatch({type: 'userList/GET_UserList', payload, callback, loading}),
// });
@connect(({userList}) => ({
  users: userList.userList,
}))
export default class DemoPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const {users} = this.props;
    console.log(users);
  }

  render() {
    const {dispatch,users} = this.props;
    console.log('loki-',dispatch,'loki--',users);
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change
                  this screen and then come back to see your edits.
                </Text>
              </View>
              <Button
                onPress={function () {
                  dispatch({type: 'userList/GET_UserList', payload: [456]});
                }}>
                TouchableOpacity Button
              </Button>
              <Text>{users}</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
  static propTypes = {
    users: PropTypes.array,
  };
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
// export default connect(mapStateToProps, mapDispatchToProps)(DemoPage);
