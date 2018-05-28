import React, { Component } from 'react';

class GuestListUploadForm extends Component {
  render() {
    return (
      <section className="py-4">
        <div className="container">
          <h2>Upload A Guestlist</h2>
          <form action="/api/upload-guestlist" method="post" className="border p-3">
            <label htmlFor="file" className="d-block">Choose an Excel spreadsheet file to upload your guestlist</label>
            <input type="file" name="file" id="file"/>
            <input type="submit" value="Upload" name="Submit"/>
          </form>
        </div>
      </section>
    )
  }
}

export default GuestListUploadForm;