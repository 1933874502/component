import axios from "axios"
import React, { useEffect, useState } from "react"

function App() {
  const [title, setTitle] = useState("")
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1", {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      })
      .then((res) => {
        console.log(res.data)
      })
  })
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  )
}

export default App
