import api from "services/api";
import { POST } from "utils/constants/verbs";
import { USERS } from "utils/constants/endpoints";

const CreateUsers = () => <h1>...Login</h1>

export async function getServerSideProps({ res, query: { name, email, password, confirmPassword }}) {
  try {
    const { data } = await api({
      method: POST,
      url: USERS,
      data: {
        name: `${name}`,
        email: `${email}`,
        password: `${password}`,
        confirmPassword: `${confirmPassword}`,
      }
    });
    console.log(data);
    console.log(res)
    return {
      props: {}
    }
  } catch (error) {
    return {
      props: {}
    };
  }
}

export default CreateUsers;