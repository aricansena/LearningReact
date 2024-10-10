import './App.css'
import useCopyToClipboard from './hooks/useCopyToClipboard'
import useCounter from './hooks/useCounter'
import useToggle from './hooks/useToggle'

function App() {
  {/*  const { open, change } = useToggle();*/ }
  const [copied, copy] = useCopyToClipboard("Sena ARICAN")
  return (
    <div>
      {copied && 'kopyalandı'}
      <button onClick={copy}>Kopyala</button>
      { /*useToggle*/
      /* {open && <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>Kutu</div>}
      <button onClick={change}>{open ? 'Gizle' : 'Göster'}</button> */}
    </div>
  )
}

export default App
