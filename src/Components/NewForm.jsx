import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function NewForm() {
  const [formData, setFormData] = useState({
    high: "",
    low: 100,
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
   if (formData.high == "" || formData.low == "") {
      return setFinalH("בבקשה להכניס ערך ");
    }

    const regex = /^-?\d+(\.\d+)?$/;

    if (regex.test(formData.high) && regex.test(formData.low)) {  
        
        const finalData = (70 * parseFloat(formData.high) + 40 * parseFloat(formData.low))/100;

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
            <Form.Label>70 קושי גבוהה</Form.Label>
            <Form.Control
              type="text"
              placeholder="קושי גבוהה"
              name="high"
              value={formData["קושי גבוהה"]}
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>40 קושי נמוך</Form.Label>
            <Form.Control
              type="text"
              placeholder="קושי נמוך"
              
              value={formData["קושי נמוך"]}
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
