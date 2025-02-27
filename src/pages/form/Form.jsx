import Input from "../../components/Input";

const Form = () => {
  return (
    <div className="bg-white w-[600px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center">
      <div className="text-4xl font-extrabold">Welcome</div>
      <div className="text-xl font-light mb-14">Sign Up now to get started!</div>
      <Input
        label="Full Name"
        name="name"
        placeholder="Enter Your Full Name"
        className="mb-6"
      />
      <Input
        label="Email"
        name="email"
        placeholder="Enter Your Email"
        className="mb-6"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Enter Your Password"
        className="mb-6"
      />
    </div>
  );
};

export default Form;
