import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

const CanjearCupon = () => {
  const [cupones, setCupones] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ id: '', nombre: '' });
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const fetchCupones = async () => {
    const cuponesCol = collection(db, 'canjeados');
    const cuponesSnapshot = await getDocs(cuponesCol);
    const cuponesList = cuponesSnapshot.docs.map(doc => ({ ...doc.data(), docId: doc.id }));
    setCupones(cuponesList);
  };

  useEffect(() => {
    fetchCupones();
  }, []);

  const handleInputChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.id || !form.nombre) return;
    await addDoc(collection(db, 'canjeados'), {
      id: form.id,
      nombre: form.nombre,
      fecha: new Date().toISOString().split('T')[0],
    });
    setForm({ id: '', nombre: '' });
    setShowForm(false);
    fetchCupones();
  };

  const handleDelete = async docId => {
    await deleteDoc(doc(db, 'canjeados', docId));
    fetchCupones();
  };

  const filteredCupones = cupones.filter(c => c.id.includes(search));

  return (
    <div style={{ padding: 20, background: darkMode ? '#23272b' : '#fff', color: darkMode ? '#fff' : '#23272b', minHeight: '100vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20, justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={() => window.location.href = '/'}
            style={{ marginRight: 16, background: '#198754', color: 'white', border: 'none', borderRadius: 4, padding: '8px 16px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Regresar al inicio
          </button>
          <h2 style={{ margin: 0 }}>Canjear Cupón</h2>
        </div>
        <button
          className={darkMode ? 'btn btn-light' : 'btn btn-dark'}
          onClick={() => setDarkMode(!darkMode)}
          style={{ fontWeight: 'bold' }}
        >
          {darkMode ? 'Tema Claro' : 'Tema Oscuro'}
        </button>
      </div>
      <hr style={{ margin: '20px 0', borderColor: darkMode ? '#444' : '#dee2e6' }} />
      <button onClick={() => setShowForm(!showForm)} style={{ background: '#0d6efd', color: 'white', border: 'none', borderRadius: 4, padding: '8px 16px', fontWeight: 'bold', cursor: 'pointer', marginBottom: 16 }}>
        {showForm ? 'Cancelar' : 'Crear cupón'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit} style={{ margin: '20px 0', display: 'flex', gap: 8 }}>
          <input
            name="id"
            placeholder="ID del cupón"
            value={form.id}
            onChange={handleInputChange}
            required
            style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc', background: darkMode ? '#343a40' : '#fff', color: darkMode ? '#fff' : '#23272b' }}
          />
          <input
            name="nombre"
            placeholder="Nombre del cupón"
            value={form.nombre}
            onChange={handleInputChange}
            required
            style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc', background: darkMode ? '#343a40' : '#fff', color: darkMode ? '#fff' : '#23272b' }}
          />
          <button type="submit" style={{ background: '#198754', color: 'white', border: 'none', borderRadius: 4, padding: '8px 16px', fontWeight: 'bold', cursor: 'pointer' }}>Guardar</button>
        </form>
      )}
      <input
        type="text"
        placeholder="Buscar por ID"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ marginBottom: 10, padding: 8, borderRadius: 4, border: '1px solid #ccc', width: 200, background: darkMode ? '#343a40' : '#fff', color: darkMode ? '#fff' : '#23272b' }}
      />
      <table border="1" cellPadding="8" style={{ width: '100%', marginTop: 10, borderCollapse: 'collapse', background: darkMode ? '#23272b' : 'white', color: darkMode ? '#fff' : '#23272b' }}>
        <thead style={{ background: darkMode ? '#343a40' : '#f8f9fa' }}>
          <tr>
            <th>ID Cupón</th>
            <th>Nombre</th>
            <th>Fecha de canjeo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {filteredCupones.map(c => (
            <tr key={c.docId}>
              <td>{c.id}</td>
              <td>{c.nombre}</td>
              <td>{c.fecha}</td>
              <td>
                <button onClick={() => handleDelete(c.docId)} style={{ background: '#dc3545', color: 'white', border: 'none', borderRadius: 4, padding: '4px 12px', cursor: 'pointer' }}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CanjearCupon;
