function ProgressCard({ title, completed, total }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{completed} / {total}</p>
    </div>
  );
}

export default ProgressCard;