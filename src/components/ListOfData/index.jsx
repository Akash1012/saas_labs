import { useEffect,useState } from "react";
import Pagination from "../Pagination";
import "./styles.css";

const TableData = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const getData = async () => {
     const response = await  fetch('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json')
     const tableData = await response.json();
     setData(tableData);
    }
    getData()
  },[])

  return (
    <div>
      <section className="main_container">
        <h1 className="header">SaaS Labs</h1>
        <div className="tbl-content">
          <table className="list">
              <tr>
                <th>S.No.</th>
                <th>Percentage funded</th>
                <th>Amount pledged</th>
              </tr>
            <tbody>
              {data.slice(page * 5 - 5,page * 5).map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item["s.no"]}</td>
                    <td>{item["num.backers"]}</td>
                    <td>{item["percentage.funded"]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {data.length > 0 && (
        <Pagination data={data} page={page} setPage={setPage} />
      )}
       
      </section>
    </div>
  );
};

export default TableData;
