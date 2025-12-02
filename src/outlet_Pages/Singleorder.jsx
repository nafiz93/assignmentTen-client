import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Singleorder = ({ myOrder }) => {
  const pdfRef = useRef();

  const generatePdf = useReactToPrint({
    contentRef: pdfRef,
    documentTitle: "userdata",
  });

  return (
    <div style={{ marginBottom: "20px" }}>
      {/* Printable area */}
      <div
        ref={pdfRef}
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          maxWidth: "500px",
          background: "#f9f9f9",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Order Details</h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "16px",
          }}
        >
          <tbody>
            <tr>
              <th style={styles.th}>Buyer Name</th>
              <td style={styles.td}>{myOrder.buyerName}</td>
            </tr>
            <tr>
              <th style={styles.th}>Product Name</th>
              <td style={styles.td}>{myOrder.productName}</td>
            </tr>
            <tr>
              <th style={styles.th}>Price</th>
              <td style={styles.td}>${myOrder.price}</td>
            </tr>
            <tr>
              <th style={styles.th}>Address</th>
              <td style={styles.td}>{myOrder.address}</td>
            </tr>
            <tr>
              <th style={styles.th}>Quantity</th>
              <td style={styles.td}>{myOrder.quantity}</td>
            </tr>
            <tr>
              <th style={styles.th}>Date</th>
              <td style={styles.td}>{myOrder.date}</td>
            </tr>
            <tr>
              <th style={styles.th}>Location</th>
              <td style={styles.td}>{myOrder.location}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        onClick={generatePdf}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          background: "#4CAF50",
          border: "none",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>
    </div>
  );
};

const styles = {
  th: {
    textAlign: "left",
    padding: "10px",
    background: "#eee",
    border: "1px solid #ccc",
    width: "40%",
  },
  td: {
    padding: "10px",
    border: "1px solid #ccc",
    background: "white",
  },
};

export default Singleorder;
