import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Could not load users. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

const filteredUsers = users.filter((user) => {
  const searchText = search.toLowerCase();

  return (
    user.name.toLowerCase().includes(searchText) ||
    user.email.toLowerCase().includes(searchText)
  );
});

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Search Users</h2>
      <p>
       Showing {filteredUsers.length} of {users.length} users
      </p>

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        filteredUsers.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Users;