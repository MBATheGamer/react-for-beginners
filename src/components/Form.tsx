import { FormEvent, useRef } from "react";

export default function Form() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = {
    name: "",
    age: 0,
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current) person.name = nameRef.current.value;
    if (ageRef.current) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input type="text" ref={nameRef} id="name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input type="number" ref={ageRef} id="age" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
