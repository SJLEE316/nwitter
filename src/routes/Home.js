import { React, useState, useEffect } from "react";
import { dbService } from "fbase";

const Home = ({ userObj }) => {
  // console.log(userObj); // uid(user id) -> 사용자를 구분할 수 있음

  const [nweet, setNweet] = useState(""); // 문서 한 개
  const [nweets, setNweets] = useState([]); // 컬랙션 전체

  // 실시간 렌더링이 불가능하다.
  // const getNweets = async () => {
  //   const dbNweets = await dbService.collection("nweets").get(); // 문서의 개수가 많으면 get()을 한 번만 실행해서는 안된다.
  //   // console.log(dbNweets); // 스냅샷(파이어베이스의 원본). 우리가 원하는 데이터는 스냅샷 속에 숨어 있다.
  //   // dbNweets.forEach((document) => console.log(document.data())); // 여러 개의 문서 스냅샷을 순회하기 위해 forEach 함수를 사용. 우리가 원하는 데이터는 data() 함수로 얻을 수 있다.
  //   dbNweets.forEach((document) => {
  //     const nweetObject = { ...document.data(), id: document.id };
  //     setNweets((prev) => [nweetObject, ...prev]); // 전개구문 -> 데이터를 쌓는다.
  //     // setNweets((prev) => [document.data(), ...prev]); // 전개구문
  //   });
  // };

  useEffect(() => {
    // getNweets();
    dbService.collection("nweets").onSnapshot((snapshot) => {
      // get함수에서 onSnapshot 함수로 바꾸었다. onSnapshot은 get 함수처럼 스냅샷을 반환하고, 그 안의 문서 스냅샷들은 docs로 얻어낸다.
      // map 함수를 적용하면 문서 스냅샷에서 원하는 값만 뽑아 다시 배열화할 수 있다.
      const newArray = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      setNweets(newArray);
    });
  }, []);

  // console.log(nweets);

  const onSubmit = async (event) => {
    event.preventDefault();
    // Promise를 반환하므로 async-await 문을 사용
    // nweets라는 컬렉션 생성
    await dbService.collection("nweets").add({
      // 해당 컬렉션의 문서 생성
      text: nweet, // nweet을 text 필드로 저장
      createdAt: Date.now(), // 숫자가 클수록 최근에 등록한 데이터
      creatorId: userObj.uid,
    });
    setNweet(""); // 저장을 하면 nweet 상태를 빈 문자열로 초기화
  };

  const onChange = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120} // 글자수 제한
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
          <div key={nweet.id}>
            <h4>{nweet.text}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
