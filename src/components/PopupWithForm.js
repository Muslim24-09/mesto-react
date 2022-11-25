export const PopupWithForm = (props) => {
	return(
		<div className={props.isOpen ? 'popup popup_opened' : 'popup'} id={props.name} >
    <div className="popup__container">
    <h3 className="popup__title">{props.title}</h3>
      <button className="popup__close-button" title='Закрыть попап' onClick={props.onClose}></button>
      <form className="form form_delete-item" name={props.name} noValidate onSubmit={props.onSubmit}>
        {props.children}
        <button type="submit" className={`form__save-button form__save-button_${props.name}`} title={props.title}>{props.btnName}</button>
      </form>
    </div>
  </div>
	)
}