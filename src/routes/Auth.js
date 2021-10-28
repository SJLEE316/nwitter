import { authService } from "fbase";
import { React, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (event) => {
    console.log(event.target.name); // email 입력과 password 입력을 구분하기 위해 2가지 함수를 만드는 방법보다 event.target.name으로 input 엘리먼트를 구분하는 방법이 더 효율적이다.
    const {
      target: { name, value }, // event.target으로 name과 value를 가져온다. .구조분해할당
    } = event;
    if (name == "email") {
      setEmail(value);
    } else if (name == "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      // 성공
      let data;
      if (newAccount) {
        // create newAccount
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        // log in
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      // 실패
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
      </form>
      <div>
        {/* firebase에 로그인 요청하는 버튼 -> 서버 호출 */}
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};

export default Auth;
