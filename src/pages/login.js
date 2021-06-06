import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const handlePost = (values) => {
    console.log(values, 'HERE');
  };
  return (
    <form onSubmit={handleSubmit(handlePost)}>
      <div style={{ display: 'block' }}>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          name="username"
          ref={register({ required: true })}
          placeholder="masukkan username"
        />
        {errors?.username && <span style={{ color: 'red' }}>masukkan usernamenya yaa</span>}
      </div>

      <div style={{ display: 'block' }}>
        <label htmlFor="password">password</label>
        <input
          id="password"
          type="password"
          name="password"
          ref={register({ required: true })}
          placeholder="masukkan password"
        />

        {errors?.password && <span style={{ color: 'red' }}>masukkan passwordnya yaa</span>}
      </div>

      <button type="submit">masuk yuk</button>
    </form>
  );
};

export default Login;
