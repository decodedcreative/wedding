import React, { Component } from 'react';
import GuestListUploadForm from './GuestListUpload/GuestListUploadForm';
import InvitedList from './GuestListUpload/InvitedList';

class GuestList extends Component {
  render() {
    return (
      <div>
        <GuestListUploadForm />
        <InvitedList />
      </div>
    );
  }
}

export default GuestList;