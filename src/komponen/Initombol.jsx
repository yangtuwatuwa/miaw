import React from 'react'

function initombol({isinya}) {
  function ja(){
    alert("yahahah")
  }
  return (
    <div>
      <button onClick={()=>ja()}>
          {isinya}
        </button>
    </div>
  )
}

export default initombol