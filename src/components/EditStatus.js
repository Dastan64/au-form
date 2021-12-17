function EditStatus({
  handleSubmit,
  status,
  setStatus,
  setIsEditingVisible,
  userForm,
}) {
  return (
    <form className='user__form' onSubmit={handleSubmit}>
      <label htmlFor='user-input'>Введите статус:</label>
      <input
        className='user__form-input'
        onChange={(e) => setStatus(e.target.value)}
        value={status}
        type='text'
        id='user-input'
        ref={userForm}
      />
      <button
        className='user__form-btn'
        onClick={() => setIsEditingVisible(false)}>
        Сохранить
      </button>
    </form>
  );
}

export default EditStatus;
