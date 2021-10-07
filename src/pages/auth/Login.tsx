import useAuth from "../../hooks/useAuth";

export default function Login() {
  const { loginWithGoogle } = useAuth();

  const handleLoginGoogle = async () => {
    try {
      await loginWithGoogle?.();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleLoginGoogle}>google</button>
    </div>
  );
}
