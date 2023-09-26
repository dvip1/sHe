import React, { useState, ChangeEvent, FormEvent } from 'react';

const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    district: '',
    email: '',
    department: '',
    mobileNumber: '',
    accusedName: '',
    aadharNumber: '',
    accusedDesignation: '',
    state: '',
    workingRelation: '',
    description: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can submit the form data or perform any other actions here.
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl mb-4 text-center">Form Component</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="district" className="block text-gray-700">
              District
            </label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="department" className="block text-gray-700">
              Department
            </label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="mobileNumber" className="block text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="accusedName" className="block text-gray-700">
              Name of Accused/Respondent
            </label>
            <input
              type="text"
              id="accusedName"
              name="accusedName"
              value={formData.accusedName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="aadharNumber" className="block text-gray-700">
              Aadhar Number
            </label>
            <input
              type="text"
              id="aadharNumber"
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="accusedDesignation" className="block text-gray-700">
              Designation of Accused
            </label>
            <input
              type="text"
              id="accusedDesignation"
              name="accusedDesignation"
              value={formData.accusedDesignation}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-gray-700">
              State
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div>
            <label htmlFor="workingRelation" className="block text-gray-700">
              Working Relation with Accused
            </label>
            <input
              type="text"
              id="workingRelation"
              name="workingRelation"
              value={formData.workingRelation}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="description" className="block text-gray-700">
              Brief Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75"
          >
            Submit
          </button>
        </div>
    </form>
    </div>
  );
};

export default FormComponent;
