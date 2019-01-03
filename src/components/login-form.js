import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Button, FormInput, FormValidationMessage } from 'react-native-elements';
import InnerSection from './inner-section';
import { authInputChange, login } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentWillReceiveProps(nextProps) {
    if(!_.isEmpty(nextProps.user)) {
      this.props.navigation.navigate('App');
    }
  }

  login() {
    this.props.login(this.props);
  }

  showButton() {
    if (this.props.loading) {
      return(
        <View>
          <ActivityIndicator />
        </View>
      );
    } else {
      return (<Button title='Login' onPress={this.login.bind(this)} backgroundColor={'#3bd3d4'} />);
    }
    
  }

  showError() {
    if (this.props.error) {
      return (
        <FormValidationMessage>{this.props.error}</FormValidationMessage>
      );
    }
  }

  // atualizaCampoEmail(valor) {
  //   this.setState({
  //     email: valor
  //   });
  // }

  // atualizaCampoSenha(valor) {
  //   this.setState({
  //     password: valor
  //   });
  // }

  render() {
    return (
      <View style={styles.container}>
        <InnerSection>
          <FormInput
            value={this.props.email}
            placeholder='e-mail'
            // onChangeText={text => this.atualizaCampoEmail(text)}
            onChangeText={text => this.props.authInputChange({ field: 'email', value: text })}
          />
        </InnerSection>
        <InnerSection>
          <FormInput
            value={this.props.password}
            placeholder='password'
            secureTextEntry={true}
            // onChangeText={text => this.atualizaCampoSenha(text)}
            onChangeText={text => this.props.authInputChange({ field: 'password', value: text })}
          />
        </InnerSection>
        {this.showError()}
        <InnerSection>
          {this.showButton()}
        </InnerSection>
      </View>
    );
  }
}

const mapStatetoProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    loading: state.auth.loading,
    user: state.auth.user,
    error: state.auth.error
  };
}

export default connect(mapStatetoProps, { authInputChange, login })(LoginForm);

const styles = {
  container: {
    marginTop: 50,
  }
}