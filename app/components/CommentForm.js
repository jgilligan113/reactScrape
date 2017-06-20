import React, { Component } from "react";


const CommentForm = () => (
    <div className="panel">
          <div className="panel-heading">
            <h3 className="panel-title">Notes</h3>
          </div>
          <div className="panel-body">
            <form>
              <div className="form-group" id="notes">
                <input type="text" name="title" id="titleinput" className="form-control" placeholder="Title" /><br />
                <textarea className="form-control" name="body" id="bodyinput" rows="5" placeholder="add notes on content here"></textarea><br />
                <button type="button" className="btn btn-warning" id="addNote">Save</button>
              </div>
              
            </form>
          </div>
          <div className="panel-heading" id="comments">
            <h3 className="panel-title">Previous comments</h3>
          </div>
          <ul className="list-group" id="pNotes">
          </ul>
        
    </div>
);





export default CommentForm;