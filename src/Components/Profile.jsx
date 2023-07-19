import Students from "./Students";

const Profile = () => {
  return (
    <>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        <Students ID="1" Name="Nguyen Van A" Age="30" Address="Ha Noi" />
        <Students ID="1" Name="Nguyen Van A" Age="30" Address="Ha Noi" />
        <Students ID="1" Name="Nguyen Van A" Age="30" Address="Ha Noi" />
        <Students ID="1" Name="Nguyen Van A" Age="30" Address="Ha Noi" />
        <Students ID="1" Name="Nguyen Van A" Age="30" Address="Ha Noi" />
        <Students ID="1" Name="Nguyen Van A" Age="30" Address="Ha Noi" />
        <Students ID="1" Name="Nguyen Van A" Age="30" Address="Ha Noi" />
        <Students ID="1" Name="Nguyen Van A" Age="30" Address="Ha Noi" />
      </table>
    </>
  );
};

export default Profile;
