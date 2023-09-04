import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function NewForm() {
  const [formData, setFormData] = useState({
    Newhigh: "",
  });
  const [low, setLow] = useState(100);
  const [finalH, setFinalH] = useState("");
const [lowValue, setLowValue] = useState()
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  useEffect(() => {
    if (formData.Newhigh == "") {
        setLowValue(100)
      return setFinalH("Enter Value");

    }

    const regex = /^-?\d+(\.\d+)?$/;

    if (regex.test(formData.Newhigh)) {
      const a = low - formData.Newhigh;
      setLowValue(a)
      
      const finalData =
        (70 * parseFloat(formData.Newhigh) + 40 * parseFloat(a)) / 100;

      setFinalH(finalData);
    } else {
      return setFinalH("Wrong Value");
    }
  }, [formData]);

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
              style={{ textAlign: 'center' }}
            />
          </Form.Group>


          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>40</Form.Label>
            <Form.Control
              type="text"
              placeholder="low"
              name="newLow"
              value={lowValue}
              onChange={handleOnChange}
              style={{ textAlign: 'center' }}
            />
          </Form.Group>
        </Row>
        <div className="container text-center">
          <div className="row justify-content-evenly">
            <div className="col-3">
              <div className="text-primary text-result"> Final result </div>
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
