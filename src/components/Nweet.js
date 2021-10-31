import { dbService } from "fbase";
import React from "react";

const Nweet = ({ nweetObj, isOwner }) => {
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
  return (
    <div>
      <h4>{nweetObj.text}</h4>
      {isOwner && (
        <>
          <button onClick={onDeleteClick}>Delete Nweet</button>
          <button>Edit Nweet</button>
        </>
      )}
    </div>
  );
};

export default Nweet;
