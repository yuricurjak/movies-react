import React from 'react';
import './index.css';

export default props => {

  return (
    <div className="modal fade" id={props.id} tabIndex="-1" role="dialog" aria-labelledby="sinopseModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="sinopseModalLabel">Sinopse</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {props.sinopse}
          </div>
        </div>
      </div>
    </div>
  );
}