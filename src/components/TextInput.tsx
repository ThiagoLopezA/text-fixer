import { Button, Stack, TextField } from "@mui/material";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";

interface initialValuesProps {
  brokenText: string;
}

export type onSubmitProps = (
  values: initialValuesProps,
  actions: FormikHelpers<initialValuesProps>
) => void;

interface ITextInput {
  onSubmit: onSubmitProps;
}

const getFromProps = () => {
  const initialValues = {
    brokenText: "",
  };

  const validationSchema = Yup.object().shape({
    brokenText: Yup.string().required("Required"),
  });

  return { initialValues, validationSchema };
};

export default function TextInput({ onSubmit }: ITextInput) {
  const { initialValues, validationSchema } = getFromProps();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
      }) => (
        <Form>
          <Stack>
            <TextField
              name="brokenText"
              label="Broken Text"
              multiline
              rows={30}
              value={values.brokenText}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.brokenText && Boolean(errors.brokenText)}
              helperText={touched.brokenText && errors.brokenText}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2 }}
              disabled={isSubmitting}
            >
              Fix
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
