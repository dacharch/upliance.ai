import { FormState } from "@/Context/StateProvider";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  
  const{content,setContent} = FormState() 

  return (
    <div>
      <ReactQuill theme="snow" value={content} onChange={setContent} />
    </div>
  );
};

export default RichTextEditor;
