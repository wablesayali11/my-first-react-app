function Student(props) {
  return (
    <div> 
      <h2>Name {props.name}</h2>
      <h2>College {props.college}</h2>
      <h2>Branch {props.branch}</h2>
    </div>
  );
}

export default Student;