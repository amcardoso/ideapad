import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import InnerSection from './inner-section';
import { ideaInputChange, editIdea, deleteIdea } from '../actions';
import { connect } from 'react-redux';
import IdeapadForm from './ideapad-form';
import _ from 'lodash';

class EditIdea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    _.each(params.idea, (value, field) => {
      this.props.ideaInputChange({ field, value })
    })
  }

  editIdea() {
    const { id } = this.props.navigation.state.params.idea;
    const { title, idea } = this.props;
    this.props.editIdea({ title, idea, id });
    this.props.navigation.navigate('Ideas');
  }

  deleteIdea() {
    const { id } = this.props.navigation.state.params.idea;
    this.props.deleteIdea({ id });
    this.props.navigation.navigate('Ideas');
  }

  render() {
    return (
      <View style={styles.container}>
        <IdeapadForm {...this.props} />
        <InnerSection>
          <Button title='Save' onPress={this.editIdea.bind(this)} backgroundColor={'#3bd3d4'} />
        </InnerSection>
        <InnerSection>
          <Button title='Delete' onPress={this.deleteIdea.bind(this)} backgroundColor={'#ef2b35'} />
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

export default connect(mapStatetoProps, { ideaInputChange, editIdea, deleteIdea })(EditIdea);

const styles = {
  container: {
    marginTop: 50,
  }
}