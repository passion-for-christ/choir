import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';
import Button from '../UIElements/Button';

// * SCSS in global styles

const ModalOverlay = props => {
    const content = (
        <div className={`modal${props.className ? ' ' + props.className : ''} modal--${props.size || 'small'}`} style={props.style}>

            <header className={`modal__header${props.headerClass ? ' ' + props.headerClass : ''}`}>
                <h4>{props.header}</h4>
                <Button size='close' onClick={props.onCancel}>X</Button>
            </header>

            <div className='modal__container'>
                <div className={`modal__content${props.contentClass ? ' ' + props.contentClass : ''}`}>
                    {props.children}
                </div>
            </div>

            {props.footer && (
                <footer
                    className={`modal__footer${props.footerClass ? ' ' + props.footerClass: ''}`}
                    style={props.justifyRight && {'justifyContent': 'right'}}
                >
                    {props.footer}
                </footer>
            )}
        </div>
    );

    return content;
};

const Modal = props => {
    useEffect(() => {
        if (props.show) {
            document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = ''; 
        }
    }, [props.show]);

    return (
        <>        
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames='modal'
            >
                <ModalOverlay {...props} />
            </CSSTransition>

            {props.size !== 'sidebar' &&
                <CSSTransition
                    in={props.show}
                    mountOnEnter
                    unmountOnExit
                    timeout={200}
                    classNames='modal'
                >
                    <Backdrop onClick={props.onCancel}/>
                </CSSTransition>
            }
        </>
    );
};

export default Modal;

// // const ModalBox = props => {
// //     return (
// //         <>
// //             <div className={classes.modal_background} onClick={props.close}></div>
// //             <div className={classes.modal_box}>
// //                 <div className={props.ModalClassName}>
// //                     <div className={classes.modal_box_header}>
// //                         <p>{props.ModalBoxTitle}</p>
// //                         <Button onClick={props.close}><i className='fal fa-times'></i></Button>
// //                     </div>

// //                     <div className={classes.modal_box_content}>
// //                         {props.children}
// //                     </div>

// //                     <div className={classes.modal_box_footer}>
// //                         <Button onClick={props.clickedPrimary}>{props.ButtonCta}</Button>&nbsp;&nbsp;&nbsp;
// //                         {props.SecButtonCta === 'none' ? null : <Button size='link' onClick={props.clickedSecondary}>{props.SecButtonCta}</Button>}

// //                     </div>
// //                 </div>

// //             </div>
// //         </>
// //     );
// // }

// // export default ModalBox; 