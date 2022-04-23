import { useDispatch, useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { 
    login,
    removeErrorCentro, removeErrorPassword, removeErrorUserName, 
    setErrorCentro, setErrorPassword, setErrorUserName } from '../../actions/login';

export const LoginPage = () => {

    const dispatch = useDispatch();
    const { msgErrors, loading } = useSelector( state => state.login );

    const initialForm = {
        centro: '1',
        username: 'carlos',
        password: '123456'
    }
    
    const [ {centro, username, password}, handleInputChange, reset ] = useForm( initialForm );

    const handleLogin = (e) => {

        e.preventDefault();

        if( isFormValid() ){
            dispatch( login( centro, username, password ) );
        } 
    }

    const isFormValid = () => {
        
        // Validations centro
        if( centro.trim().length === 0 ) {
            dispatch( setErrorCentro('El Centro es obligatorio') );
            return false;
        } 
        
        // Validations username
        if( username.trim().length === 0 ) {
            dispatch( setErrorUserName('El usuario es obligatorio'));
            return false;
        } 
        // } else if( !validator.isEmail( email )) {
        //     dispatch( setError('Email is not valid'));
        //     return false;
        
        // Validations password
        if( password.trim().length === 0 ) {
            dispatch( setErrorPassword('Contraseña es obligatoria'));
            return false;
        } else if( password.length < 5) {
            dispatch( setErrorPassword('La contraseña debe tener al menos 5 caracteres'));
            return false;
        }
    
        dispatch( removeErrorCentro() );
        dispatch( removeErrorUserName() );
        dispatch( removeErrorPassword() );

        return true;
    } 
  
    return (

        <div className='login-page-background'>

            <div className='login-page'>

                <div className='login_form-content-left'>
                    <img src='public/assets/NothingImage.png' alt='logo' className='login-form-img' />
                </div>                

                <div className='login_form-content-right'>

                    <form className='login-form' onSubmit={ handleLogin }>

                        <h1 className='login-form-title'>Suvesa</h1>

                        <div className='login-form-inputs'>
                            <label htmlFor='centro' className='login-form-label'>
                                Centro
                            </label>
                            <select 
                                id='centro'
                                name='centro'
                                className='login-form-input' 
                                value={ centro } 
                                onChange={ handleInputChange } 
                            >
                                <option value='1'>Centro 1</option>
                                <option value='2'>Centro 2</option>
                            </select>
                            { msgErrors.centro && <p className='login-form-error'>{ msgErrors.centro }</p> }
                        </div>

                        <div className='login-form-inputs'>
                            <label htmlFor='username' className='login-form-label'>
                                Usuario
                            </label>
                            <input 
                                id='username'
                                type='text'
                                name='username'
                                className='login-form-input'
                                placeholder='Usuario'
                                value={ username }
                                onChange={ handleInputChange }
                            />
                            { msgErrors.userName && <p className='login-form-error'>{ msgErrors.userName }</p> }
                        </div>

                        <div className='login-form-inputs'>
                            <label htmlFor='password' className='login-form-label'>
                                Contraseña
                            </label>
                            <input 
                                id='password'
                                type='password'
                                name='password'
                                className='login-form-input'
                                placeholder='Contraseña'
                                value={ password }
                                onChange={ handleInputChange }
                            />
                            { msgErrors.password && <p className='login-form-error'>{ msgErrors.password }</p> }
                        </div>

                        <button className='login-form-button-login' type='submit'>
                            Ingresar
                        </button>

                        <span className='login-form-label-span'>
                            SUPER VETERINARIA DE LIBERIA - 2022
                        </span>

                    </form>

                </div>

            </div>

        </div>

    )
}
