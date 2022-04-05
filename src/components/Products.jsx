import React, { Fragment } from 'react';

const Products = () => {
  return (
    <Fragment>
      <h1 className="text-center my-5">Product List</h1>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr className="text-center">
            <th scope="col" className="">Name</th>
            <th scope="col" className="">Price</th>
            <th scope="col" className="">Actions</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </Fragment>
  );
}
export default Products;