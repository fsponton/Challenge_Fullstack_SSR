import Modal from "react-modal"
import FilterByDate from "../forms/FilterByDate";

const ModalFilterByDate = ({ modal, closeModal }) => {
    return (
        <Modal
            style={{
                overlay: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(000, 000, 000, 0.5)'
                },
                content: {
                    position: 'absolute',
                    top: '20%',
                    left: '30%',
                    right: '30%',
                    bottom: 'auto',
                    border: '#000',
                    background: '#000',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '20px'
                }
            }}
            ariaHideApp={false}
            isOpen={modal.filterByDate}
            onRequestClose={closeModal}
            className=""
            contentLabel="Modal Filter By Date"
        >
            <div className='row'>
                <div className='col d-flex justify-content-between '>
                    <h2 className="text-white">Filter By Date</h2>
                    <button className='btn btn-danger' name="filterByDate" onClick={closeModal}>x</button>
                </div>
            </div>
            <FilterByDate closeModal={closeModal} />
        </Modal >
    )
}

export default ModalFilterByDate;