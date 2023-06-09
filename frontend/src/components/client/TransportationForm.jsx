import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";

export default function AddTransportation() {
  const validationSchema = Yup.object().shape({
    destination: Yup.string().required("Destination is required"),
    departureDateTime: Yup.date().required(
      "Departure Date and Time is required"
    ),
    returnDateTime: Yup.date().nullable(),
    preferredModeOfTransportation: Yup.string(),
    minCost: Yup.number().required("Minimum Cost is required"),
    maxCost: Yup.number().required("Maximum Cost is required"),
    minTripDuration: Yup.number().required("Minimum Trip Duration is required"),
    maxTripDuration: Yup.number().required("Maximum Trip Duration is required"),
    levelOfComfort: Yup.string(),
  });

  const handleSubmit = (values) => {
    axios
      .post("http://localhost:5000/transportation/send", values)
      .then((response) => {
        console.log("Data submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting data:", error);
      });
  };

  

  return (
    <div>
      <Formik
        initialValues={{
          destination: "",
          departureDateTime: "",
          returnDateTime: "",
          preferredModeOfTransportation: "",
          minCost: "",
          maxCost: "",
          minTripDuration: "",
          maxTripDuration: "",
          levelOfComfort: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            style={{
              width: "50%",
              height: "50%",
              textAlign: "center",
              border: "1px solid black",
              padding: "20px",
              margin: "30px"
            }}
          >
            <div className="form-group form-outline">
              <label htmlFor="destination">Destination:</label>
              <input
                className="form-control"
                type="text"
                id="destination"
                name="destination"
                value={values.destination}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.destination && errors.destination && (
                <div className="error-message" style={{ color: "red" }}>
                  {errors.destination}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="departureDateTime">
                Departure Date and Time:
              </label>
              <input
                className="form-control"
                type="datetime-local"
                id="departureDateTime"
                name="departureDateTime"
                value={values.departureDateTime}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.departureDateTime && errors.departureDateTime && (
                <div className="error-message" style={{ color: "red" }}>
                  {errors.departureDateTime}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="returnDateTime">Return Date and Time:</label>
              <input
                className="form-control"
                type="datetime-local"
                id="returnDateTime"
                name="returnDateTime"
                value={values.returnDateTime}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.returnDateTime && errors.returnDateTime && (
                <div className="error-message" style={{ color: "red" }}>
                  {errors.returnDateTime}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="preferredModeOfTransportation">
                Preferred Mode of Transportation:
              </label>
              <select
                className="form-control"
                id="preferredModeOfTransportation"
                name="preferredModeOfTransportation"
                value={values.preferredModeOfTransportation}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select Mode of Transportation</option>
                <option value="bus">Bus</option>
                <option value="train">Train</option>
                <option value="van">Van</option>
                <option value="private">Private</option>
              </select>
              {touched.preferredModeOfTransportation &&
                errors.preferredModeOfTransportation && (
                  <div className="error-message" style={{ color: "red" }}>
                    {errors.preferredModeOfTransportation}
                  </div>
                )}
            </div>

            <div className="form-group">
              <label htmlFor="minCost">Minimum Cost:</label>
              <input
                className="form-control"
                type="number"
                id="minCost"
                name="minCost"
                value={values.minCost}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.minCost && errors.minCost && (
                <div className="error-message" style={{ color: "red" }}>
                  {errors.minCost}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="maxCost">Maximum Cost:</label>
              <input
                className="form-control"
                type="number"
                id="maxCost"
                name="maxCost"
                value={values.maxCost}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.maxCost && errors.maxCost && (
                <div className="error-message" style={{ color: "red" }}>
                  {errors.maxCost}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="minTripDuration">Minimum Trip Duration:</label>
              <input
                className="form-control"
                type="number"
                id="minTripDuration"
                name="minTripDuration"
                value={values.minTripDuration}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.minTripDuration && errors.minTripDuration && (
                <div className="error-message" style={{ color: "red" }}>
                  {errors.minTripDuration}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="maxTripDuration">Maximum Trip Duration:</label>
              <input
                className="form-control"
                type="number"
                id="maxTripDuration"
                name="maxTripDuration"
                value={values.maxTripDuration}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
              {touched.maxTripDuration && errors.maxTripDuration && (
                <div className="error-message" style={{ color: "red" }}>
                  {errors.maxTripDuration}
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="levelOfComfort">Level of Comfort:</label>
              <select
                className="form-control"
                id="levelOfComfort"
                name="levelOfComfort"
                value={values.levelOfComfort}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select Level of Comfort</option>
                <option value="luxury">Luxury</option>
                <option value="semi-luxury">Semi-Luxury</option>
                <option value="normal">Normal</option>
              </select>
              {touched.levelOfComfort && errors.levelOfComfort && (
                <div className="error-message" style={{ color: "red" }}>
                  {errors.levelOfComfort}
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
