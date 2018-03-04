import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import SubmitButton from './SubmitButton';
import { colName } from '../../utils/functions';
import './MultipleChoice.css';

class MultipleChoice extends Component {
  state = {
    selected: null,
    submitted: null
  }

  onChoiceClick = (i) => {
    if (this.state.selected === i ) this.setState({ selected: null, submitted: null });
    else this.setState({ selected: i });
  }

  onSubmit = () => {
    if (this.state.selected !== null) {
      this.props.onSubmit(this.state.selected);
      this.setState({ submitted: this.state.selected });
    }
  }

  render () {
    const { options } = this.props;
    const { selected, submitted } = this.state;

    const selections = options.map((option, i) =>
      <Segment
        as='li'
        key={i}
        onClick={() => this.onChoiceClick(i)}
        color={selected === i ? 'blue' : null}
        className='answer-choice'
      >
        <Header
          color={selected === i ? 'blue' : 'grey'}
          floated='left'
          size='small'
          className='answer-choice-letter'
        >
          {colName(i)}
        </Header>
        {option}
        {submitted === i &&
          <Header
            color={selected === i ? 'blue' : 'grey'}
            floated='right'
            size='small'
          >
            Submitted!
          </Header>
        }
      </Segment>
    );

    return (
      <ol className='answer-choice-list'>
        {selections}
        <SubmitButton
          visible={selected !== null && selected !== submitted}
          onSubmit={this.onSubmit}
          text={ submitted ? 'Change Submission' : 'Submit' } />
      </ol>
    );
  }
}

export default MultipleChoice;