export default function ProductLayout({ children }) {
  return (
    <div>
      <div className="row">
        <h1>Header Prodcut</h1>
      </div>
      {children}
      <div className="row">
        <h1>Header Prodcut</h1>
      </div>
    </div>
  );
}
