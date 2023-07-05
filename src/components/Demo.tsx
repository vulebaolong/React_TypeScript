import { useLocalStorage } from "react-use";

type Props = {};
function Demo({}: Props) {
    const [value, setValue, remove] = useLocalStorage("my-key", "foo");
    const obs = {
        long: 123,
        abc: "oke"
    }
    const handleSet = () => {
        setValue(obs as any)
     }
    console.log(value);
    
    

    return (
        <div>
            <button onClick={handleSet}>set</button>
            <button onClick={() => remove()}>Remove</button>
        </div>
    );
}
export default Demo;
