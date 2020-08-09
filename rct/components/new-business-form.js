import { Form, Field } from 'react-final-form'

const SimpleForm = (props) => {
  return (
    <Form
    onSubmit={props.onSubmit}
    render={({ handleSubmit }) => (
        <div className="w-full max-w-xs mx-auto mb-2">

    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" >Business Name</label>
        <div>
          <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="name" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
        <div>
          <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" component="input" type="email" placeholder="Email"/>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
          <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  name="category" component="select">
            <option></option>
            <option value="restaurant">restaurant</option>
            <option value="airport">airport</option>
            <option value="hotel">hotel</option>
          </Field>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="employees">Employees</label>
        <div>
          <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  name="employees" id="employees" component="input" type="number"/>
        </div>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">About</label>
        <div>
          <Field className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  name="description" component="textarea"/>
        </div>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
      </div>
    </form>
    </div>
    )}
    /> 
  )
}

export default SimpleForm;
