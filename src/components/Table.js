import {stoks} from "../data"



function Table({SearchValue}) {
    
  return (
    <div>
      <table>
        <thead>
            <tr>
            <th>Company Name</th>
            <th>Ticker Symbol</th>
            <th>Current Share Price</th>
            <th>week High 52</th>
            <th>week Low 52</th>
            </tr>
        </thead>
        <tbody>
            {stoks
                
                .filter( 
                    SearchValue !== null ? 
                    ((company) => company.TickerSymbol.toString().toLowerCase().includes(SearchValue.toLowerCase())): 
                    ((company) => company.TickerSymbol !== null  ) )
                .map((company) =>(
                    <tr>
                        <td >{company.CompanyName}</td>
                        <td >{company.TickerSymbol}</td>
                        <td >{company.CurrentSharePrice}</td>
                        <td >{company.weekHigh52}</td>
                        <td >{company.weekLow52}</td>
                    </tr>
            ))}
        </tbody>
        
      </table>
    </div>
  );
}

export default Table;
