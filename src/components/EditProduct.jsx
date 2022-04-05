import React from 'react'

const EditProduct = () => {
  return (
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center mb-4 font-weight-bold">Edit Product</h1>
            </div>
            <form className="form-horizontal p-3">
              <div className="form-group">
                <label>Name:</label>
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Product Name"
                    name="name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Price:</label>
                <div className="col-sm-12">
                  <input
                    type="number"
                    className="form-control"
                    id="name"
                    name="price"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
export default EditProduct;