import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function NewForm() {
  const [formData, setFormData] = useState({
    Newhigh: "",
    Newlow: "",
  });

  const [finalH, setFinalH] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  useEffect(()=>{
   if (formData.Newhigh == "" || formData.Newlow == "") {
      return setFinalH("בבקשה להכניס ערך ");
    }

    const regex = /^-?\d+(\.\d+)?$/;

    if (regex.test(formData.Newhigh) && regex.test(formData.Newlow)) {  
        
        const finalData = (70 * parseFloat(formData.Newhigh) + 40 * parseFloat(formData.Newlow))/100;

    setFinalH(finalData);
    }else{
        return setFinalH("הזנת מידע שגוי")
    }

  },[formData])

 
  

  return (
    <>
      <h3 className="text-center">New Result</h3>
      <div className="text-center">
        <Row className="mb-3 mx-1">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>70</Form.Label>
            <Form.Control
              type="text"
              placeholder="high"
              name="Newhigh"
              value={formData.Newhigh}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>40 </Form.Label>
            <Form.Control
              type="text"
              placeholder="קושי נמוך"
              name="Newlow"
              value={formData.Newlow}
              onChange={handleOnChange}
            />
          </Form.Group>
        </Row>

        <div className="container text-center">
          <div className="row justify-content-evenly">
            <div className="col-3">
              <div className="text-primary text-result">קושי   </div>
            </div>
            <div className="col-6">
              <div className="result p-1 text-danger">{finalH}</div>
            </div>
          </div>
          <br />

        </div>
      </div>
    </>
  );
}

export default NewForm;
