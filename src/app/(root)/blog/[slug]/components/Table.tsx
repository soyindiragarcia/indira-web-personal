interface TableProps {
  headers?: string[]
  rows?: string[][]
}

const Table: React.FC<TableProps> = (props) => {
  if (!props.headers || !props.rows) return null

  const headers = props.headers.map((header, index) => <th key={index}>{header}</th>)
  const rows = props.rows.map((row, index) => (
    <tr key={index}>
      {Array.isArray(row) ? row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>) : null}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default Table
