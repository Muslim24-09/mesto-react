export const PopupWithForm = (props) => {
	return(
		<div className={props.isOpen ? 'popup popup_opened' : 'popup'} id={props.name}>
    <div className="popup__container">
      {/* <button className="popup__close-button" title='Закрыть попап' onClick={() => props.setIsOpen(false)}></button> */}
      <button className="popup__close-button" title='Закрыть попап'></button>
      <form className="form form_delete-item" name={props.name} noValidate>
        {props.children}
        <button type="submit" className={`form__save-button form__save-button_${props.name}`} title={props.title}>{props.btnName}</button>
      </form>
    </div>
  </div>
	)
}