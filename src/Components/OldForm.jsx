import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function GridBasicExample() {
  const [formData, setFormData] = useState({
    high: "",
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
    if (formData.high == "") {
      setLowValue(100);
      return setFinalH("Enter Value");
    }

    const regex = /^-?\d+(\.\d+)?$/;

    if (regex.test(formData.high)) {
      const a = low - formData.high;
      setLowValue(a);

      if (a + formData.high < 100) {
  
        setLowValue(100)

        return setFinalH("the value higher than 100");
      }

      const finalData =
        (70 * parseFloat(formData.high) + 40 * parseFloat(a)) / 100;

      setFinalH(finalData);

    } else {
      return setFinalH("Wrong Value");
    }
  }, [formData]);

 
  

  return (
    <>
      <h3 className="text-center">Old Result</h3>
      <div className="text-center">
        <Row className="mb-3 mx-1">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>70  </Form.Label>
            <Form.Control
              type="text"
              placeholder="high "
              name="high"
              value={formData.high}
              onChange={handleOnChange}
            />
          </Form.Group>


          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>40</Form.Label>
            <Form.Control
              type="text"
              placeholder="low"
              name="low"
              value={lowValue}
              onChange={handleOnChange}
            />
          </Form.Group>
        </Row>

        <div className="container text-center">
          <div className="row justify-content-evenly">
            <div className="col-3">
              <div className="text-primary"> Final result  </div>
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

export default GridBasicExample;
