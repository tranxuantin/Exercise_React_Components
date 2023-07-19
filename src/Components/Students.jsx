const Students = ({ ID, Name, Age, Address }) => {
  return (
    <>
      <tr>
        <td>{ID}</td>
        <td>{Name}</td>
        <td>{Age}</td>
        <td>{Address}</td>
      </tr>
    </>
  );
};

export default Students;
