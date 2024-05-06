import { Link } from "react-router-dom";

export default [
    {
      id: '1',
      data: { label: <Link to='/view-leads'><div className="box-container">
      <span role="img" aria-label="client">👤</span>
      <p>Leads</p>
  </div></Link> },
      position: { x: 500, y: 0 },
    },
    
    {
      id: '2',
      data: { label: <div className="box-container">
      <span role="img" aria-label="client">📧</span>
      <p>Send Mail</p>
  </div>},
      position: { x: 250, y: 250 },
    },
    {
      id: '3',
      data: { label: <Link to='/add-leads'><div className="box-container">
      <span role="img" aria-label="client">📊</span>
      <p>Add Leads</p>
  </div></Link> },
      position: { x: 750, y: 250 },
    },
  
    
  ];
  