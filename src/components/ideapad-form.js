import React, { Component } from 'react';
import { View } from 'react-native';
import { FormInput } from 'react-native-elements';
import InnerSection from './inner-section';
import { ideaInputChange, createIdea } from '../actions';
import { connect } from 'react-redux';

class IdeapadForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <View>
        <InnerSection>
          <FormInput
            value={this.props.title}
            placeholder='Title'
            onChangeText={text => this.props.ideaInputChange({ field: 'title', value: text })}
          />
        </InnerSection>
        <InnerSection>
          <FormInput
            value={this.props.idea}
            placeholder='Jot down your ideas here...'
            multiline={true}
            inputStyle={{ height: 200 }}
            onChangeText={text => this.props.ideaInputChange({ field: 'idea', value: text })}
          />
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

export default connect(mapStatetoProps, { ideaInputChange, createIdea })(IdeapadForm);