import { dbService } from "fbase";
import { React, useState } from "react";

const Nweet = ({ nweetObj, isOwner }) => {
  // 수정기능
  const [editing, setEditing] = useState(false); // 수정 버튼을 클릭했을 때 입력란과 버튼이 나타나는 기준점.
  const [newNweet, setNewNweet] = useState(nweetObj.text); // 입력란과 버튼이 나타날 때 입력란에 기존 트웻이 보이도록 초깃값을 관리하기 위한 상태

  // onSnapshot 함수를 사용할 떄는 async-await 문이 없어도 되지만, 있어도 똑같이 동작한다. onSnapshot 함수를 다른 함수로 교체할 때를 대비하여 async-await 문을 쓰는 것을 권장한다.
  const onDeleteClick = async () => {
    const ok = window.confirm("삭제하시겠습니까?");
    console.log(ok);
    if (ok) {
      // console.log(nweetObj.id); // 문서 id 불러오기
      // const data = await dbService.doc(`nweets/${nweetObj.id}`); // 문서 불러오기
      const data = await dbService.doc(`nweets/${nweetObj.id}`).delete(); // 문서 삭제하기
      console.log(data);
    }
  };

  const toggleEditing = () => {
    setEditing((prev) => !prev); // 수정하기 true -> 토글 나타남, false -> 토글 사라짐.
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    // console.log(nweetObj.id, newNweet);
    await dbService.doc(`nweets/${nweetObj.id}`).update({ text: newNweet }); // 문서를 찾아서 update를 요청한다.
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input onChange={onChange} value={newNweet} required />
            <input type="submit" value="Updat Nweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Edit Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
