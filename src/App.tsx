function App() {
  return (
    <div>
      <section className='bg-yellow-400 h-screen p-10 flex flex-col gap-10'>
        <div className='flex flex-col items-center'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHUvOd8Q-VihyupbJCdgjIR2FxnjGtAgMu3g&usqp=CAU" alt="" 
          className='rounded-full w-28 shadow-2xl mb-2' />
          <span className='text-xl font-semibold'>John Rambo</span>
          <span className='text-xl font-medium text-slate-500'>+52 659-5115</span>
        </div>

        <div className='flex flex-col items-center gap-4'>
          <span className='text-xl text-blue-900 font-semibold'>Scan my Gold Class QR</span>
          <div className='text-center'>
            <div className='w-60 h-60 rounded-xl shadow-xl'>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="" />
            </div>
            <div className='mt-1 text-xs font-bold'>Gold class ID</div>
            <div className='text-slate-500 font-bold mt-2'>JDGS0001</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
