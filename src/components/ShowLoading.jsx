import React from 'react'

export const ShowLoading = () => {
    return (
        // Creamos el spinner para mostar cuando cargue la información
        <div className="d-flex justify-content-center mt-5 p-5 mx-5" id="divSpiner" >
            <button className="btn btn-light" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> <span className="badge bg-success text-Light">Cargando tu receta...</span>
            </button>
        </div>
    )
}
