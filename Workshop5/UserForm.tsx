import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    alert(`ชื่อ: ${formData.name}\nอีเมล: ${formData.email}`);
  };

  const handleClear = () => {
    setFormData({ name: '', email: '' });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>User Form Exercise - Solution</h2>

      <div style={{ marginBottom: '10px', textAlign: 'left' }}>
        <label>ชื่อ:</label>
        <input
          type="text"
          name="name"
          placeholder="กรอกชื่อของคุณ"
          value={formData.name}
          onChange={handleChange}
          style={{ width: '100%', marginTop: '5px', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '10px', textAlign: 'left' }}>
        <label>อีเมล:</label>
        <input
          type="email"
          name="email"
          placeholder="กรอกอีเมลของคุณ"
          value={formData.email}
          onChange={handleChange}
          style={{ width: '100%', marginTop: '5px', padding: '8px' }}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <button
          style={{
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '8px 16px',
            marginRight: '10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
          onClick={handleClear}
        >
          Clear
        </button>
      </div>

      <div
        style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          textAlign: 'left'
        }}
      >
        <h4>ข้อมูลปัจจุบัน:</h4>
        <p>ชื่อ: {formData.name || 'ยังไม่ได้กรอก'}</p>
        <p>อีเมล: {formData.email || 'ยังไม่ได้กรอก'}</p>
      </div>
    </div>
  );
};

export default UserForm;