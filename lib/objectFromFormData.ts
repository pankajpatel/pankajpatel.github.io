type Value = string | number | boolean;

export const objectFromFormData = (formData: FormData) => {
  const values: Record<string, Value | Array<Value>> = {};
  // @ts-ignore
  for (let [key, value] of formData.entries()) {
    if (values[key]) {
      if (!(values[key] instanceof Array)) {
        const v = values[key];
        values[key] = [];
        (values[key] as Array<Value>).push(v as Value);
      }
      (values[key] as Array<Value>).push(value);
    } else {
      values[key] = value;
    }
  }
  return values;
};
