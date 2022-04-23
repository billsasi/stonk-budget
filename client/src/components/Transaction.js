import React, { useEffect, useState } from 'react';

const Transaction = ({transact, handleDelete, handleEdit}) => {
  const [editItem, setEditItem] = useState(false);
  const [desc, setDesc] = useState(transact.name);
  const [amt, setAmt] = useState(transact.amt);

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };
  const handleAmtChange = (e) => {
    setAmt(e.target.value);
  };

  const handleEditSave = (e) => {
    handleEdit({
      name: desc,
      amt: Number(amt),
    }, transact.id);
    setEditItem(!editItem);
  };

  const del_button = <td><button className="del-button" onClick={() => handleDelete(transact.id)}>Delete</button></td>
  const edit_button = <td><button className="edit-button" onClick={() => setEditItem(!editItem)}>Edit</button></td>
  const save_button = <td><button className="save-button" onClick={() => handleEditSave(transact.id)}>Save</button></td>
  const reg_entry = (
    <tr>
    <td>{desc}</td>
    <td>{amt}</td>
    {del_button}
    {edit_button}
    </tr>
  )
  const input_entry = (
      <tr>
    <td><input value={desc} onChange={handleDescChange}></input></td>
    <td><input type="number" value={amt} onChange={handleAmtChange}></input></td>
    {del_button}
    {save_button}
    </tr>
  )

  useEffect(() => {
    setDesc(transact.name);
    setAmt(transact.amt);
  },[transact.name, transact.amt])
  return (editItem ? input_entry : reg_entry);
};

export default Transaction;

