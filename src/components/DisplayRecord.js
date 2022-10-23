import CreateRecord from "./CreateRecord";
const DisplayRecord = (props) => {
  return (
    <>
      <h1 className="text-center bg-cyan-800 text-white py-2 font-bold text-2xl">
        All Students Record
      </h1>
      <table className="bg-cyan-800 text-white overflow-x-hidden w-full">
        <thead className="flex items-center justify-between p-4 gap-4">
          <th className="w-1/4 border bg-cyan-600">Name</th>
          <th className="w-1/4 border bg-cyan-600">Department</th>
          <th className="w-1/4 border bg-cyan-600">DOB</th>
          <th className="w-1/4 border bg-cyan-600">Gender</th>
        </thead>

        <tbody className="overflow-x-hidden w-full">
          {props.data.map((element, ind) => {
            return <CreateRecord element={element } index={ind} />
          })}
        </tbody>
      </table>
    </>
  );
};
export default DisplayRecord;
