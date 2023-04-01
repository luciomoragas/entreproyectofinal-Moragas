import Swal from 'sweetalert2';

export const isFormValid = (name, phone, email) => {
  const regexName = /^[a-z ,.'-]+$/i;
  const regexPhone =
    /^((?:\(?\d{2}\)?[- .]?\d{4}|\(?\d{4}\)?[- .]?\d{3}|\(?\d{5}\)?[- .]?\d{2})[- .]?\d{4})$/;
  const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

  if (!regexName.test(name) || name.length < 3) {
    Swal.fire({
      title: 'Error!',
      text: 'Nombre invalido',
      icon: 'error',
      confirmButtonText: 'Intentalo de nuevo',
    });
    return false;
  } else if (!regexPhone.test(phone)) {
    Swal.fire({
      title: 'Error!',
      text: 'Numero de telefono invalido',
      icon: 'error',
      confirmButtonText: 'Intentalo de nuevo',
    });
    return false;
  } else if (!regexEmail.test(email)) {
    Swal.fire({
      title: 'Error!',
      text: 'Email invalido',
      icon: 'error',
      confirmButtonText: 'Intentalo de nuevo',
    });
    return false;
  } else {
    return true;
  }
};