import CourseFormV1 from "./v1/CourseFormV1";

type CourseFormProps = {
  onClose: () => void;
};

const CourseForm: React.FC<CourseFormProps> = ({ onClose }) => {
  return <CourseFormV1 onClose={onClose} />;
};

export default CourseForm;