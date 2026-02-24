
export default function Modal({ ref, children, onClose }) {

    return (
        <div ref={ref} className="modal-overlay" onClick={(e) => {
            if (e.target.classList.contains('modal-overlay')) {
                onClose()
            }
        }}>
            <div className="modal-content">
                {children}
            </div>
        </div>
    );
}
