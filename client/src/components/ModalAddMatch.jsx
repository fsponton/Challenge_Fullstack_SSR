import Modal from "react-modal"
import AddMatchForm from "./AddMatchForm";


const ModalAddMatch = ({ modal, openCloseModal }) => {
    return (
        <Modal
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.75)'
                },
                content: {
                    position: 'absolute',
                    top: '15%',
                    left: '15%',
                    right: '15%',
                    bottom: 'auto',
                    border: '1px solid #000',
                    background: '#fff',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                }
            }}
            ariaHideApp={false}
            isOpen={modal.addMatch}
            onRequestClose={openCloseModal}
            className=""
            contentLabel="Modal Add Match"
        >
            <div className='row'>
                <div className='col d-flex justify-content-between '>
                    <h2>Add Match</h2>
                    <button className='btn btn-danger' name="addMatch" onClick={openCloseModal}>x</button>
                </div>
            </div>

            <div className="row">
                <div className="col col-lg-12 d-flex justify-content-center " >
                    <AddMatchForm />
                </div>
            </div>

        </Modal >
    )
}

export default ModalAddMatch;