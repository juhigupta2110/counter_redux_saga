import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class CounterApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            width: 250,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={{fontSize: 20}}>Increase</Text>
          </TouchableOpacity>
          <Text style={{fontSize: 20}}>{this.props.counter}</Text>
          <TouchableOpacity onPress={this.props.decreaseCounter}>
            <Text style={{fontSize: 20}}>Decrease</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.props.increaseAsyncCounter}>
          <Text style={{fontSize: 20}}>Increment After 1 second</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE'}),
    decreaseCounter: () => dispatch({type: 'DECREASE'}),
    increaseAsyncCounter: () => dispatch({type: 'INCREASE_ASYNC'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
