export default function RegistrationForm() {
  return (
    <form className="flex flex-col my-6">
      <div className="flex flex-col gap-[10px]">
        <label htmlFor="fname">First Name</label>
        <input
          className="border border-black/20 rounded-md py-2 px-4"
          type="text"
          name="fname"
          id="fname"
        />
      </div>

      <div className="flex flex-col gap-[10px]">
        <label htmlFor="fname">Last Name</label>
        <input
          className="border border-black/20 rounded-md py-2 px-4"
          type="text"
          name="lname"
          id="lname"
        />
      </div>
      <div className='flex flex-col gap-[10px]'>
        <label htmlFor="email">Email Address</label>
        <input className="border border-black/20 rounded-md py-2 px-4"type="email" name="email" id="email" />
      </div>
      <div className='flex flex-col gap-[10px]'>
        <label htmlFor="password">Password</label>
        <input className="border border-black/20 rounded-md py-2 px-4"  type="password" name="password" id="password" />
      </div>
      <button type='submit' className='btn-primary w-full mt-4'> Create Account</button>
    </form>
  );
}
