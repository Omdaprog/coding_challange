import SearchForm from "./components/SearchForm";
import Table from "./components/Table";
import { useState } from "react";



function App() {

  const [SearchValue, setSearchValue] = useState(null)
  
  return (
    <div className="section">
      <SearchForm 
        setSearchValue={setSearchValue}
      />
      <Table  
        SearchValue={SearchValue}
        />
    
    </div>
  );
}

export default App;
