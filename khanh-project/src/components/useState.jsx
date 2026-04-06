import React, {useState, useEffect} from "react";
export const EffectDemo = () => {
    // State
    const [fullName, setFullName] = useState({name: 'name', familyName: 'family'});
    const [title, setTitle] = useState('T1');
    //Effect
    useEffect(() => {
        setFullName({name:'T1 Styles', familyName: 'LCK'})
    })
return (
    <div>
        <h1>Title: {title}</h1>
        <h2>Name: {fullName.name}</h2>
        <h2>Family Name: {fullName.familyName}</h2>
    </div>
)
}
export default EffectDemo;