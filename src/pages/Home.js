import { DefaultLayout } from "components/layouts/default";
import { LoginForm } from "components/layouts/login";

function Home() {
  return (
    <DefaultLayout>
      <h1 className="text-2xl">홈</h1>
      <hr />
      <LoginForm />
    </DefaultLayout>
  );
}

export default Home;
