import React from "react"
export default function Users(props) {
    return (
        <div>
            <div>
                <p>이름: {props.name}</p>
            </div>

            <div>
                <p>나이: {props.age}</p>
            </div>
            <div>
                <p>전화번호: {props.callnum}</p>
            </div>
        </div>
    )
}
//컨트롷ㄹ k f