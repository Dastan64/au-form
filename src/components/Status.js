import '../styles/Status.scss';
import { useState, useRef } from 'react';
import EditStatus from './EditStatus';

const Status = ({ status, setStatus }) => {
  const userForm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(userForm.current.value);
  };

  const [isEditingVisible, setIsEditingVisible] = useState(false);

  return (
    <>
      <div className='user'>
        <h1 className='user__heading heading'>
          <span className='heading__span'>Здравствуйте,</span> Человек №3596941
        </h1>
        <button
          href='#'
          className='user__status-button'
          onClick={() => setIsEditingVisible(!isEditingVisible)}>
          Сменить статус
        </button>
        <div className='user__status-box'>
          <p>{status}</p>
        </div>
      </div>
      {isEditingVisible && (
        <EditStatus
          handleSubmit={handleSubmit}
          status={status}
          setStatus={setStatus}
          setIsEditingVisible={setIsEditingVisible}
          userForm={userForm}
        />
      )}
    </>
  );
};

export default Status;
