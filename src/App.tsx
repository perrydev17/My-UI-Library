import Button from "./components/Button";


function App() {
  return (
    <main className="mx-auto px-4 py-4">
      <div className="space-x-2">
      <Button>Default</Button>
      <Button variant="primary">Submit</Button>
      <Button variant="destructive">Cancel</Button>
      <Button variant="warning">Warning</Button>
      </div>
    </main>
  )
}

export default App;
