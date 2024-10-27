import React from 'react';

function DynamicData() {
    return <div>{data[0].name}</div>;
}

function showData() {
    //   return <div>showData</div>;
    return [{ id: 1, name: '鹿晗', age: 20 }, { id: 2, name: '李贤', age: 21 }]
}

let data = showData();

export default DynamicData;