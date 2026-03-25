import React from 'react'

function initombol({isinya}) {
  function ja(){
    alert("yahahah")
  }
  return (
    <div className='bg-blue-700 text-white   w-fit p-2 rounded-xl mt-2'>
      <button onClick={()=>ja()}>
          {isinya}
        </button>
    </div>
  )
}

export default initombol