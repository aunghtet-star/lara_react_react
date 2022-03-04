import React from 'react'

export default function Loader() {
  return (
    <div>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center p-5">
            <div class="spinner-border text-success" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
    </div>
  )
}
