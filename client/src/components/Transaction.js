import React, { useEffect, useState } from 'react';
import { FiEdit2, FiDelete } from 'react-icons/fi';
import { categoryOptions } from '../Utils';
import Select from 'react-select';

const Transaction = ({ transact, handleDelete, handleEdit }) => {
  const [editItem, setEditItem] = useState(false);
  const [newDesc, setNewDesc] = useState(transact.description);
  const [newAmt, setNewAmt] = useState(transact.amount);
  const [newCat, setNewCat] = useState({ label: transact.category, value: '' });
  const [str, setStr] = useState(
    `${new Date().getMonth() + 1}/${new Date().getDate()}`
  );
  const [newDate, setNewDate] = useState({});

  const handleDescChange = (e) => {
    setNewDesc(e.target.value);
  };
  const handleAmtChange = (e) => {
    setNewAmt(e.target.value);
  };
  const handleCatChange = (cat) => {
    setNewCat(cat);
  };
  const handleDateChange = (e) => {
    setStr(e.target.value);
  };

  useEffect(() => {
    setNewDate({
      day: Number(str.split('/')[1]),
      month: Number(str.split('/')[0]),
      year: new Date().getFullYear(),
    });
  }, [str]);

  const handleEditSave = () => {
    console.log([newDesc, newAmt, newCat, newDate]);
    handleEdit(
      {
        ...transact,
        description: newDesc,
        amount: Number(newAmt),
        category: newCat.label,
        date: newDate,
      },
      transact._id
    );
    setEditItem(!editItem);
  };

  const del_button = (
    <td>
      <button className="del-button" onClick={() => handleDelete(transact._id)}>
        <FiDelete />
      </button>
    </td>
  );
  const edit_button = (
    <td>
      <button className="edit-button" onClick={() => setEditItem(!editItem)}>
        <FiEdit2 />
      </button>
    </td>
  );
  const save_button = (
    <td>
      <button className="save-button" onClick={() => handleEditSave()}>
        Save
      </button>
    </td>
  );
  const reg_entry = (
    <tr>
      <td>{transact.category}</td>
      <td>{transact.description}</td>
      <td style={{ color: 'green' }}>${transact.amount}</td>
      <td>
        {transact.date.month}/{transact.date.day}
      </td>
      {del_button}
      {edit_button}
    </tr>
  );
  const input_entry = (
    <tr>
      <td>
        <Select
          options={categoryOptions}
          defaultValue={newCat}
          onChange={handleCatChange}
        ></Select>
      </td>
      <td>
        <input value={newDesc} onChange={handleDescChange}></input>
      </td>
      <td>
        <input type="number" value={newAmt} onChange={handleAmtChange}></input>
      </td>
      <td>
        <input value={str} onChange={handleDateChange}></input>
      </td>
      {del_button}
      {save_button}
    </tr>
  );

  useEffect(() => {
    setNewDesc(transact.description);
    setNewAmt(transact.amount);
  }, [transact.description, transact.amount]);
  console.log(transact.category);
  return editItem ? input_entry : reg_entry;
};

export default Transaction;
