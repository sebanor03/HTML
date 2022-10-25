const valor = parseInt(prompt('ingrese un numero del 1 al 5', ''));

switch (valor) {
    case 1:
        document.write('hola soy el 1')
        break;
        case 2:
            document.write('hola soy el 2')
            break;
            case 3:
                document.write('soy el 3')
                break;
                case 4:
                    document.write('soy el 4')
                    break;
                    case 5:
                        document.write('soy el 5')
                        break;

    default:
        document.write('debe ingresar un numero del 1 al 5')
        break;
}