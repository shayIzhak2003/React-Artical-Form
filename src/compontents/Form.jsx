import React, { useState } from 'react';
import './style/Form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });

  const [itemList, setItemList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddClick = () => {
    if (formData.description !== '' && formData.name !== '') {
      setItemList((prevItems) => [...prevItems, formData]);
      setFormData({
        name: '',
        description: '',
      });
    } else {
      alert('You need to enter a full form!');
    }
  };

  const handleRemoveClick = (index) => {
    setItemList((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  return (
    <div className="formContainer">
      <h1>React Form App</h1>
      <form>
        <label>
          Name:
          <input
          className="form-control"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
          id="floatingTextarea"
          className="form-control"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddClick} className="btn btn-success">
          Add
        </button>
      </form>
      <ul>
        {itemList.map((item, index) => (
          <li key={index} className="alert alert-primary">
            <strong>Name:</strong> {item.name},{' '}
            <strong>Description:</strong> {item.description}
            <button onClick={() => handleRemoveClick(index)} className="btn btn-danger">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
