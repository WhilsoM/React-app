import '../styles/App.scss'

let count = 0

function App() {
	const onClick = () => {
		count++
		console.log(`You click button - ${count} раз`)
	}

	return (
		<>
			<h1>Hello, this is React + TS</h1>
			<p>And this paragraph</p>
			<button onClick={onClick}>Click me</button>
		</>
	)
}

export default App
