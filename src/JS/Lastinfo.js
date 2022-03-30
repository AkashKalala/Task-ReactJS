import "../CSS/Lastinfo.css";
import email from "../IMG/email.svg";
import location from "../IMG/location.svg";
import phone from "../IMG/phone.svg";
import Facebook from "../IMG/Facebook.svg";
import Github from "../IMG/Github.svg";
import Linkedin from "../IMG/Linkedin.svg";
import Twitter from "../IMG/Twitter.svg";
import { useState } from "react";
import { toast } from "react-toastify";
import Joi from "joi";
const defaultFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
const formSchema = Joi.object({
  name: Joi.string()
    .regex(/^[A-Z a-z]+$/)
    .min(3)
    .required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(), 
  phone: Joi.string()
    .regex(/^(\+91[\-\s]?)?(\91[\-\s]?)?[0]?(91)?[123456789]\d{9}$/)
    .required(),
  subject: Joi.string().alphanum().min(3).max(255).required(),
  message: Joi.string().min(3).required(),
});
function Lastinfo() {
  const [formData, setFormData] = useState(defaultFormData);

  const handleOnFieldChange = (event) => {
    try {
      const name = event.target.getAttribute("data-name");
      setFormData({ ...formData, [name]: event.target.value });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const { error, value } = formSchema.validate(formData);
    if (error) {
      if (error.details[0].context.key === "phone") {
        toast.error(`"phone" must be a valid phone number`);
      } else {
        toast.error(error.message);
      }
    } else {
      toast.success(
        "Thanks for reaching out! Our team will get back to you soon!"
      );
    }
  };
  return (
    <div className="b-div-8">
      <div className="info-last">
        <div className="info-1">
          <div className="info-1-1">
            <div className="info-1-1-t">
              <p>Contact Information</p>
            </div>
            <div className="info-1-1-c">
              <div>
                <img src={email} className="logo-img" />
                <p>contact@coursepro.com</p>
              </div>
              <div>
                <img src={phone} className="logo-img" />
                <p>1800-562-895, 1800-869-877</p>
              </div>
              <div>
                <img src={location} className="logo-img" />
                <p>102 Street, India</p>
              </div>
            </div>
          </div>
          <div className="info-1-2">
            <div className="info-1-2-t">
              <p>Social Media Channel</p>
            </div>
            <div className="info-icons">
              <img src={Facebook} className="social-img fb" />
              <img src={Twitter} className="social-img" />
              <img src={Github} className="social-img" />
              <img src={Linkedin} className="social-img" />
            </div>
          </div>
        </div>
        <div className="info-2">
          <div className="form1">
            <div className="form-t">
              <p>
                Fill up the form and our team will get back to you within 24
                hours
              </p>
            </div>
            <form className="form-main">
              <div className="form-div-1">
                <input
                  type="text"
                  placeholder="Name"
                  data-name="name"
                  value={formData.name}
                  onChange={handleOnFieldChange}
                ></input>
                <input
                  type="text"
                  placeholder="Email"
                  data-name="email"
                  value={formData.email}
                  onChange={handleOnFieldChange}
                ></input>
              </div>
              <div className="form-div-2">
                <input
                  type="text"
                  placeholder="Phone"
                  data-name="phone"
                  value={formData.phone}
                  onChange={handleOnFieldChange}
                ></input>
                <input
                  type="text"
                  placeholder="Subject"
                  data-name="subject"
                  value={formData.subject}
                  onChange={handleOnFieldChange}
                ></input>
              </div>
              <div className="form-div-3">
                <textarea
                  placeholder="Message"
                  data-name="message"
                  value={formData.message}
                  onChange={handleOnFieldChange}
                ></textarea>
              </div>
              <div className="form-div-4">
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lastinfo;
