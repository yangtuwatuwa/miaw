export default function PrimaryButton({ isinya }) {
  function handleClick() {
    alert('yahahah')
  }

  return (
    <div className="bg-blue-700 text-white w-fit p-2 rounded-xl mt-2">
      <button type="button" onClick={handleClick}>
        {isinya}
      </button>
    </div>
  )
}
