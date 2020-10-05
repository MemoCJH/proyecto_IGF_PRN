$(document).ready(function () {
    //botones eliminar
    $('.btn-eliminar').on('click', function () {
        $(this).closest('tr').hide();
    });

    //boton nuevo registro
    $('#addRegistro').on('click', function () {
        location.href = $(this).attr('url-fomulario');
    });
});