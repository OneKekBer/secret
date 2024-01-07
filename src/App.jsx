
function App() {

  const content = [
    {
      title: 'хлеб духмынй'
    },
    {
      title: 'хлеб чесночный'
    },
    {
      title: 'хлеб медовый'
    }
  ]

  return (
    <div className='w-full h-screen bg-slate-200'>
      <div className='flex p-14 justify-between '>
        {content.map((item, i) => {


          return (
            <div key={i} className='w-[300px] p-5 h-[500px] bg-slate-400 shadow-xl rounded-[20px]'>{item.title}</div>
          )
        })}
      </div>
    </div>
  )
}

export default App;

