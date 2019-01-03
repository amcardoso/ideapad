import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import InnerSection from './inner-section';
import { ideaInputChange, createIdea } from '../actions';
import { connect } from 'react-redux';
import IdeapadForm from './ideapad-form';

class AddIdea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  createIdea() {
    this.props.createIdea(this.props);
    this.props.navigation.navigate('Ideas');
  }

  render() {
    return (
      <View style={styles.container}>
        <IdeapadForm />
        <InnerSection>
          <Button title='Submit' onPress={this.createIdea.bind(this)} backgroundColor={'#3bd3d4'} />
        </InnerSection>
      </View>
    );
  }
}

const mapStatetoProps = state => {
  return {
    title: state.ideapadForm.title,
    idea: state.ideapadForm.idea
  };
}

export default connect(mapStatetoProps, { ideaInputChange, createIdea })(AddIdea);

const styles = {
  container: {
    marginTop: 50,
  }
}