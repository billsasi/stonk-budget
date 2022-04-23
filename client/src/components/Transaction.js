import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const Transaction = ({ transact, handleDelete, handleEdit }) => {
  const [editItem, setEditItem] = useState(false);
  const [newDesc, setNewDesc] = useState(transact.description);
  const [newAmt, setNewAmt] = useState(transact.amount);

  const handleDescChange = (e) => {
    setNewDesc(e.target.value);
  };
  const handleAmtChange = (e) => {
    setNewAmt(e.target.value);
  };

  const handleEditSave = (e) => {
    handleEdit(
      {
        description: newDesc,
        amount: Number(newAmt),
      },
      transact.id
    );
    setEditItem(!editItem);
  };

  const del_button = (
    <td>
      <button className="del-button" onClick={() => handleDelete(transact.id)}>
        Delete
      </button>
    </td>
  );
  const edit_button = (
    <td>
      <button className="edit-button" onClick={() => setEditItem(!editItem)}>
        Edit
      </button>
    </td>
  );
  const save_button = (
    <td>
      <button
        className="save-button"
        onClick={() => handleEditSave(transact.id)}
      >
        Save
      </button>
    </td>
  );
  const reg_entry = (
    <tr>
      <td>{transact.description}</td>
      <td>{transact.amount}</td>
      {del_button}
      {edit_button}
    </tr>
  );
  const input_entry = (
    <tr>
      <td>
        <input value={newDesc} onChange={handleDescChange}></input>
      </td>
      <td>
        <input type="number" value={newAmt} onChange={handleAmtChange}></input>
      </td>
      {del_button}
      {save_button}
    </tr>
  );

  useEffect(() => {
    setNewDesc(transact.description);
    setNewAmt(transact.amount);
  }, [transact.description, transact.amount]);
  return editItem ? input_entry : reg_entry;
};

export default Transaction;
