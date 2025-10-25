import { useContext } from "react";
import { toast } from "react-toastify";
import DummyIcon from "../../src/assets/avatar.png";
import Container from "../Components/ui_layout/Container";
import { AuthContext } from "../Provider/AuthProvider";

const Profile = () => {
  const { user, setUser, updateUser } = useContext(AuthContext);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    // const form = e.target;
    const updatedName = e.target.name.value;
    const updatedPhoto = e.target.photo.value;

    updateUser({ displayName: updatedName, photoURL: updatedPhoto })
      .then(() => {
        setUser(() => ({
          ...user,
          displayName: updatedName,
          photoURL: updatedPhoto,
        }));
        toast.success("Profile updated successfully!"),
          console.log("User profile updated");
      })
      .catch((err) => {
        console.log("Profile update error:", err);
      });
  };

  return (
    <div className="py-10 flex border justify-center items-center min-h-screen bg-gray-100">
      <Container className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center">User Profile</h1>
        {user ? (
          <div className="mt-6 flex flex-col md:flex-row md:space-x-6 ">
            <div className="pr-3 text-center md:text-left">
              <div className="w-32 h-32 mb-4 rounded-full overflow-hidden mx-auto">
                <img
                  className="w-full h-full object-cover"
                  src={user ? user?.photoURL : DummyIcon}
                  alt={user?.displayName || "User"}
                />
              </div>
              <h2 className="text-2xl font-semibold">User Information</h2>
              <p className="mt-2">Name: {user?.displayName}</p>
              <p>Email: {user?.email}</p>
            </div>

            <div className="space-y-6 md:border-l border-gray-300 pl-3 mt-10 md:mt-0">
              <h2 className="text-2xl font-semibold">Update information</h2>

              <form onSubmit={handleUpdateUser}>
                <input
                  name="name"
                  type="text"
                  defaultValue={user?.displayName || ""}
                  placeholder="Update Name"
                  className="border w-full mb-4 py-2 px-3 rounded"
                  required
                  onFocus={(e) => (e.target.value = "")}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.value = user?.displayName || "";
                    }
                  }}
                />
                <input
                  name="photo"
                  type="url"
                  defaultValue={user?.photoURL || ""}
                  placeholder="Update photoURL"
                  className="border w-full mb-4 py-2 px-3 rounded"
                  required
                  onFocus={(e) => (e.target.value = "")}
                  onBlur={(e) => {
                    if (!e.target.value) {
                      e.target.value = user?.photoURL || "";
                    }
                  }}
                />
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer w-full md:w-auto hover:bg-blue-600"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <p className="mt-4">No user information available.</p>
        )}
      </Container>
    </div>
  );
};

export default Profile;
