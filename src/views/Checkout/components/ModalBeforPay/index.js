import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

// reactstrap components
import { Button, Modal } from 'reactstrap';

function ModalBeforPay() {
  const [liveDemo, setLiveDemo] = React.useState(false);
  return (
    <>
      <Button
        color="info"
        type="button"
        onClick={() => setLiveDemo(true)}
        style={{ width: '100%' }}
        className="mb-4"
      >
        Otros medios de pago
      </Button>
      <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
        <div className="modal-header">
          <div className="icon icon-warning">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className=""
              style={{ fontSize: '5em' }}
            />{' '}
          </div>
          <h5 className="modal-title mt-4" id="exampleModalLiveLabel">
            Al terminar tu pago, recuerda darle click al botón{' '}
            <strong>REGRESAR AL COMERCIO</strong> para procesar tu orden.
          </h5>
        </div>
        <div className="modal-footer">
          <div className="left-side">
            <Button
              className="btn-link"
              color="default"
              data-dismiss="modal"
              type="button"
              size="lg"
              onClick={() => setLiveDemo(false)}
            >
              Cancelar
            </Button>
          </div>
          <div className="divider" />
          <div className="right-side">
            <Button
              className="btn-link"
              color="info"
              type="button"
              size="lg"
              onClick={() => setLiveDemo(false)}
            >
              Pagar
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalBeforPay;
