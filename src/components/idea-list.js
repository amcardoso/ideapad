import React, { Component } from 'react';
import { List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { getIdeas } from '../actions';
import _ from 'lodash';

class IdeaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.getIdeas();
  }

  renderList() {
    return this.props.ideas.map((idea) => {
      return (
        <ListItem
          key={idea.id}
          title={idea.title}
          leftIcon={{ name: 'lightbulb-outline' }}
          onPress={() => this.props.navigation.navigate('EditIdea', { idea })}
        />
      );
    })
  }

  render() {
    return (
      <List containerStyle={{ marginTop: 0 }}>
        {this.renderList()}
      </List>
    );
  }
}

function mapStateToProps(state) {
  const ideas = _.map(state.ideas, (val, id) => {
    val['id'] = id;
    return val;
  })

  return { ideas };
}

export default connect(mapStateToProps, { getIdeas })(IdeaList);