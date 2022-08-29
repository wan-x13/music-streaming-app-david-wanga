import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../features/modalSlice";
import { removeToken } from "../../features/userSlice";
import { ButtonCancel, ButtonConfirm, ButtonContainer, MessageInfo, ModalContainer, ModalContent } from "./style";





const Modal = () => {

    const {userToken} = useSelector(state=>state.user)
    const {isOn} =useSelector(state=>state.modal)

    const dispatch = useDispatch()

    const handleLogout = ()=>{
        dispatch(removeToken())
        window.localStorage.removeItem('token')
        dispatch(closeModal())
        
        return userToken

    }
    const cancelClick = ()=>{
        dispatch(closeModal())
    }
    return (
        <ModalContainer
         style={{
            visibility : isOn ? "visible" : "hidden"
         }}
        >
            <ModalContent>
            <MessageInfo>Êtes vous sûr de vous déconnecter ?</MessageInfo>

            <ButtonContainer>
                <ButtonConfirm
                 onClick={handleLogout}
                >confirmer</ButtonConfirm>

                <ButtonCancel
                 onClick={cancelClick}
                >annuler</ButtonCancel>
            </ButtonContainer>

            </ModalContent>
            
            
        </ModalContainer>
    );
};

export default Modal;