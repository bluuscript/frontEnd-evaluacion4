import './App.css';

import {imprimirBoleta} from './calculaBoleta.js'

function App() {
  
  return (
    <div className='d-flex justify-content-center mt-5'>
      <div className='bg-light rounded rounded-5 p-5'>
        <h3 className='text-center'>
          BOLETA DE CHILECTRA     
        </h3>
        <h6 className='mt-4'>
            ************DATOS DEL CLIENTE*************
        </h6>
        <form className='text-center mt-2' onSubmit={calcularBoleta}>
            <div className='text-start'>

              <div className='input-group p-2'>
                <label htmlFor='rut' className='form-label me-5'>Rut Cliente</label> 
                  : <input id='rut' name='rut' type='text' className='form-control ms-1' placeholder='Ej: 12345678-k' required autoComplete='off' />
              </div>

              <div className='input-group p-2'>
                <label htmlFor='nombre' className='form-label me-3'>Nombre Cliente</label>
                  : <input id='nombre' name='nombre' type='text' className='form-control ms-1' placeholder='Ej: Juan Vargas' required autoComplete='off' />
              </div>

              <div className='input-group p-2'>
                <label htmlFor='direccion' className='form-label me-2'>Dirección Cliente</label>
                  : <input id='direccion' name='direccion' type='text' className='form-control ms-1' placeholder='Ej: Gallardo 1000' required autoComplete='off' /> 
              </div>

              <div className='input-group p-2'>
                <label htmlFor='comuna' className='form-label me-3'>Comuna Cliente</label>
                  : <input id='comuna' name='comuna' type='text' className='form-control ms-1' placeholder='Ej: Puerto Montt' required autoComplete='off' /> 
              </div>

              <div className='input-group p-2'>
                <label htmlFor='tip' className='me-5'>Tipificación</label>
                : <select id='tip' name='tip' className='form-select ms-1' aria-label='ejemplo' required>
                    <option value={""}>Seleccionar</option>
                    <option value={"1a"}>1a</option>
                    <option value={"1d"}>1d</option>
                    <option value={"1c"}>1c</option>
                </select>
              </div>

              <div className='input-group p-2'>
                <label htmlFor='lAnterior' className='form-label me-3'>Lectura Anterior</label>
                : <input id='lAnterior' name='lAnterior' type='text' className='form-control ms-1' placeholder='Ej: 100' required autoComplete='off'/>
              </div>
              <div className='input-group p-2'>
                <label htmlFor='lActual' className='me-4'>Lectura Actual</label>
                : <input id='lActual' name='lActual' type='text' className='form-control ms-1' placeholder='Ej: 104' required autoComplete='off'/>
              </div>

            </div>
            <button type='submit' className='btn btn-success mt-3'>
              CALCULAR
            </button>
        </form>
      </div>
    </div>
  );
}

function calcularBoleta(e) {
  e.preventDefault();

  const rutCliente = e.target.rut.value;
  const nombreCliente = e.target.nombre.value;
  const direccionCliente = e.target.direccion.value;
  const comunaCliente = e.target.comuna.value;
  const tipificacion = e.target.tip.value;
  const lAnterior = e.target.lAnterior.value;
  const lActual = e.target.lActual.value;

  // console.log(
  //   rutCliente,
  //   nombreCliente,
  //   direccionCliente,
  //   tipificacion,
  //   lAnterior,
  //   lActual
  // )
  
  imprimirBoleta(rutCliente, nombreCliente, direccionCliente, comunaCliente, tipificacion, lAnterior, lActual);

}

export default App;
