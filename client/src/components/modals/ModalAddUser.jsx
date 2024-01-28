import Modal from "react-modal"
import AddUserForm from "../forms/AddUserForm"


const ModalAddUSer = ({ modal, closeModal }) => {
    return (
        <Modal
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                content: {
                    position: 'absolute',
                    top: '25%',
                    left: '37%',
                    right: '37%',
                    bottom: 'auto',
                    border: '#000',
                    background: '#000',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px',
                }
            }}
            ariaHideApp={false}
            isOpen={modal.addUser}
            onRequestClose={closeModal}
            contentLabel="Modal Add User"
        >
            <div className='row'>
                <div className='col d-flex justify-content-between '>
                    <h2 className="text-white">Add User</h2>
                    <button className='btn btn-danger' name="addUser" onClick={closeModal}>x</button>
                </div>
            </div>
            <AddUserForm closeModal={closeModal} />
        </Modal >
    )
}

export default ModalAddUSer;