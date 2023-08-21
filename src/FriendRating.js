export default function FriendRating({ friendTip, friendTipHandle }) {
  return (
    <div>
      <p>How did you like the service? </p>
      <select value={friendTip} onChange={(e) => friendTipHandle(e)}>
        <option value={0}>Unsatisfied (0%)</option>
        <option value={10}>Good (10%)</option>
        <option value={20}>Amazing! (20%)</option>
      </select>
    </div>
  );
}
