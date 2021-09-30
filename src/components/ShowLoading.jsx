import React from 'react'

export const ShowLoading = () => {
    return (
        <div>
            <button className="btn btn-dark" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> <span className="badge bg-danger text-Light">Cargando...</span>
            </button>
        </div>
    )
}
