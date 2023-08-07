const Contact = () => {
  return (
    <div className=' p-4 m-4'>
        <h1 className="font-bold text-4xl text-center mb-4">Contact Us</h1>
        <form action="" className="flex flex-col w-[20%] m-auto justify-center my-4">
          <input type="text" placeholder="Enter your name..." className="border border-black p-2 m-2 rounded-lg"/>
          <textarea placeholder="Enter your message..." className="border border-black p-2 m-2 rounded-lg"></textarea>
          <button className="border border-black my-2 p-2 block m-auto w-[40%] rounded-lg hover:bg-green-400 hover:border-green-400 hover:text-white">Submit</button>
        </form>
    </div>
  )
}

export default Contact;