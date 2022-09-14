const pantalla = document.getElementById('pantalla');
const botones = document.querySelectorAll('.botones');

/*Permite escuchar cual boton fue presionado.*/
botones.forEach
(
    (boton) =>
    {
        boton.addEventListener
        (
            'click', e => 
            {
                calcular(e.target.value);
            }
        );
    }
);

function calcular( valor )
{
    switch(valor)
    {
        case '=':
            try {
                pantalla.value = eval(pantalla.value); /*eval() se encarga de ejecutar el codigo.*/   
            } catch (error) {
                pantalla.value = "ERROR!!!"
                setTimeout(function(){
                    pantalla.value = "";
                },1000);
            }
        break;

        case "AC":
            pantalla.value = "";
        break;

        default:
            pantalla.value += valor;
    }
}