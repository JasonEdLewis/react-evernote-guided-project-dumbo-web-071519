import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {



  state={
    allNotes: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/notes')
    .then(r=> r.json())
    .then(notes =>{
      this.setState({
       allNotes: notes 
      })
    })
  }

  renderContent = () => {
// all notes props here
   
    if (false) {
      return <NoteEditor />;
    } else if (false) {
      return <NoteViewer />;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
